import PropTypes from "prop-types";

const CourseBookmark = ({courseName, count}) => {
    
    return (
        <div className="flex gap-1">
            <h3>{count}.</h3>
            <h3 className="text-base">{courseName.title}</h3>
        </div>
    );
};
CourseBookmark.propTypes = {
    courseName: PropTypes.object.isRequired,
    count: PropTypes.number,
  };
  
export default CourseBookmark;