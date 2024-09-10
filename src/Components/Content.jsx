import Part from './Part'
import { PropTypes } from 'prop-types'
import Total from './Total'

const Content = ( {parts} ) => {
  return (
      <>
        {parts.map(part =>
         <Part key={part.id} part={part} />
         )}
         <Total parts={parts}/>
      </>
    )
  }

Content.propTypes = {
  parts: PropTypes.array
}
  
 

export default Content
