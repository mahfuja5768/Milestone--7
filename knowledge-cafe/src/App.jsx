import { useState } from "react";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    // console.log(blog)
    const isExist = bookMarks.find((item) => item.id === blog.id);
    if (isExist) {
      return alert("Already Exists!");
    } else {
      const newArray = [...bookMarks, blog];
      setBookmarks(newArray);
      console.log(bookMarks)
    }
  };

  const handleMarkAsRead = (id, getTime) => {
    // console.log(id, time)
    const totalTime = time + getTime;
    setTime(totalTime);
    const remainingBlogs = bookMarks.filter((bookMark) => bookMark.id !== id);
    setBookmarks(remainingBlogs);
  };

  return (
    <div className="container w-[1140px] mx-auto my-12 text-white px-5">
      <Header></Header>
      <div className="flex flex-col items-start my-12 gap-6 md:flex-row">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} time={time}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
