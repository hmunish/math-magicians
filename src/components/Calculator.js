import './calculator.css';
import PropTypes from 'prop-types';

function ResultDisplayScreen() {
  return (<div className="resultDisplayScreen"><p id="result">0</p></div>);
}

function Button(props) {
  const { btnType } = props;
  return <button type="button" data-btntype={btnType} className="calcBtn">{btnType}</button>;
}

Button.defaultProps = {
  btnType: '',
};

Button.propTypes = {
  btnType: PropTypes.string,
};

function Keypad() {
  const keyTypes = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const buttons = [];
  keyTypes.forEach((k, c) => {
    buttons.push(<Button key={k} btnType={k} id={c} />);
  });
  return (
    <div id="keypad">
      {buttons}
    </div>
  );
}
function Calculator() {
  return (
    <section className="calculator">
      <ResultDisplayScreen />
      <Keypad />
    </section>
  );
}

export default Calculator;
