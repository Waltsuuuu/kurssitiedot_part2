import PropTypes from 'prop-types';

const Total = ( {parts} ) => {
  console.log(parts)
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <p><strong>Total exercises</strong> {totalExercises}</p>
    )
  }
  
  Total.propTypes = {
    parts: PropTypes.array
  }

export default Total