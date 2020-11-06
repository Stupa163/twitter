import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import {
    PaddedInput,
    PaddedTextArea,
    TweetBackArrow,
    TweetButtonsContainer,
    TweetForm,
    TweetSubmitButton
} from "../styled";
import {Link} from "react-router-dom";
import FileUtils from '../utils/File'

const Tweet = (props) => {

    const [pseudo, setPseudo] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!(pseudo.length > 0 && content.length > 0))
    }, [pseudo, content])

    const handleImageUpload = (e) => {
        FileUtils.getBase64(e.target.files[0], (res) => {
            setImage(res);
        })
    }

    const handleSubmit = () => {
        if (!disabled) {
            const tweets = JSON.parse(localStorage.getItem('tweets')) || [];
            tweets.push({pseudo, content, image})
            localStorage.setItem('tweets', JSON.stringify(tweets));
            props.history.push('/')
        }
    }

    return (
        <div>
            <Navbar/>
            <TweetButtonsContainer>
                <Link to="/">
                    <TweetBackArrow viewBox="0 0 24 24">
                        <g fill="#1DA1F2">
                            <path
                                d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"/>
                        </g>
                    </TweetBackArrow>
                </Link>
                <TweetSubmitButton disabled={disabled} type="submit" onClick={handleSubmit}>Tweet</TweetSubmitButton>
            </TweetButtonsContainer>
            <TweetForm action="">
                <label htmlFor="pseudo"/>
                <PaddedInput id="pseudo" placeholder="Your pseudo" type="text" onChange={(e) => {
                    setPseudo(e.target.value)
                }}/>
                <label htmlFor="content"/>
                <PaddedTextArea id="content" placeholder="What's happening ?" onChange={(e) => {
                    setContent(e.target.value)
                }}/>

                <PaddedInput type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleImageUpload}/>
            </TweetForm>
        </div>
    )
};

export default Tweet;
