import React, { Suspense, lazy, useState } from "react";

// Lazy Loaded Components
const ExpenseForm = lazy(() => import("./components/ExpenseForm"));
const ExpenseList = lazy(() => import("./components/ExpenseList"));
const SummaryPanel = lazy(() => import("./components/SummaryPanel"));
const CurrencyConverter = lazy(() =>
  import("./components/CurrencyConverter")
);

const App = () => {
  // Main State
  const [expenses, setExpenses] = useState([]);

  // Add Expense
  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      newExpense,
    ]);
  };

  // Delete Expense
  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  // Total Expenses
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="min-h-screen bg-orange-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">
            Expense Tracker
          </h1>
          <p className="text-gray-600">
            Track your spending and convert totals in real-time.
          </p>
        </div>

        {/* Main Layout */}
        <Suspense
          fallback={
            <div className="text-center py-10 text-orange-600 font-medium">
              Loading components...
            </div>
          }
        >
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="lg:col-span-2 space-y-6">
              <ExpenseForm onAddExpense={handleAddExpense} />
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={handleDeleteExpense}
              />
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <SummaryPanel expenses={expenses} />
              <CurrencyConverter total={total} />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default App;