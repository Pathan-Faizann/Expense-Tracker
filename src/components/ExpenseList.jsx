import ExpenseCard from "./ExpenseCard";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-orange-600">
          Expense History
        </h2>

        <span className="bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">
          {expenses.length} {expenses.length === 1 ? "Item" : "Items"}
        </span>
      </div>

      {expenses.length === 0 ? (
        <div className="text-center py-12">
         
          <p className="text-gray-500 font-medium">
            No expenses added yet.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Add your first expense to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;