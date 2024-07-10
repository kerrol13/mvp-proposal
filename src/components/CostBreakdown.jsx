import { useState } from "react";

const CostBreakdown = ({ isEditing }) => {
  const [inputs, setInputs] = useState();
  const [array, setArray] = useState([
    { id: 1, fee: "Onboarding/Recruitment fee", amount: 750 },
    { id: 2, fee: "Security bond", amount: 1995 },
  ]);

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: name === "amount" ? +value : value,
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

  const totalAmount = array.reduce(
    (value, current) => value + current.amount,
    0
  );
  const baseTopClass = isEditing ? "" : "-top-2";

  const handleRemove = (id) => {
    const newArray = array.filter((data) => data.id != id);
    setArray(newArray);
  };

  return (
    <div
      className={`rounded-2xl h-auto overflow-hidden border-2 border-[#88d6ff] mb-9 ${baseTopClass}`}
    >
      <div className="px-5 py-1.5 pt-2 bg-[#38bbff]">
        <h1
          className={`font-semibold text-[1.15rem] text-white uppercase relative ${baseTopClass}`}
        >
          Cost Breakdown
        </h1>
      </div>
      <div className={`px-5 pt-5 ${baseTopClass}`}>
        <div
          className={`flex uppercase text-[.8.1rem] relative ${baseTopClass}`}
        >
          <strong className="w-[493px]">Fee</strong>
          <strong>Amount</strong>
        </div>
        {array.map((data, index) => (
          <div
            key={data.id}
            className={`mt-1 text-xs flex py-[3px] border-b-[1px] border-[#88d6ff]`}
          >
            {/* w-[493px] */}
            <p className={`w-[2100px] font-medium relative ${baseTopClass}`}>
              {data.fee}
            </p>
            <p className={`relative font-semibold w-[70%] ${baseTopClass}`}>
              US$ {new Intl.NumberFormat().format(data.amount)}
            </p>
            <button
              onClick={() => handleRemove(data.id)}
              className={`text-xs font-semibold   p-[1px] w-20 rounded-lg my-[2px] text-red-500 ${
                isEditing ? "" : "opacity-0"
              }`}
            >
              Remove
            </button>
          </div>
        ))}
        {isEditing && (
          <form onSubmit={handleAdd} className="flex">
            <div className=" w-[855px]">
              <input
                required
                name="fee"
                onChange={handleInputs}
                placeholder="Fee"
                className=" text-xs mt-1 py-[3px] border-b-[1px] border-black/50"
              />
            </div>
            <div className="text-xs font-semibold">
              US${" "}
              <input
                required
                name="amount"
                onChange={handleInputs}
                type="number"
                placeholder="Amount"
                className="mt-1 py-[3px] w-[70%] border-b-[1px] border-black/50"
              />
            </div>
            <button className="text-xs font-semibold p-[7px] bg-[#38bbff] w-20 rounded-lg my-[2px] text-white">
              Add
            </button>
          </form>
        )}

        <div
          className={`mt-1 text-xs flex py-[6px] font-bold text-[#38bbff] relative ${baseTopClass}`}
        >
          <p className="w-[493px] uppercase">Total One-Off Cost</p>
          <p>US$ {new Intl.NumberFormat().format(totalAmount)}</p>
        </div>
      </div>
    </div>
  );
};

export default CostBreakdown;
