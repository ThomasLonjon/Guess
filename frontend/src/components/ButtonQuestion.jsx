import PropTypes from "prop-types";

function ButtonQuestion({
  buttonTitle,
  rightAnswer,
  setGuessed,
  setRightGuess,
  buttonState,
  setSelectedIndex,
  index,
  guessed,
}) {
  const handleClick = () => {
    if (guessed) return;
    setGuessed(true);
    setSelectedIndex(index);
    if (buttonTitle === rightAnswer) {
      setRightGuess(true);
    }
  };

  return (
    <button type="button" className={buttonState} onClick={handleClick}>
      {buttonTitle}
    </button>
  );
}

ButtonQuestion.propTypes = {
  rightAnswer: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonState: PropTypes.string.isRequired,
  setGuessed: PropTypes.func.isRequired,
  setRightGuess: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  guessed: PropTypes.bool.isRequired,
};

export default ButtonQuestion;
