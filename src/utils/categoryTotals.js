// Returns an object with category-wise totals
// Example output:
// {
//   Food: 120,
//   Travel: 45,
//   Marketing: 200
// }

export const getCategoryTotals = (expenses) => {
  return expenses.reduce((acc, expense) => {
    const category = expense.category;
    const amount = Number(expense.amount);

    // If category already exists, add to it
    if (acc[category]) {
      acc[category] += amount;
    } else {
      // Otherwise create new category key
      acc[category] = amount;
    }

    return acc;
  }, {});
};