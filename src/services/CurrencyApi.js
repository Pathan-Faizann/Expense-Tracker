import axios from "axios";

export const getExchangeRate = async (currency) => {
  // INR selected ho to rate 1 hoga
  if (currency === "INR") {
    return 1;
  }

  const response = await axios.get(
    `/api/latest?from=INR&to=${currency}`
  );

  return response.data.rates?.[currency] ?? 1;
};