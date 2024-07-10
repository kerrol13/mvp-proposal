import image5 from "../assets/page5.avif";
import CostBreakdown from "./CostBreakdown";
import MonthlyFee from "./MonthlyFee";

const Page5 = ({ isEditing }) => {
  return (
    <div
      className={`overflow-hidden min-w-a4 min-h-a4 w-a4 h-a4 ${
        isEditing ? "shadow-xl my-5" : ""
      }`}
    >
      <img className="min-w-a4 min-h-a4 w-a4 h-a4 " src={image5} />

      <div
        className={`${
          isEditing ? "-translate-y-[39.3rem]" : "-translate-y-[40rem]"
        } mx-[52px] font-poppins space-y-4 w-[87%] text-sm tracking-tight text-[#08263d]`}
      >
        <CostBreakdown isEditing={isEditing} />
        <MonthlyFee isEditing={isEditing} />
      </div>
    </div>
  );
};
export default Page5;
