import { useRef } from "react";
import generatePDF from "react-to-pdf";

const MyDoc = () => {
  const targetRef = useRef();
  return (
    <div>
      <div ref={targetRef}>Content to be included in the PDF</div>
      <button onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}>
        Download PDF
      </button>
    </div>
  );
};
export default MyDoc;
