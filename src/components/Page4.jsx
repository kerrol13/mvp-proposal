import image4 from "../assets/page4.avif";

const Page4 = ({ isEditing }) => {
  return (
    <div
      className={`overflow-hidden min-w-a4 min-h-a4 w-a4 h-a4 ${
        isEditing ? "shadow-xl my-5" : ""
      }`}
    >
      <img className="min-w-a4 min-h-a4 w-a4 h-a4 " src={image4} />
    </div>
  );
};
export default Page4;
