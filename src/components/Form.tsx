import { FormEvent, useState } from "react";

const [person, setPerson] = useState({
  name: "",
  age: 0,
});

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form className="flex flex-col justify-center gap-3 items-center h-screen">
      <div className="flex items-center gap-3">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          className=" border border-blue-400 outline-none w-[18rem] py-2 px-3 rounded-md"
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
        />
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          className=" border border-blue-400 outline-none w-[18rem] py-2 px-3 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-[8rem] bg-amber-500 py-2 px-3 text-white rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
