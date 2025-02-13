import { useEffect, useState } from "react";
import Page1 from "./components/Page1";
import { Resolution, usePDF } from "react-to-pdf";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import ReactLenis from "lenis/react";
import Page5 from "./components/Page5";
import DownloadIcon from "./assets/DownloadIcon.jsx";

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [clientName, setClientName] = useState("");
  const { toPDF, targetRef } = usePDF({
    filename: `${clientName} - MVP Proposal`,
    page: {
      margin: 0.0,
    },
  });
  useEffect(() => {
    if (!isEditing) {
      toPDF();
      setIsEditing(true);
    }
  }, [isEditing]);

  return (
    <ReactLenis root className="bg-slate-50">
      <div className="flex-col flex items-center justify-center m-10 ">
        <div ref={targetRef}>
          <Page1
            clientName={clientName}
            setClientName={setClientName}
            isEditing={isEditing}
          />
          <Page2 isEditing={isEditing} />
          <Page3 isEditing={isEditing} />
          <Page4 isEditing={isEditing} />
          <Page5 isEditing={isEditing} />
        </div>

        <button
          className="bg-[#38bbff]  p-5 rounded-xl font-bold text-white shadow-xl flex gap-2 justify-center items-center"
          onClick={() => setIsEditing(false)}
        >
          <DownloadIcon />
          Download PDF
        </button>
      </div>
    </ReactLenis>
  );
}
export default App;
