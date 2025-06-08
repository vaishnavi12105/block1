# block1
(Ques 1) What is Blockchain?

A blockchain is like a digital notebook shared among many computers. Instead of storing data in one place, it stores blocks of data in a chain. Each block is connected to the previous one, and this chain cannot be changed easily. It's very secure and helps in recording transactions or information in a way that everyone can trust without needing a middleman. If someone tries to change anything in the past, the whole chain becomes invalid.
Examples-
Real-Life Use Cases:
1.Supply Chain Tracking – Track products like food or medicines from manufacturer to customer.

2.Digital Identity – Securely store and control your ID without needing passwords.

(Ques 2) Draw a block

Block
Index: 1
Timestamp: 2025-06-06 15:30
Data: "Alice sends 5 coins to Bob"
Previous Hash: "0000abc123"
Nonce: 1245
Merkle Root: "89fgh78fgh"

# Merkle Root
A Merkle Root is a single hash value that represents all the transactions in a block on a blockchain. It’s a key part of how blockchain ensures data integrity and efficient verification.It’s created by repeatedly hashing pairs of transaction hashes until only one final hash remains — that’s the Merkle Root.
Example-  Merkle Root = hash(H12 + H34)

(Ques 3) 
# Proof of Work (PoW):
Miners solve a hard puzzle (like guessing a password).
It takes a lot of energy and time.
High energy use because it needs powerful computers running nonstop.

# Proof of Stake (PoS):
Validators are chosen based on how much coin they “stake” .
Less energy needed.
Richer users with more stake have more chance to be chosen.

# Delegated Proof of Stake (DPoS):
Users vote for a few delegates.
These delegates create new blocks.
It’s faster and more democratic .




