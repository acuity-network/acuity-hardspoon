import fs from 'fs';
let JSONbig = require('json-bigint')({ useNativeBigInt: true });
let { XXHash64 } = require('xxhash-addon');
let reverse = require("buffer-reverse");

let hash0 = new XXHash64(0);
let hash1 = new XXHash64(1);

function twox128(a: string, b: string): string {

  let aBuf = Buffer.from(a);
  let bBuf = Buffer.from(b);

  let hash: string = '0x';

  hash += reverse(hash0.hash(aBuf)).toString('hex');
  hash += reverse(hash1.hash(aBuf)).toString('hex');
  hash += reverse(hash0.hash(bBuf)).toString('hex');
  hash += reverse(hash1.hash(bBuf)).toString('hex');

  return hash;
}

let acuity = JSONbig.parse(fs.readFileSync('acuity.json', 'utf8'));
let snapshot = JSONbig.parse(fs.readFileSync('snapshot.json', 'utf8'));

console.log(twox128('Claims', 'Claims'));
let claimsKey = "0x9c5d795d0297be56027a4b2464e33397";

console.log(Object.keys(acuity.genesis.raw.top).length);

for (let key in snapshot.genesis.raw.top) {
  if (key.slice(0, 34) == claimsKey) {
    acuity.genesis.raw.top[key] = snapshot.genesis.raw.top[key]
  }
}

console.log(Object.keys(acuity.genesis.raw.top).length);

fs.writeFileSync('acuity.json', JSONbig.stringify(acuity));
console.log('acuity.json written.');
