import fs from 'fs';
let JSONbig = require('json-bigint')({ useNativeBigInt: true });
import { ApiPromise, WsProvider } from '@polkadot/api';
import { encodeAddress } from '@polkadot/keyring';

async function start() {

  let staging = JSONbig.parse(fs.readFileSync('staging.json', 'utf8'));

  let acuityEndpoint = 'ws://127.0.0.1:9944';
  let wsProvider = new WsProvider(acuityEndpoint);
  let api = await ApiPromise.create({
    provider: wsProvider,
  });
  await api.isReady;

  let accounts: any[] = await api.query.system.account.entries();

  for (let account of accounts) {
    let address = encodeAddress(account[0].slice(-32));
    let balance = account[1].data.free.toBigInt() + account[1].data.reserved.toBigInt();
    staging.genesis.runtime.balances.balances.push([address, balance]);
  }

  fs.writeFileSync('balances.json', JSONbig.stringify(staging));
  console.log('balances.json written.');
  process.exit(0);
}

start();
