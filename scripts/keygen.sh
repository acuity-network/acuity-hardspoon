#!/usr/bin/env bash

echo "[";
for i in 1 2 3 4 ; do
  echo "[";
  for j in stash controller; do ~/substrate/target/release/subkey inspect --output-type Json //"$SECRET"//$j//$i; echo ",";
done;
  for j in grandpa; do ~/substrate/target/release/subkey inspect --scheme Ed25519 --output-type Json //"$SECRET"//$j//$i; echo ","; done;
  for j in babe; do ~/substrate/target/release/subkey inspect --output-type Json //"$SECRET"//$j//$i; done;

  if [ $i -ne 4 ]
  then
      echo "],";
  else
    echo "]";
  fi
done;
echo "]";
