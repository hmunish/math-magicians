/* eslint-disable */
import './calculator.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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

function Quote() {
  const [quote, setQuote] = useState('');
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      setLoading(true);
      try{
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: { 'X-Api-Key': '9zaOwzLz4dx1r3KbxXNevQ==bNAXY6f9uzraP3Ro'},
        });
        const resData = await response.json();
        setQuote(resData[0].quote);
        setLoading(false);
      }catch(err){
        setError(true);
      }
    }
    getQuotes();
  }, [])

  if(isError) return <p className="fetchStatus">Error Loading Quote</p>
  if(isLoading) return <p className="fetchStatus">Loading Quote...</p>
  return <p className="quote">{quote}</p>
}

function Calculator() {
  const [result, setResult] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = result;

  const updateOutput = (e) => {
    const btn = e.target.dataset.btntype;
    setResult(calculate(result, btn));
  };

  return (
    <section className="calculator">
      <Quote />
      <ResultDisplayScreen result={total || next || operation || '0'} />
      <Keypad onClick={updateOutput} />
    </section>
  );
}

export default Calculator;
