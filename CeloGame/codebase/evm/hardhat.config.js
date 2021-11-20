/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers")
require("@ubeswap/hardhat-celo")
const { fornoURLs, ICeloNetwork } = require("@ubeswap/hardhat-celo")
require("./tasks/unpause")

const mnemonic = process.env.NOMIC

;module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      }
    }
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      chainId: 31337,
      accounts: {
        mnemonic
      },
    },
    hardhat: {
      accounts: {
        mnemonic
      },
    },
    alfajores: {
      url: fornoURLs[ICeloNetwork.ALFAJORES],
      accounts: {
        mnemonic
      },
      chainId: ICeloNetwork.ALFAJORES,
      live: true,
      gasPrice: 101 * 10 ** 6,
      gas: 8000000,
    },
    mainnet: {
      url: fornoURLs[ICeloNetwork.MAINNET],
      accounts: {
        mnemonic
      },
      chainId: ICeloNetwork.MAINNET,
      live: true,
      gasPrice: 101 * 10 ** 6,
      gas: 8000000,
    },
  },
  paths: {
    abis: __dirname + '/abis'
  }
}
