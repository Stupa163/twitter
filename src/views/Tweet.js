import React, {useEffect, useState} from 'react';
import {
    PaddedTextArea,
    BackArrow,
    TweetButtonsContainer,
    Form,
    SubmitButton,
    MiniProfilePicture
} from "../styled";
import {Link} from "react-router-dom";
import {getBase64} from '../utils/File'
import axios from 'axios';
import {HiddenInputFile} from "../styled/Profile";
import {NavbarSvg} from "../styled/Navbar";
import MyComponent from 'react-fullpage-custom-loader'
import {TweetImage} from "../styled/Tweet";

const Tweet = (props) => {

    const [profilePicture, setProfilePicture] = useState('')
    const [content, setContent] = useState('');
    const [image, setImage] = useState({});
    const [disabled, setDisabled] = useState(true);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setProfilePicture(localStorage.getItem('profilePicture'));
    }, [])

    useEffect(() => {
        setDisabled(!(content.length > 0))
    }, [content])

    const handleImageUpload = (e) => {
        getBase64(e.target.files[0], (res) => {
            setImage(res);
        })
    }

    const handleSubmit = () => {
        if (!disabled) {
            setLoader(true);
            axios.post('https://twiiter-api.herokuapp.com/', {
                userImage: localStorage.getItem('profilePicture'),
                pseudo: localStorage.getItem('pseudo'),
                image: image,
                content: content
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    props.history.push('/')
                })
        }
    }

    return (
        <div>
            {
                (loader) ? <MyComponent sentences={[]} fadeIn={true}/> : null
            }
            <TweetButtonsContainer>
                <Link to="/">
                    <BackArrow viewBox="0 0 24 24">
                        <g fill="#1DA1F2">
                            <path
                                d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"/>
                        </g>
                    </BackArrow>
                </Link>
                <SubmitButton disabled={disabled} type="submit" onClick={handleSubmit}>Tweet</SubmitButton>
            </TweetButtonsContainer>
            <Form action="">
                <MiniProfilePicture src={profilePicture} alt=""/>
                <label htmlFor="image">
                    <NavbarSvg viewBox="0 0 24 24">
                        <g fill="#1DA1F2">
                            <path
                                d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"/>
                        </g>
                    </NavbarSvg>
                </label>
                <HiddenInputFile id="image" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleImageUpload}/>
                <label htmlFor="content"/>
                <PaddedTextArea id="content" placeholder="What's happening ?" onChange={(e) => {
                    setContent(e.target.value)
                }}/>
                <TweetImage src={image} alt=""/>
            </Form>
        </div>
    )
};

export default Tweet;
