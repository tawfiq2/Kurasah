import Web3 from "web3";
import metaCoinArtifact from "../../build/contracts/KURASAH.json";
// "../../build/contracts/KURASAH.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = metaCoinArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        metaCoinArtifact.abi,
        deployedNetwork.address,
      );

      console.log( deployedNetwork.address);

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];


      console.log(account);

      this.refreshBalance();
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  createTender: async function() {
    const _name= document.getElementById("name").value; 
    this.setStatus("(please wait)");
    const { createTender } = this.meta.methods;

    await createTender(_name).send({ from: this.account });
    this.setStatus("Tender has been create... (please wait)");
  },
 
  closeBid: async function() {
    const _name= document.getElementById("close").value;
    const { closeBid } = this.meta.methods;
    await closeBid(_name).send({ from: this.account });
    this.setStatus("Tender has been close... (please wait)");
  },


  bid: async function() {
    const _name= document.getElementById("bidding").value;
    const price = document.getElementById("price").value;
    
    const { bid } = this.meta.methods;
    const user=this.account;
    await bid(_name,user).send({ from: this.account,value:price });
    
    this.setStatus("Bid has been submit... (please wait)");
  },

  withdraw: async function() {
    const _name= document.getElementById("withdraw").value;
    const user= document.getElementById("user").value;
    const { withdraw} = this.meta.methods;
    await withdraw(_name).send({ from: this.account });
    await withdraw(user).send({ from: this.account });
    this.setStatus("withdraw has been submit... (please wait)");
  
  },
  numberOfBids: async function() {
    const _name= document.getElementById("number").value;
    const { numberOfBids } = this.meta.methods;
    await numberOfBids(_name).send({ from: this.account });
    this.setStatus(" (please wait)");
  },
 
  Bidinfo: async function (){
    const { Bidinfo } = this.meta.methods;
    const Info = parseInt(document.getElementById("Info").value);
    await Bidinfo(Info).call().then(function(res){
      console.log(res)
    });
    
  },

 // info: async function (){
  //  const { info } = this.meta.methods;
  //  const _name = parseInt(document.getElementById("info").value);
 //   await info(_name).call().then(function(res){
  //    console.log(res)
  //  });
    
 // },

 setStatus: function(message) {
  const status = document.getElementById("status");
  status.innerHTML = message;
},

};

window.App = App;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  App.start();
});
