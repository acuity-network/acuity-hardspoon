import fs from 'fs';
let JSONbig = require('json-bigint')({ useNativeBigInt: true });
import { decodeAddress } from '@polkadot/keyring';

let keys = JSONbig.parse(fs.readFileSync('keys.json', 'utf8'));

for (let node of keys) {
  console.log("(");
  console.log("hex![\"" + node[0].publicKey.slice(2) + "\"].into(),");
  console.log("hex![\"" + node[1].publicKey.slice(2) + "\"].into(),");
  console.log("hex![\"" + node[2].publicKey.slice(2) + "\"].unchecked_into(),");
  console.log("hex![\"" + node[3].publicKey.slice(2) + "\"].unchecked_into(),");
  console.log("hex![\"" + node[3].publicKey.slice(2) + "\"].unchecked_into(),");
  console.log("hex![\"" + node[3].publicKey.slice(2) + "\"].unchecked_into(),");
  console.log("),");
}
