import PropTypes from 'prop-types';

const Part = ({ parts }) => {
  console.log(parts)
  return (
    <>
    {parts.map(part => (
      <div key={part.id}>
        <p>{part.name} - Exercises: {part.exercises}</p>
      </div>
    ))}
  </>
    )
  }
  
  Part.propTypes = {
    parts: PropTypes.array
  }
  

export default Part