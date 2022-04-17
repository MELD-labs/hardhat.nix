module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: "<fork_url_placeholder>", // replace this with the RPC URL you want to fork from
      },
      chainId: 80001,
      mining: {
        auto: false,
        interval: [3000, 6000] // mine a new block every 3-6 seconds
      },
    },
  },
  paths: {
    sources: "../truffle/contracts",
    tests: "../truffle/test",
  },
}
