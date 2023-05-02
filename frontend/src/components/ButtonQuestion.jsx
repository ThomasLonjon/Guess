import PropTypes from "prop-types";

function ButtonQuestion({ buttonTitle, buttonColor, onClick }) {
  return (
    <button
      type="button"
      className="petitB"
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
}

ButtonQuestion.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonQuestion;
