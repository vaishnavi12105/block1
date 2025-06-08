const miner = { name: "Alice", power: Math.floor(Math.random() * 100) };
console.log("\n[PoW]");
console.log(`Miner ${miner.name} with power ${miner.power} is selected.`);
console.log("Chosen based on computing power.");


const staker = { name: "Bob", stake: Math.floor(Math.random() * 100) };
console.log("\n[PoS]");
console.log(`Staker ${staker.name} with stake ${staker.stake} is selected.`);
console.log("Chosen based on how much coin they stake.");


const voters = [
  { voter: "User1", vote: "Charlie" },
  { voter: "User2", vote: "Charlie" },
  { voter: "User3", vote: "David" }
];

console.log("\n[DPoS]");
const votes = {};
voters.forEach(v => {
  const name = v.vote;
  votes[name] = (votes[name] || 0) + 1;
});

const winner = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
console.log(`Validator selected by votes: ${winner}`);
console.log("Voted by users (delegates).");
