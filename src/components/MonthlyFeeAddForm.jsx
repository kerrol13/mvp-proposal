const MonthlyFeeAddForm = ({ handleAdd, handleInputs }) => {
  return (
    <form onSubmit={handleAdd} className="flex pb-2">
      <div className=" w-[725px]">
        <input
          required
          name="jobPosition"
          onChange={handleInputs}
          placeholder="Job Position"
          className=" text-xs mt-1 py-[3px] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      <div className="text-xs font-semibold">
        <input
          required
          name="quantity"
          onChange={handleInputs}
          type="number"
          placeholder="Quantity"
          className="mt-1 py-[3px] w-[80%] border-b-[1px] border-black/50 bg-transparent mr-12"
        />
      </div>
      <div className="text-xs font-semibold">
        US${" "}
        <input
          required
          name="total"
          onChange={handleInputs}
          type="number"
          placeholder="Total"
          className="mt-1 py-[3px] w-[70%] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      <button className="text-xs font-semibold p-[7px] bg-[#38bbff] w-20 rounded-lg my-[2px] text-white">
        Add
      </button>
    </form>
  );
};
export default MonthlyFeeAddForm;
