import Header from './Header'
import Content from './Content'
import { PropTypes } from 'prop-types'


const Course = ({ courseId, courses }) => {
    const course = courses.find(course => course.id === courseId);
    
    console.log("HELLO FROM COURSE", course)
    return (
    <>
    <Header>{course.name}</Header>
    <Content parts={course.parts}/>
    </>
    )
}

Course.propTypes = {
    courses: PropTypes.array,
    courseId: PropTypes.number
  }

export default Course