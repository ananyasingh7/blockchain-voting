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
module.exports = Blockchain;