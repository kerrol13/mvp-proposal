import image2 from "../assets/page2.avif";

const Page2 = ({ isEditing }) => {
  return (
    <div
      className={`overflow-hidden min-w-a4 min-h-a4 w-a4 h-a4 ${
        isEditing ? "shadow-xl my-5" : ""
      }`}
    >
      <img className="min-w-a4 min-h-a4 w-a4 h-a4 " src={image2} />
      <div
        className={`${
          isEditing ? "-translate-y-[34.7rem]" : "-translate-y-[35.2rem]"
        } mx-[57px] font-poppins space-y-4 w-[86%] font-medium text-sm tracking-tight text-[#08263d]`}
      >
        <span className="flex">
          Hi
          <strong
            className=" ml-1"
            suppressContentEditableWarning={true}
            contentEditable="plaintext-only"
          >
            [Client Name]
          </strong>
        </span>

        <div>
          Thank you for taking the time to have a quick chat with us.
          <br />
          <br />
          <p className="leading-[18px]">
            Offshore MVP is pleased to present to you our offshoring proposal,
            where we outline the provision of our services and price structure
          </p>
          <br />
          <p>
            Based on our conversation, you are looking to offshore a{" "}
            <strong
              className=" mx-1"
              suppressContentEditableWarning={true}
              contentEditable="plaintext-only"
            >
              [Looking For]
            </strong>
            to become part of your business. Offshore MVP’s workforce is in
            Clark Freeport Zone, Philippines. We provide a full range of
            business process outsourcing services – from the recruitment of your
            team members to general management of the staff.
          </p>
          <br />
          <p className="leading-[18px]">
            Please review our proposal to know more about our standard services
            and the fees which will incur when you partner with us.
          </p>
          <br />
          <p className="leading-[18px]">
            Feel free to reach out to us should you have any questions or
            clarifications regarding our proposal. We look forward to having you
            here at Offshore MVP!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page2;
