import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  // console.log(blog);
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
    id,
  } = blog;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full rounded-lg" src={cover} alt="blog-cover" />
        </figure>
        <div className="card-body flex flex-col items-start px-0 space-y-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between gap-5 mb-5">
              <img src={author_img} alt="author_img" className="w-14" />
              <div>
                <h2 className="text-2xl font-bold">{author}</h2>
                <p className="text-sm font-semibold">{posted_date}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl">{reading_time} min read</h3>
              <button onClick={() => handleAddToBookMark(blog)}>
                <FaBookmark className="text-2xl" />
              </button>
            </div>
          </div>
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <div className="flex gap-3">
            {hashtags.map((hash, idx) => (
              <p className="font-medium text-xl" key={idx}>
                #{hash}
              </p>
            ))}
          </div>
          <button
            onClick={() => handleMarkAsRead(id, reading_time)}
            className="text-blue-500 underline"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
