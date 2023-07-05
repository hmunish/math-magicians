import './calculator.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

// console.log(calculate({total: '10', next: '15', operation: '+'}, 'any'));

function ResultDisplayScreen(props) {
  const { result } = props;
  return (<div className="resultDisplayScreen"><p id="result">{result}</p></div>);
}

ResultDisplayScreen.propTypes = {
  result: PropTypes.string,
};

ResultDisplayScreen.defaultProps = {
  result: '',
};

function Button(props) {
  const { btnType, onClick } = props;
  return <button type="button" data-btntype={btnType} className="calcBtn" onClick={onClick}>{btnType}</button>;
}

Button.defaultProps = {
  btnType: '',
  onClick: '',
};

Button.propTypes = {
  btnType: PropTypes.string,
  onClick: PropTypes.func,
};

function Keypad(props) {
  const { onClick } = props;
  const keyTypes = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const buttons = [];
  keyTypes.forEach((k, c) => {
    buttons.push(<Button key={k} btnType={k} id={c} onClick={onClick} />);
  });
  return (
    <div id="keypad">
      {buttons}
    </div>
  );
}

Keypad.defaultProps = {
  onClick: '',
};

Keypad.propTypes = {
  onClick: PropTypes.func,
};

function Calculator() {
  const [result, setResult] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = result;

  const updateOutput = (e) => {
    const btn = e.target.dataset.btntype;
    setResult(calculate(result, btn));
  };
  return (
    <section className="calculator">
      <ResultDisplayScreen result={total || next || operation || 0} />
      <Keypad onClick={updateOutput} />
    </section>
  );
}

export default Calculator;
