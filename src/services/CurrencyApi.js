import axios from "axios";

export const getExchangeRate = async (currency) => {
  // INR base currency hai
  if (currency === "INR") {
    return 1;
  }

  const response = await axios.get(
    `https://api.frankfurter.dev/v1/latest?base=INR&symbols=${currency}`
  );

  return response.data.rates?.[currency] ?? 1;
};