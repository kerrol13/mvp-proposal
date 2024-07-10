import image3 from "../assets/page3.avif";

const Page3 = ({ isEditing }) => {
  return (
    <div
      className={`overflow-hidden min-w-a4 min-h-a4 w-a4 h-a4 ${
        isEditing ? "shadow-xl my-5" : ""
      }`}
    >
      <img className="min-w-a4 min-h-a4 w-a4 h-a4 " src={image3} />
    </div>
  );
};
export default Page3;
