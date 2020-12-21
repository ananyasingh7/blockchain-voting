const Block = require('./block');

class Blockchain {

    constructor(difficulty){
        this.difficulty = difficulty;
        this.blockchain = [this.hardcodedBlock()];
    }


    hardcodedBlock(){
        //Sat Dec 12 17:20:36 EST 2020
        let index = 0;
        let timestamp = "null null null null:null:null EST 2020";
        let previousHash = null;
        let data = {};
        let block = new Block(index, timestamp, previousHash, data);
        return block;
    }

    latestBlock(){
        return this.blockchain[this.blockchain.length-1];
    }

    addNewBlock(newBlock){
        newBlock.previousHash = this.latestBlock().calculateHash();
        newBlock.proofOfWork(this.difficulty);
        this.blockchain.push(newBlock);
        if(!this.checkBlockchain()){
            console.log('ERROR');
            this.blockchain.pop();
        }
    }

    checkBlockchain(){
        for(let i = 1; i<this.blockchain.length; i++){
            let currentBlock = this.blockchain[i];
            let prevBlock = this.blockchain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== prevBlock.hash){
                return false;
            }
        }
        return true;
    }

}

/*
let test = new Blockchain(4);
console.log("smashingCoin mining in progress....");
test.addNewBlock(
  new Block(1, "Sat Dec 12 17:20:36 EST 2020", {
        "First Name" : "Rick",
        "Last Name"  : "Sanchez",
        "Address"    : "25 Eastern Drive",
        "Town" : "Newark",
        "State" : "NJ",
        "Drivers License ID" : "S1389939292",
        "Age" : "46"
        })
);

test.addNewBlock(
  new Block(2, "Sat Dec 12 17:20:36 EST 2020", {
    "First Name" : "Michelle",
    "Last Name"  : "Dunbar",
    "Address"    : "190 House Street",
    "Town" : "Ann Arbor",
    "State" : "MI",
    "Drivers License ID" : "D444439292",
    "Age" : "29"
    })
);

test.addNewBlock(
    new Block(2, "Sat Dec 12 17:20:36 EST 2020", {
      "First Name" : "Michelle",
      "Last Name"  : "Dunbar",
      "Address"    : "190 House Street",
      "Town" : "Ann Arbor",
      "State" : "MI",
      "Drivers License ID" : "D444439292",
      "Age" : "29"
      })
  );

//test.blockchain[2].previousHash = "000023705d7d1414cbe88fe0094fc5c0cd8efeb91c7c82de33478b4b4fa6600c";
//test.blockchain[2].hash = "00006818fddd9ffd8f97fd1ced0a0c4a52a4cb819502282a602f7024d9681978";

test.addNewBlock(
    new Block(3, "Sat Dec 12 17:20:36 EST 2020", {
        "First Name" : "David",
        "Last Name"  : "Ornn",
        "Address"    : "119 North 5th Ave",
        "Town" : "Portland",
        "State" : "OR",
        "Drivers License ID" : "H334784933",
        "Age" : "67"
    })
);


console.log(JSON.stringify(test, null, 4));




module.exports = Blockchain;
*/