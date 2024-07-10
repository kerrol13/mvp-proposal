import image1 from "../assets/page1.avif";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

const Page1 = ({ isEditing, clientName, setClientName }) => {
  const [clientBusiName, setClientBusiName] = useState("");
  const [date, setDate] = useState("[Date]");

  return (
    <div
      className={`overflow-hidden min-w-a4 min-h-a4 w-a4 h-a4 ${
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
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="[Date]"
              className="bg-transparent placeholder-black "
            />
          ) : (
            <p>{date}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page1;
