import PKG from './package.json';
import Block from './src/blockchain/block';

const {name, version, author, description } = PKG;

console.log(`${name} ${version} ${author} ${description}`); 

const { genesis } = Block;

const block1 = Block.mine(genesis, 'transact1');
console.log(block1.toString());

const block2 = Block.mine(genesis, 'transact2');
console.log(block2.toString());