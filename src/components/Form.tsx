import { FormEvent, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data: FieldValues) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="flex flex-col justify-center gap-3 items-center h-screen"
    >
      <div className="flex items-center gap-3">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          className=" border border-blue-400 outline-none w-[18rem] py-2 px-3 rounded-md"
          {...register("name")}
        />
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          className=" border border-blue-400 outline-none w-[18rem] py-2 px-3 rounded-md"
          {...register("age")}
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
