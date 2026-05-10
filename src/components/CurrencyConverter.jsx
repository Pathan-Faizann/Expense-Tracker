import { useEffect, useState } from "react";
import { getExchangeRate } from "../services/currencyApi";

const currencies = ["USD", "INR", "EUR", "GBP", "AED", "JPY"];

const CurrencyConverter = ({ total }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRate = async () => {
      try {
        setLoading(true);
        setError("");

        const exchangeRate = await getExchangeRate(selectedCurrency);
        setRate(exchangeRate);
      } catch (err) {
        setError("Unable to fetch exchange rate.");
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [selectedCurrency]);

  const convertedAmount = total * rate;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Currency Converter
      </h2>

      {/* Currency Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Convert Total To
        </label>

        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* Loading */}
      {loading && (
        <div className="animate-pulse bg-orange-100 rounded-xl p-4">
          <p className="text-orange-600 font-medium">
            Fetching latest exchange rate...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Converted Total */}
      {!loading && !error && (
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
          <p className="text-sm text-gray-500 mb-1">
            Converted Total
          </p>

          <h3 className="text-3xl font-bold text-orange-600">
            {selectedCurrency} {convertedAmount.toFixed(2)}
          </h3>

          {selectedCurrency !== "INR" && (
            <p className="text-sm text-gray-500 mt-2">
              1 INR = {rate.toFixed(4)} {selectedCurrency}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;