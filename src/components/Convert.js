import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState(''); // to store translated text (piece of state)
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => { // helper function, we can't use 'async'/'await' directly in useEffect
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]); // anytime we get new language or text, we gonna run a function inside the useEffect 

    return (
        <div>{translated}</div>
    )
}

export default Convert;