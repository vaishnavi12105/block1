

class MiningBlock {
  constructor(data) {
    this.timestamp = Date.now();
    this.data = data;
    this.nonce = 0;
    this.hash = this.mineBlock(4); 
  }

  calculateHash() {
    const content = this.timestamp + this.data + this.nonce;
    return crypto.createHash('sha256').update(content.toString()).digest('hex');
  }

  mineBlock(difficulty) {
    const prefix = '0'.repeat(difficulty);
    const start = Date.now();

    while (true) {
      this.hash = this.calculateHash();
      if (this.hash.startsWith(prefix)) break;
      this.nonce++;
    }

    const end = Date.now();
    console.log(`Mined block with hash: ${this.hash}`);
    console.log(`Nonce attempts: ${this.nonce}`);
    console.log(`Time taken: ${(end - start) / 1000} seconds`);
    return this.hash;
  }
}

const minedBlock = new MiningBlock("Test mining block");
