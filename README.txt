cd ~/acuity-hardspoon
~/substrate/target/release/subkey generate
export SECRET=""
./scripts/keygen.sh >keys.json
y keys
cd ~/acuity-substrate
copy code to chain_spec.rs & set root_key
c clean
c build --release

./target/release/acuity build-spec --chain staging >~/acuity-hardspoon/staging.json

copy metadata from acuity.json to staging.json
delete bootnodes
delete root balance from staging.json
set elections and technical

cd ~/acuity-hardspoon
y balances
stop acuity
cp balances.json ~/acuity-substrate/node/res/acuity.json
cd ~/acuity-substrate
c build --release
./target/release/acuity build-spec --raw >~/acuity-hardspoon/acuity.json

./acuity export-state blocknum >~/acuity-hardspoon/snapshot.json
cd ~/acuity-hardspoon
y claims
cp acuity.json ~/acuity-substrate/node/res/acuity.json

cd ~/acuity-substrate
c build --release



./acuity key insert \
--suri "//SECRET//grandpa//1" \
--key-type gran --scheme Ed25519

./acuity key insert \
--suri "//SECRET//babe//1" \
--key-type babe --scheme Sr25519

./acuity --port 30341 --rpc-port 9941 --ws-port 9951 --name Acuity1 --validator --pruning archive --rpc-cors=all --ws-max-connections=100

./target/release/acuity build-spec >node/res/acuity.json
set boot nodes
c build --release
commit
