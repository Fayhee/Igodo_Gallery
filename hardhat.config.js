require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 588
    },
    
    Metis Testnet: {
      
        url: `https://etherium.infura.io/v3/${infuraId}`,
      url: "https://stardust.metis.io/?owner=588",
      accounts: [privateKey]
    },
   
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

