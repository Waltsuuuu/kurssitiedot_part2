import PropTypes from 'prop-types';

const Total = ( {parts} ) => {
    return (
      <>
        {parts.reduce((accumulator, part) => {
          return accumulator + part.exercises;
           }, 0)}

      </>
    )
  }
  
  Total.propTypes = {
    parts: PropTypes.array
  }

export default Total