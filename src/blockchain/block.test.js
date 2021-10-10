import { expressionStatement } from '@babel/types';
import Block from './block';

describe('Block', () =>{
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(()=>{
        timestamp = new Date(2010,0,1);
        previousBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0';


    });
    
    it('Crear instancia con parametros', () =>{
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });

    it('usando static mine', () =>{
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('usando static hash', () =>{
        hash = Block.hash(timestamp, previousBlock.hash,data);
        const hasOutput = "6a1fcb29db266e2bbe42d5444c5d30ef68a1c1c2150648ccf6c6c4c0793124d0"

        expect(hash).toEqual(hasOutput);

    });

    it('usuando toString', () =>{
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});