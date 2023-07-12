import './Quote.css';
import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': '9zaOwzLz4dx1r3KbxXNevQ==bNAXY6f9uzraP3Ro',
            },
          },
        );
        const resData = await response.json();
        setQuote(resData[0].quote);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    getQuotes();
  }, []);

  if (isError) return <p className="fetchStatus">Error Loading Quote</p>;
  if (isLoading) return <p className="fetchStatus">Loading Quote...</p>;
  return <p className="quote">{quote}</p>;
}

export default Quote;
