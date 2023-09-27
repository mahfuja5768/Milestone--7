import PropTypes from "prop-types";
import { FaBookOpen } from "react-icons/fa";

const Course = ({ course, handleToAddName}) => {
  const { title, img, description, price, credit } = course;

  return (
    <div>
      <div className="card bg-[#F3F3F3] h-[420px] shadow-md p-4 rounded-lg text-black">
        <figure className="pb-4">
          <img
            src={img}
            alt="course image"
            className="rounded-lg h-36 w-52 md:w-72"
          />
        </figure>
        <div className="card-body px-0 py-0">
          <h2 className="text-xl font-semibold ">{title}</h2>
          <p className=" text-sm">{description}</p>
          <div className="flex justify-between g-2">
            <div className="flex text-sm items-center gap-1 font-medium">
              <h3>$ Price: {price}</h3>
            </div>
            <div className="flex text-sm items-center gap-1 font-medium">
              <FaBookOpen></FaBookOpen>
              <h3>Credit: {credit}hr</h3>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button
              onClick={() => handleToAddName(course)}
              className="btn btn-primary bg-[#2F80ED] text-white border-none hover:bg-[#4e92eb] w-full"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleToAddName: PropTypes.func,
};

export default Course;
