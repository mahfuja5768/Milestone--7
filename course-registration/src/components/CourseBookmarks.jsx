import PropTypes from "prop-types";
import CourseBookmark from "./CourseBookmark";

const CourseBookmarks = ({courseNames, credit, remainingCreditHr, totalPrice}) => {
  // console.log(totalPrice);
  return (
    <div className="md:w-1/3 p-6 bg-[#F3F3F3] rounded-xl text-black shadow-md">
      <h2 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining {remainingCreditHr} hr
      </h2>
      <div className="divider my-2"></div>
      <div>
        <h2 className="text-xl font-bold ">Course Name</h2>
        <div className='flex flex-col gap-1 my-3'>
        {courseNames.map((courseName, idx) => (
            <CourseBookmark key={courseName.id} courseName={courseName} count={idx + 1} ></CourseBookmark>
          ))}
        </div>
      </div>
      <div className="divider my-2"></div>

      <h3 className="text-base font-medium ">Total Credit Hour : {credit}</h3>

      <div className="divider my-1"></div>
      <h3 className="text-base font-semibold ">Total Price : {totalPrice.toFixed(2)} USD</h3>
    </div>
  );
};

CourseBookmarks.propTypes = {
  courseNames: PropTypes.array.isRequired,
  credit: PropTypes.array.isRequired,
  remainingCreditHr: PropTypes.array.isRequired,
  totalPrice: PropTypes.array.isRequired,
};

export default CourseBookmarks;
