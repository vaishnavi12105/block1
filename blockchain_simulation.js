
const crypto = require('crypto');

class Block {
  constructor(index, data, previousHash = '') {
    this.index = index;
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const content = this.index + this.timestamp + this.data + this.previousHash + this.nonce;
    return crypto.createHash('sha256').update(content).digest('hex');
  }
}


const block1 = new Block(1, "Alice pays Bob 10", "0");
const block2 = new Block(2, "Bob pays Charlie 5", block1.hash);
const block3 = new Block(3, "Charlie pays David 2", block2.hash);


[block1, block2, block3].forEach(block => {
  console.log(`\nBlock ${block.index}`);
  console.log(`Data: ${block.data}`);
  console.log(`Hash: ${block.hash}`);
  console.log(`Previous Hash: ${block.previousHash}`);
});