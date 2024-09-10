import PropTypes from 'prop-types';

const Header = ( { children }) => {
  console.log("HELLO FROM HEADER", children)
    return (
      <h1>
          {children}
      </h1>
    )
  }
  
  Header.propTypes = {
    children: PropTypes.string
  }

export default Header