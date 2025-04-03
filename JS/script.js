document.getElementById("convert").addEventListener("click", async function () {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        resultElement.innerText = "Введіть коректну суму!";
        return;
    }

    try {
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
        const data = await response.json();
        
        resultElement.innerText = `${amount} ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`;
    } catch (error) {
        resultElement.innerText = "Помилка при отриманні курсу валют.";
        console.error(error);
    }
});