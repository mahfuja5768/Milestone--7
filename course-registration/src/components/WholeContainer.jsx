import { useState } from "react";
import Courses from "./Courses";
import CourseBookmarks from "./CourseBookmarks";
import toast, { Toaster } from "react-hot-toast";

const WholeContainer = () => {
  //all use states
  const [courseNames, setCourseNames] = useState([]);
  const [remainingCreditHr, setRemainingCreditHr] = useState(20);
  const [credit, setCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //to get the course names and add to array
  const handleToAddName = (course) => {
    const isOld = courseNames.find((name) => name.id === course.id);
    if (isOld){
      return toast.error("This is already added!");
    }
    //to get the course  credit hour and doing sum and added to array
    const totalCredit = credit + course.credit;
    if (!isOld && totalCredit <= 20) {
      setCredit(totalCredit);
      toast.success("Add to cart.");
    }
     else {
      return toast.error("You can't choose more than 20 credits!");
    }

    //to get the remaining credit hour
    const newRemainingCredit = remainingCreditHr - course.credit;
    if (!isOld && newRemainingCredit >= 0) {
      setRemainingCreditHr(newRemainingCredit);
    } else {
      return toast.error("Remaining Credits won't less than 0!");
    }

    // to get the total price
    const newTotalPrice = totalPrice + course.price;
    setTotalPrice(newTotalPrice);

    if (!isOld && totalCredit <= 20 && newRemainingCredit >= 0) {
      const newArray = [...courseNames, course];
      setCourseNames(newArray);
    } 
  };

  return (
    <div className="max-w-[1140px] mx-auto my-12 px-4">
      <h1 className="text-center font-bold text-3xl">Course Registration</h1>
      <div className="flex flex-col md:flex-row items-start my-12 mx-auto justify-between gap-5">
        <Courses handleToAddName={handleToAddName}></Courses>
        <CourseBookmarks
          courseNames={courseNames}
          credit={credit}
          remainingCreditHr={remainingCreditHr}
          totalPrice={totalPrice}
        ></CourseBookmarks>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default WholeContainer;
