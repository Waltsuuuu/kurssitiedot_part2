import Header from './Header'
import Content from './Content'
import { PropTypes } from 'prop-types'


const Course = ({ course }) => {

    return (
    <>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
    </>
    )
}

Course.propTypes = {
    course: PropTypes.object
  }

export default Course