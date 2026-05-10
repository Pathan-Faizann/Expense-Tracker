const categoryColors = {
  Food: "bg-orange-100 text-orange-700",
  Travel: "bg-blue-100 text-blue-700",
  Marketing: "bg-purple-100 text-purple-700",
  Utilities: "bg-green-100 text-green-700",
  Other: "bg-gray-100 text-gray-700",
};

const ExpenseCard = ({ expense, onDeleteExpense }) => {
  const { id, name, amount, category } = expense;

  return (
    <div className="border border-orange-100 rounded-2xl p-4 sm:p-5 bg-orange-50/40 hover:shadow-md transition duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Left Section */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 break-words">
            {name}
          </h3>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                categoryColors[category] || categoryColors.Other
              }`}
            >
              {category}
            </span>

            <span className="text-sm text-gray-500">
              ₹{Number(amount).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Right Section */}
        <button
          onClick={() => onDeleteExpense(id)}
          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;