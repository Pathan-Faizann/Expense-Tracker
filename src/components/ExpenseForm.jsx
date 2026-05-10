import { useState } from "react";

const categories = [
  "Food",
  "Travel",
  "Marketing",
  "Utilities",
  "Other",
];

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "Food",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.amount) {
      return;
    }

    onAddExpense({
      id: Date.now(),
      name: formData.name,
      amount: Number(formData.amount),
      category: formData.category,
    });

    setFormData({
      name: "",
      amount: "",
      category: "Food",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Add New Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount (INR)"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;