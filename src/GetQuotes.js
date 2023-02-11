import React, { useEffect, useState, useRef } from 'react'
import './cv.css'

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GetQuotes = (props) => {
    const [qdata, setQdata] = useState("null")
    const [qauth, setQauth] = useState("null")
    const [newQte, setNewQte] = useState(true)
    const ftrHgtRef = useRef(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://type.fit/api/quotes');
                response
                    .json()
                    .then((response) => {
                        let numbr = randomNumberInRange(1, 1643);
                        setQdata(response[numbr].text)
                        setQauth(response[numbr].author)
                    })
                    .catch((err) => console.error(err));
            }
            catch (err) { console.log("error", err) }
        }

        fetchData();
    }, [newQte]);

    useEffect(() => {
        if (ftrHgtRef.current) props.ftrHgt(ftrHgtRef.current.offsetHeight)
    }, [ftrHgtRef?.current?.offsetHeight]);


    return (
        <div
            ref={ftrHgtRef}
            className='frameAll'
            style={{
                height:"64px",
                padding: "1rem",
                backgroundColor: "#cde"
            }}
        >
            <button
                onClick={() => setNewQte(!newQte)}
            >
                APi generate random quote
            </button>
            <div>
                {qdata === null || qdata.length <= 0
                    ? "internet not connected"
                    : qdata + "-" + qauth
                }
            </div>
        </div>
    )

}

export default GetQuotes
