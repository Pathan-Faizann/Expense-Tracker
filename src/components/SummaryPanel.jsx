const SummaryPanel = ({ expenses }) => {
  // Total Expenses
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  // Category Breakdown
  const categoryTotals = expenses.reduce((acc, expense) => {
    const category = expense.category;

    if (acc[category]) {
      acc[category] += Number(expense.amount);
    } else {
      acc[category] = Number(expense.amount);
    }

    return acc;
  }, {});

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Summary
      </h2>

      {/* Total Card */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-5 mb-6 shadow-md">
        <p className="text-sm uppercase tracking-wide text-orange-100">
          Total Expenses
        </p>
        <h3 className="text-3xl font-bold mt-2">
          ₹{total.toFixed(2)}
        </h3>
      </div>

      {/* Category Breakdown */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Category Breakdown
        </h3>

        {expenses.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No expenses to summarize yet.
          </p>
        ) : (
          <div className="space-y-3">
            {Object.entries(categoryTotals).map(
              ([category, amount]) => (
                <div
                  key={category}
                  className="flex items-center justify-between bg-orange-50 border border-orange-100 rounded-xl px-4 py-3"
                >
                  <span className="font-medium text-gray-700">
                    {category}
                  </span>
                  <span className="font-semibold text-orange-600">
                    ₹{amount.toFixed(2)}
                  </span>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryPanel;