import React, { useEffect } from 'react'

const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log("new language or text")
    }, [language, text]); // anytime we get new language or text, we gonna run a function inside the useEffect 

    return (
        <div>Convert</div>
    )
}

export default Convert;