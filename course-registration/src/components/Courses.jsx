import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

const Courses = ({ handleToAddName }) => {
  const [courses, setCourses] = useState([]);

  //get courses data from JSON file
  
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleToAddName={handleToAddName}
          ></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleToAddName: PropTypes.func,
};

export default Courses;
