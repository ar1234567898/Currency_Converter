
const currencyApi = new CurrencyAPI('cur_live_G1qA8GdzDUZkUc7Pdl9zc4XbvWRCcuSZb17VsvCV');

currencyApi.latest({
    base_currency: 'USD',
    currencies: 'EUR'
}).then(response => {
    console.log(response);
});

    