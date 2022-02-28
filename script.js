{
    const calculateResult = (value, currency) => {
        const valueEUR = 4.53;
        const valueUSD = 3.99;
        const valueGBP = 5.43;
        const valueCHF = 4.33;


        switch (currency) {
            case "EUR":
                return value / valueEUR;

            case "USD":
                return value / valueUSD;

            case "GBP":
                return value / valueGBP;

            case "CHF":
                return value / valueCHF;
        }

    }
    const updateText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueElement = document.querySelector(".js-value");
        const currencyElement = document.querySelector(".js-currency");

        const value = +valueElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(value, currency);

        updateText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit)
    }

    init();
}