import React, {useEffect, useState} from 'react';

import '../Dashboard.css';

const Quote = () => {
    
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    
    useEffect(() => {
        fetch('https://quotes.rest/qod?category=inspire&language=en')
            .then(response => response.json())
            .then(result => {
                setQuote(result.contents.quotes[0].quote)
                setAuthor(result.contents.quotes[0].author)
            })
    }, [])

    return (
        <>
            <p className="motivation-quote">" {quote} "</p>
            <p className="motivation-author"><strong>-{author}</strong></p>
        </>
    );
}

export default Quote;
