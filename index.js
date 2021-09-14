import PKG from './package.json';
import Block from './src/blockchain/block';

const {name, version, author, description } = PKG;

console.log(`${name} ${version} ${author} ${description}`); 

const block = new Block(Date.now(),'pr3v10sh4sh','h4sh','d4t45');
console.log(block.toString());