import { categories } from "../data/catgories";

const ExpenseForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <input id="description" type="text" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" />
      </div>
      <div className="mb-3">
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value=""></option>
          {/* {categories.map((category) => (
        <option value={category} key={category}>
          {category} */}
        </select>
      </div>
      <button>Submit</button>
    </div>
  );
};

export default ExpenseForm;
