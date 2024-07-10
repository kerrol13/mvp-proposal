const MonthlyFee = ({ isEditing }) => {
  const array = [
    { jobPosition: "Accounting Clerk", quantity: 1, total: 1234 },
    { jobPosition: "Accounting Clerk", quantity: 1, total: 1234 },
  ];

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
              index === array.length - 1 ? "border-b-[0px] py-[6px]" : ""
            }`}
          >
            <p className={`relative font-medium w-[387px] ${baseTopClass}`}>
              {data.jobPosition}
            </p>
            <p className={`relative font-semibold w-[110px] ${baseTopClass}`}>
              {data.quantity}
            </p>
            <p className={`relative font-semibold ${baseTopClass}`}>
              US$ {data.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyFee;
