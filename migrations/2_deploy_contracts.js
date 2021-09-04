const KURASAH = artifacts.require("KURASAH");
module.exports = async function(deployer, network, accounts) {
  deployer.deploy(KURASAH, accounts[0]);
};
