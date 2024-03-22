import fs from 'fs';
let JSONbig = require('json-bigint')({ useNativeBigInt: true });
import { decodeAddress } from '@polkadot/keyring';

let keys = JSONbig.parse(fs.readFileSync('keys.json', 'utf8'));

for (let node of keys) {
  console.log("(");
  console.log("array_bytes::hex_n_into_unchecked(\"" + node[0].publicKey.slice(2) + "\"),");
  console.log("array_bytes::hex_n_into_unchecked(\"" + node[1].publicKey.slice(2) + "\"),");
  console.log("array_bytes::hex2array_unchecked(\"" + node[2].publicKey.slice(2) + "\").unchecked_into(),");
  console.log("array_bytes::hex2array_unchecked(\"" + node[3].publicKey.slice(2) + "\").unchecked_into(),");
  console.log("array_bytes::hex2array_unchecked(\"" + node[3].publicKey.slice(2) + "\").unchecked_into(),");
  console.log("array_bytes::hex2array_unchecked(\"" + node[3].publicKey.slice(2) + "\").unchecked_into(),");
  console.log("array_bytes::hex2array_unchecked(\"" + node[3].publicKey.slice(2) + "\").unchecked_into(),");
  console.log("),");
}

console.log(Buffer.from(decodeAddress("5DV3QBwhs7djHop5WEcUQ1BMFSmsqvqnDhrYh343x495AL4v")).toString('hex'));
