const SHA256 = require('crypto-js/sha256');
class Block{

    constructor(index, timestamp, hash, previousHash, data){
        this.index = index;
        this.timestamp = timestamp;
        this.hash = hash;
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
        console.log(this.data);
        return this.data;
    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}

let data = {

};
console.log(data);

let block = new Block(9, '11:28:59', 'hweweferwr', data);
let block2 = new Block(2, '45:24:21:90', 'e2defwqfwefqwfwqfqw', data);
console.log(block.calculateHash())
console.log(block2.calculateHash())
console.log(block.getData());
//module.exports = Block;