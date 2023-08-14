// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TechCityCycle is ERC721, Ownable {
    using Counters for Counters.Counter;
    string private _promptDescription =
        "Very atmospheric Technology City, a tiny Motorcycle, fantasy art";

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("TechCityCycle", "TCC") {}

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://gateway.pinata.cloud/ipfs/QmYQSXXhXwNjjBZrCtMjU9ZhiEKCZyLBA7JawfQ7eUtSxU/";
    }

    function safeMint() public onlyOwner {
        for (uint8 i = 0; i < 5; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment();
            _safeMint(msg.sender, tokenId);
        }
    }

    function promptDescription() public view returns (string memory) {
        return _promptDescription;
    }
}
