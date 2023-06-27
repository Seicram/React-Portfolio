import React, { useState, useEffect } from "react";
import { currencySymbolMap } from "currency-symbol-map"; // cuurencySymbolMap is a map of currency codes to currency symbols
import "../../index.css"; //

// Create a component called TravelBudget
const TravelBudget = () => {
  const [expenses, setExpenses] = useState({
    accommodation: 0,
    transportation: 0,
    meals: 0,
    activities: 0,
    total: 0,
  });

  const [baseCurrency, setBaseCurrency] = useState("USD"); // set the default base currency to USD
  const [targetCurrency, setTargetCurrency] = useState("EUR"); // set the default target currency to EUR
  const [amount, setAmount] = useState(1); // set the default amount to 1
  const [exchangeRate, setExchangeRate] = useState(null); // set the default exchange rate to null
  const [convertedAmount, setConvertedAmount] = useState(null); // set the default converted amount to null
  const [currencyOptions, setCurrencyOptions] = useState([]); // set the default currency options to an empty array

  // Handle the change in expense values and update the state accordingly
  const handleExpenseChange = (event) => {
    const { name, value } = event.target;
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [name]: parseFloat(value),
    }));
  };

  //  Calculate the total expense and update the state accordingly
  const calculateTotalExpense = () => {
    const { accommodation, transportation, meals, activities } = expenses;
    const totalExpense = accommodation + transportation + meals + activities;
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      total: totalExpense,
    }));
  };

  // Handle the change in base currency and update the state accordingly
  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  // Handle the change in target currency and update the state accordingly
  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  // Handle the change in amount and update the state accordingly
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle the change in currency conversion and update the state accordingly
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        ); // fetch the exchange rate from the API
        const data = await response.json();
        setExchangeRate(data.rates[targetCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    // exchange rate is fetched only when both base and target currencies are selected
    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  // Handle the change in converted amount and update the state accordingly
  useEffect(() => {
    if (exchangeRate) {
      const convertedAmountValue = amount * exchangeRate; // calculate the converted amount
      const symbol = currencySymbolMap[targetCurrency]; // get the currency symbol
      setConvertedAmount(`${symbol}${convertedAmountValue.toFixed(2)}`); // update the converted amount
    }
  }, [amount, exchangeRate, targetCurrency]); // update the converted amount when any of these values change

  // Handle the change in currency options and update the state accordingly
  useEffect(() => {
    const fetchCurrencyOptions = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        ); // fetch the currency options from the API
        const data = await response.json(); // convert the response to JSON
        const options = Object.keys(data.rates); // get the currency options
        setCurrencyOptions(options); // update the currency options
      } catch (error) {
        console.error("Error fetching currency options:", error);
      }
    };

    // currency options are fetched only once when the component is mounted
    fetchCurrencyOptions();
  }, []);

  // Render the component on the screen
  return (
    <div className="travel-budget">
      <h1 className="section-title">Travel Budget</h1>
      <div className="budget-container">
        <div>
          <h2 className="sub-title">Expenses</h2>
          <form>
            <label htmlFor="accommodation">Accommodation: </label>
            <input
              type="number"
              id="accommodation"
              name="accommodation"
              value={expenses.accommodation}
              onChange={handleExpenseChange}
              className="expense-input"
            />
            <br />
            <br />
            <label htmlFor="transportation">Transportation: </label>
            <input
              type="number"
              id="transportation"
              name="transportation"
              value={expenses.transportation}
              onChange={handleExpenseChange}
              className="expense-input"
            />
            <br />
            <br />
            <label htmlFor="meals">Meals: </label>
            <input
              type="number"
              id="meals"
              name="meals"
              value={expenses.meals}
              onChange={handleExpenseChange}
              className="expense-input"
            />
            <br />
            <br />
            <label htmlFor="activities">Activities: </label>
            <input
              type="number"
              id="activities"
              name="activities"
              value={expenses.activities}
              onChange={handleExpenseChange}
              className="expense-input"
            />
            <br />
            <br />
            <button
              type="button"
              onClick={calculateTotalExpense}
              className="calculate-button"
            >
              Calculate Total Expense
            </button>
            <br />
            <br />
            <label className="total-label">Total Expense: </label>
            <input
              type="number"
              readOnly
              value={expenses.total}
              className="total-input"
            />
          </form>
        </div>
        <div>
          <h2 className="sub-title">Currency Converter</h2>
          <div>
            <label htmlFor="baseCurrency">From: </label>
            <select
              id="baseCurrency"
              value={baseCurrency}
              onChange={handleBaseCurrencyChange}
              className="currency-select"
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="targetCurrency">To: </label>
            <select
              id="targetCurrency"
              value={targetCurrency}
              onChange={handleTargetCurrencyChange}
              className="currency-select"
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="amount-input"
            />
          </div>
          <br />
          <div>
            <p className="converted-amount">
              Converted Amount: {convertedAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBudget;
