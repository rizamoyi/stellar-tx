const axios = require('axios');
const accounts = require('../accounts');

const fundAccounts = async (accounts) => {
  await Promise.all(
    accounts.map(async (account) => {
      await axios.get('/friendbot', {
        baseURL: 'https://horizon-testnet.stellar.org',
        params: { addr: account.publicKey },
      });
    })
  );
};

fundAccounts(accounts)
  .then(() => console.log('Accounts funded'))
  .catch((error) => console.log('Error funding accounts:', error));
