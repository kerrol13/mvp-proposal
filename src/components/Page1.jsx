import image1 from "../assets/page1.avif";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useRef, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import dayjs from "dayjs";
import useVisibilityToggle from "../hooks/useVisibilityToggle";

const Page1 = ({ isEditing, clientName, setClientName }) => {
  const [clientBusiName, setClientBusiName] = useState("");
  const [date, setDate] = useState();
  const [isCalOpen, setIsCalOpen] = useState(false);
  const dateRef = useRef(null);

  const handleOpenCal = () => {
    setIsCalOpen((prev) => !prev);
  };

  const handleSelectedDate = (value) => {
    setDate(value);
  };

  useVisibilityToggle(handleOpenCal, dateRef);
  return (
    <div
      className={` min-w-a4 min-h-a4 w-a4 h-a4 ${
        isEditing ? "shadow-xl my-5" : ""
      }`}
    >
      <img className="min-w-a4 min-h-a4 w-a4 h-a4 " src={image1} />
      <div
        className={`${
          isEditing ? "-translate-y-[16rem]" : "-translate-y-[17rem]"
        } translate-x-[53px] font-poppins space-y-4 w-[84%] font-bold text-[2.7rem]`}
      >
        {isEditing ? (
          <ReactTextareaAutosize
            value={clientBusiName}
            onChange={(e) => setClientBusiName(e.target.value)}
            maxRows={2}
            placeholder="[Client Business Name]"
            className="w-full  resize-none tracking-[0.3px] placeholder-[#15a0fd] text-[#15a0fd] break-words  bg-transparent"
          />
        ) : (
          <div>
            <h1 className="w-[650px] tracking-[0.3px] text-[#15a0fd]  mb-5 break-all line-clamp-2 pb-5">
              {clientBusiName}
            </h1>
          </div>
        )}
        <div className="ml-1  whitespace-pre text-[1.34rem] font-semibold ">
          <span className="flex">
            <p>Prepared for:</p>

            {isEditing ? (
              <input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="[Client Name]"
                className="text-[#15a0fd] bg-transparent ml-1.5 w-[60%]  placeholder-[#15a0fd]"
              />
            ) : (
              <p className="text-[#15a0fd] bg-transparent ml-1.5 w-[60%]  ">
                {clientName}
              </p>
            )}
          </span>
          {isEditing ? (
            <div className="w-20">
              <button className="bg-transparent" onClick={handleOpenCal}>
                {date ? dayjs(date).format("MMM DD, YYYY") : "[Date]"}
              </button>
              {isCalOpen && (
                <div ref={dateRef}>
                  <Calendar
                    onChange={handleSelectedDate}
                    date={date}
                    className="rounded-2xl overflow-hidden shadow-xl border-[1px]"
                  />
                </div>
              )}
            </div>
          ) : (
            <p>{dayjs(date).format("MMM DD, YYYY")}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page1;
