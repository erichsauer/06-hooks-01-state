import React, { useState } from 'react';
import Load from '../../components/app/quote/Load';
import Quote from '../../components/app/quote/Quote';
import fetchQuote from '../../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, saveQuote] = useState({});

  const handleButtonClick = async () => {
    const quote = await fetchQuote();
    saveQuote(quote);
  };

  return (
    <>
      <Load onButtonClick={handleButtonClick} />
      {quote.quote && <Quote {...quote} />}
    </>
  );
};

export default SimpsonsQuote;
