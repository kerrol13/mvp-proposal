const CostBreakdown = ({ isEditing }) => {
  const array = [
    { fee: "Onboarding/Recruitment fee", amount: 750 },
    { fee: "Onboarding/Recruitment 22fee", amount: 1995 },
  ];

  const totalAmount = array.reduce(
    (value, current) => value + current.amount,
    0
  );
  const baseTopClass = isEditing ? "" : "-top-2";

  return (
    <div className={`rounded-2xl h-auto overflow-hidden border-2 border-[#88d6ff] mb-9 ${baseTopClass}`}>
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
            key={index}
            className={`mt-1 text-xs flex py-[3px] border-b-[1px] border-[#88d6ff]`}
          >
            <p className={`w-[493px] font-medium relative ${baseTopClass}`}>
              {data.fee}
            </p>
            <p className={`relative font-semibold ${baseTopClass}`}>
              US$ {new Intl.NumberFormat().format(data.amount)}
            </p>
          </div>
        ))}
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
