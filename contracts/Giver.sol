// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Giver is Ownable, ReentrancyGuard {
    mapping(uint256 => Application) public applications;
    uint256 private applicationCount;
    bool private paused;

    struct Application {
        string name;
        string details;
        uint256 targetAmount;
        uint256 funds;
        address owner;
        uint256 end;
        bool verified;
    }

    modifier notPaused() {
        require(!paused, "Contract is currently paused");
        _;
    }

    constructor() {
        paused = false;
        applicationCount = 0;
    }
    
    function pauseContract(bool _paused) external onlyOwner {
        paused = _paused;
    }

    function createApplication(
        string calldata _name,
        string calldata _details,
        uint256 _targetAmt
    ) external notPaused returns(uint256 applicationId) {
        require(msg.sender != address(0), "Invalid applicant address");
        require(_targetAmt > 0, "Invalid target amount");

        applicationId = applicationCount++;
        Application storage created = applications[applicationId];
        created.name = _name;
        created.details = _details;
        created.targetAmount = _targetAmt;
        created.owner = msg.sender;
        created.verified = false;
        created.end = block.timestamp + 5 minutes; // TODO change to days
    }

    function deposit(uint256 _applicationId) external payable notPaused {
        require(msg.value > 0, "Value sent must be greater than 0");
        Application storage application = applications[_applicationId];
        require(application.end > block.timestamp, "Funding for this application has ended");

        application.funds += msg.value;
        payable(address(this)).transfer(msg.value); // TODO consider transfer/send/call
    }

    function withdraw(uint256 _applicationId) external nonReentrant notPaused {
        Application storage application = applications[_applicationId];
        require(application.owner == msg.sender, "Not owner of this application");
        require(block.timestamp > application.end, "Application has not yet ended");

        uint256 funds = application.funds;
        application.funds = 0;
        payable(application.owner).transfer(funds); // TODO consider transfer/send/call
    }
}