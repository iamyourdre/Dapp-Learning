pragma solidity ^0.8.0;

contract Incrementer2 {
    uint256 public number;

    event Increment2(uint256 value);
    event Reset();

    constructor(uint256 _initialNumber) {
        number = _initialNumber;
    }

    function increment(uint256 _value) public {
        require(_value > 0, "increment value should be positive number");
        number = number + _value;
        emit Increment2(_value);
    }

    function reset() public {
        number = 0;
        emit Reset();
    }

    function getNumber() public view returns (uint256) {
        return number;
    }
}