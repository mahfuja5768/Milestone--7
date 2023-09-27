
import PropTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({bookMarks, time}) => {
  // console.log(time)

  return (
    <div className='md:w-1/3 '>
       <div className='bg-blue-300 p-3 rounded-lg text-blue-900 text-xl font-bold mb-6 text-center'>
         <h3>Spent time on read : {time} min</h3>
       </div>
      <div className='bg-blue-300 p-3 rounded-lg'>
     <h2 className='text-2xl font-bold mb-6 text-black'> Bookmarked Blogs : {bookMarks.length}</h2>
      <div className='flex flex-col gap-5'>
         {
          bookMarks.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
         }
      </div>
    </div>
    </div>
  )
}

Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  time: PropTypes.number,
};

export default Bookmarks