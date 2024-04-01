const fs = require('fs');
const Stellar = require('@stellar/stellar-sdk');

const fileName = 'accounts.json';

fs.writeFileSync(
  fileName,
  JSON.stringify(
    ['Alice', 'Bob'].map((name) => {
      const pair = Stellar.Keypair.random();

      return {
        name,
        publicKey: pair.publicKey(),
        secret: pair.secret(),
      };
    })
  )
);
