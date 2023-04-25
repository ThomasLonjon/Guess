import PropTypes from "prop-types";

function ButtonQuestion({ cityName }) {
  return <div>{cityName}</div>;
}

ButtonQuestion.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default ButtonQuestion;
