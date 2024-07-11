const CostBreakdownAddForm = ({ handleAdd, handleInputs }) => {
  return (
    <form onSubmit={handleAdd} className="flex">
      <div className=" w-[855px]">
        <input
          required
          name="fee"
          onChange={handleInputs}
          placeholder="Fee"
          className=" text-xs mt-1 py-[3px] border-b-[1px] border-black/50 bg-transparent"
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
          className="mt-1 py-[3px] w-[70%] border-b-[1px] border-black/50 bg-transparent"
        />
      </div>
      <button className="text-xs font-semibold p-[7px] bg-[#38bbff] w-20 rounded-lg my-[2px] text-white">
        Add
      </button>
    </form>
  );
};
export default CostBreakdownAddForm;
