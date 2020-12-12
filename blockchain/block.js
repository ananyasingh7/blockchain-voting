const SHA256 = require('crypto-js/sha256');
class Block{

    constructor(index, timestamp, previousHash, data){
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.data = data;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    getIndex(){
        return this.index;
    }

    getTimestap(){
        return this.timestamp;
    }

    getHash(){
        return this.hash();
    }

    getData(){
        return this.data;
    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + this.previousHash + this.timestamp + JSON.stringify(this.data)+this.nonce).toString();
    }

    proofOfWork(difficulty){
        while(this.hash.substring(0, difficulty) !==Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
            console.log(this.hash);
        }
        console.log("--------------");
        console.log(this.hash);        
    }





}

let data =  {'contentddd':{'path':'callie/circle','type':'filller'},'video':{'videoId':'CvIr-2lMLs‌​k-due','endSeconds':'30','startSeconds':15}};
let block = new Block(9, '11:28:59', 'hweweferwr', data);
let block2 = new Block(2, '45:24:21:90', 'e2defwqfwefqwfwqfqw', data);
console.log(block.calculateHash())
console.log(block.calculateHash().substring(0,4));
console.log(Array(5).join(0))
console.log("--------------");
console.log(block.proofOfWork(1));
//module.exports = Block;