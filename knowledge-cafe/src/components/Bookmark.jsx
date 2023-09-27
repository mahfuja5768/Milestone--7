
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  // console.log(bookmark)
  return (
    <div className='bg-blue-600 p-3 rounded-lg'>
      <h2>{bookmark.title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
}

export default Bookmark