import React, { useState } from "react";
import axios from "axios"; // axios is used to make HTTP requests from node.js
import "../../index.css";

// Language Translation component that allows the user to translate text from one language to another.
const LanguageTranslation = () => {
  const [text, setText] = useState(""); // sets the text to be translated to an empty string
  const [sourceLanguage, setSourceLanguage] = useState("en"); // sets the source language to english
  const [targetLanguage, setTargetLanguage] = useState("fr"); // sets the target language to french
  const [translation, setTranslation] = useState(""); // sets the translation to an empty string

  // translates the text from the source language to the target language
  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://api.funtranslations.com/translate/${sourceLanguage}-${targetLanguage}.json`, // uses the funtranslations api to translate the text
        {
          params: {
            text,
          },
        }
      );

      // Set the translation in state
      const translatedText = response.data.contents.translated; // sets the translated text to the response data
      setTranslation(translatedText); // sets the translation to the translated text
    } catch (error) {
      console.error("Error translating text:", error); // logs the error to the console
    }
  };

  // handles the change of the text field
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // handles the change of the source language field
  const handleSourceLanguageChange = (event) => {
    setSourceLanguage(event.target.value);
  };

  // handles the change of the target language field
  const handleTargetLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  // handles the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    translateText();
  };

  // returns the language translation component
  return (
    <div className="language-translation">
      <h1>Language Translator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text to Translate:</label>
        <input type="text" id="text" value={text} onChange={handleTextChange} />

        <label htmlFor="sourceLanguage">Source Language:</label>
        <select
          id="sourceLanguage"
          value={sourceLanguage}
          onChange={handleSourceLanguageChange}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>

        <label htmlFor="targetLanguage">Target Language:</label>
        <select
          id="targetLanguage"
          value={targetLanguage}
          onChange={handleTargetLanguageChange}
        >
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
        </select>

        <button type="submit">Translate</button>
      </form>

      <div className="translation-result">
        <h2>Translation Result</h2>
        <p>{translation}</p>
      </div>
    </div>
  );
};

export default LanguageTranslation;
