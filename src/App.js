import React, { useState } from 'react';
import axios from 'axios';
import LanguageSelector from './components/LanguageSelector';
import TextArea from './components/TextArea';
import TranslateButton from './components/TranslateButton';
import Footer from './components/Footer'; // Import Footer
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es'); // Default to Spanish
  const [error, setError] = useState(null); // State to track errors

  const handleTranslate = () => {
    setError(null); // Reset error before making a new request

    axios
      .get('https://api.mymemory.translated.net/get', {
        params: {
          q: inputText,
          langpair: `${sourceLang}|${targetLang}`,
        },
      })
      .then((response) => {
        if (response.data && response.data.responseData) {
          setTranslatedText(response.data.responseData.translatedText);
        } else {
          setError('Translation failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error translating text:', error);
        setError('Translation failed. Please try again.');
      });
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>
      <div className="translator-container">
        <TextArea
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="selectors">
          <LanguageSelector
            label="From"
            selectedLang={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
          />
          <LanguageSelector
            label="To"
            selectedLang={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          />
        </div>

        <TranslateButton onClick={handleTranslate} />

        {error && <p className="error">{error}</p>}

        <TextArea placeholder="Translation" value={translatedText} readOnly />
      </div>

      <Footer /> {/* Include Footer component here */}
    </div>
  );
};

export default App;
