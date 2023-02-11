import React, { useEffect, useState, useRef } from 'react';
import './cv.css'
import logo from "./images/JDCVcirc1.png";
import Card from './Card';
import bg from './images/nightsky.jpg'
import GetQuotes from './GetQuotes';

const CV = () => {

    const hgtRef = useRef(null);
    const [contentHgt, setContentHgt] = useState()
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [ftrHgt, setFtrHgt] = useState(0)

    useEffect(() => {
        const handleResize = () => setScreenHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (hgtRef.current) {
            setContentHgt(screenHeight - hgtRef.current.offsetHeight - ftrHgt);
        }
    }, [hgtRef?.current?.offsetHeight, screenHeight, ftrHgt]);

    const styleAll = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'fit-content',
        padding: '1rem'
    };

    const stylePic = {
        width: "7rem",
        height: "7rem",
        zIndex: "99"
    };

    const styleTitle = {
        fontWeight: "normal",
        fontSize: "3rem",
        color: "#cde",
        margin: "1rem",
        zIndex: "99",
        whiteSpace: "nowrap"
    }

    return (
        <div
            className='frameAll'>
            <div
                ref={hgtRef}>
                <Card
                    image={logo}
                    text="James Doyle"
                    styleAll={styleAll}
                    stylePic={stylePic}
                    styleTitle={styleTitle}
                />
                <p
                    style={{
                        marginLeft: "1rem",
                        fontStyle: "italic",
                        marginRight: "1rem"
                    }}>versatile frontend developer who combines  a passion for design with a talent for creating efficient solutions by expertly analyzing requirements, designing algorithms, and writing clean, effective code
                </p>
            </div>
            <div
                style={{
                    overflowY: "scroll",
                    height: `${contentHgt}px`
                }}>
                <div
                    style={{
                        marginLeft: "1rem",
                        display: "grid",
                        gridTemplateColumns: "12rem 16rem",
                        gridGap: "1rem",
                        gridAutoFlow: "row",
                        rowGap: 0
                    }}>
                    <li>React JS</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>Android Studio</li>
                    <li>Java</li>
                    <li>Virtual Basic (VBA)</li>
                    <li>Adobe Photoshop</li>
                    <li>GIMP</li>
                    <li>Git</li>
                    <li>Sourcetree</li>
                    <li>Atlassian JIRA</li>
                    <li>Atlassian BitBucket</li>
                </div>


                <div className="sectionHdr">
                    Contact information:
                </div>
                <ul>
                    <li>Email: james@stardev.co.za</li>
                    <li>Phone: (+27) 66 203 8201</li>
                    <li>Location: Johannesburg Gauteng South Africa</li>
                </ul>

                <div className='sectionHdr'>Work Experience</div>
                <div className="subHdr">Frontend Developer - enabled.World</div>
                <div className='indent2'>
                    <div
                        style={{
                            marginLeft: "1rem",
                            display: "grid",
                            gridTemplateColumns: "12rem 16rem",
                            gridGap: "1rem",
                            gridAutoFlow: "row",
                            rowGap: 0
                        }}>
                        <li>Android Studio</li>
                        <li>Git</li>
                        <li>React JS</li>
                        <li>Sourcetree</li>
                        <li>Python</li>
                        <li>Atlassian JIRA and BitBucket</li>
                    </div>
                    <br />
                    <p style={{ marginTop: 0, marginBottom: 0 }}>Android Studio programming applications for Android devices</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>Frontend developer in React JS and CSS - PWA Applications</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>Backend devlopment (Bots) in Python</p>
                    <p style={{ marginTop: 0 }}>Worked with AWS - CloudWatch, EC2, S3 buckets</p>
                </div>
                <div className="subHdr">Director - Sunstar Civils</div>
                <div
                    className='indent2'>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>All tasks associated with Civil Engineering Construction Business management</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>including Tendering and Estimating, Financial Control, Project Management</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>Managed core staff of 30 people and many sub contractors</p>
                </div>
                <div className="subHdr">Director - DipCivils</div>
                <div
                    className='indent2'>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>IT systems management</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>Financial Management</p>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>Managed core staff of 10 people</p>
                </div>
                <div className="subHdr">Lecturer part time - University of Johannesburg</div>
                <div
                    className='indent2'>
                    Lecturing Computer Applications for Civils Engineers 1989 to 1993
                </div>
                <div className="subHdr">Computer programmer - De Leuw Cather Inc</div>
                <div
                    className='indent2'>
                    Programming in Turbo Pascal</div>

                <div className='sectionHdr'>Education</div>
                <ul>
                    <li>MSc Engineering (Civil) - University of the Witwatersrand</li>
                    <li>Graduate Diploma in Engineering (GDE) University of the Witwatersrand</li>
                    <li>Project Management University of Pretoria</li>
                    <li>National Higher Diploma Civil engineering University of Johannesburg</li>
                </ul>

                <div className='sectionHdr'>Other interests</div>
                <ul>
                    <li>Art - mostly oil painting and drawing</li>
                    <li>Running </li>
                    <li>Hiking / walking</li>
                </ul>

            </div>
            <div>
                <GetQuotes
                    ftrHgt={(h) => setFtrHgt(h)}
                />
            </div>
        </div>
    );
};

export default CV;
