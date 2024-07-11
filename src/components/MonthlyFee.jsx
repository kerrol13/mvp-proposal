import { useState } from "react";
import MonthlyFeeAddForm from "./MonthlyFeeAddForm";

const MonthlyFee = ({ isEditing }) => {
  const [inputs, setInputs] = useState();
  const [array, setArray] = useState([]);
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: name === "total" ? +value : value,
    }));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputs) {
      return;
    }
    setArray((prev) => [
      ...prev,
      { ...inputs, id: Math.floor(Math.random() * 100) + 1 },
    ]);
  };
  const handleRemove = (id) => {
    const newArray = array.filter((data) => data.id != id);
    setArray(newArray);
  };

  const baseTopClass = isEditing ? "" : "-top-2";

  return (
    <div className="rounded-2xl h-auto overflow-hidden border-2 border-[#88d6ff]">
      <div className="px-5 py-1.5 pt-2 bg-[#38bbff]">
        <h1
          className={`font-semibold text-[1.15rem] text-white uppercase relative ${baseTopClass}`}
        >
          Monthly Service Fee
        </h1>
      </div>
      <div className="px-5 pt-6">
        <div
          className={`flex uppercase text-[.8.1rem] relative ${baseTopClass}`}
        >
          <strong className={`w-[384px] relative ${baseTopClass}`}>
            Job Position
          </strong>
          <strong className={`w-[110px] relative ${baseTopClass}`}>
            Quantity
          </strong>
          <strong
            className={`w-[110px] relative ${baseTopClass} whitespace-nowrap`}
          >
            Total Monthly Cost
          </strong>
        </div>
        {array.map((data, index) => (
          <div
            key={index}
            className={`mt-1 text-xs flex relative py-[3px] border-b-[1px] border-[#88d6ff] ${baseTopClass} ${
              index === array.length - 1 ? "border-b-[0px]" : ""
            }`}
          >
            <p className={`relative font-medium w-[387px] ${baseTopClass}`}>
              {data.jobPosition}
            </p>
            <p className={`relative font-semibold w-[110px] ${baseTopClass}`}>
              {data.quantity}
            </p>
            <p
              className={`relative font-semibold w-[70px] text-nowrap ${baseTopClass}`}
            >
              US$ {new Intl.NumberFormat().format(data.total)}
            </p>
            <button
              onClick={() => handleRemove(data.id)}
              className={`text-xs font-semibold  flex justify-end  p-[1px] w-20 rounded-lg my-[2px] text-red-500 ${
                isEditing ? "" : "opacity-0"
              }`}
            >
              Remove
            </button>
          </div>
        ))}
        {isEditing && (
          <MonthlyFeeAddForm
            handleAdd={handleAdd}
            handleInputs={handleInputs}
          />
        )}
      </div>
    </div>
  );
};

export default MonthlyFee;
