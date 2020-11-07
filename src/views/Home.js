import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import TweetsList from "../components/TweetsList";
import {TweetsContainer} from "../styled";
import {HomeButton, HomeMoto} from "../styled/Home";
import {Link} from "react-router-dom";
import axios from 'axios';

const Home = (props) => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios.get('https://twiiter-api.herokuapp.com/')
            .then((res) => {
                setTweets(res.data.content)
            })
    }, [])

    const HomeLogged = (
        <div>
            <Navbar/>
            <TweetsContainer>
                <TweetsList tweets={tweets}/>
            </TweetsContainer>
        </div>
    );

    const HomeLoggedOut = (
        <div>
            <HomeMoto>See what's happening in the world right now</HomeMoto>
            <Link to="/login">
                <HomeButton>Log in</HomeButton>
            </Link>
        </div>
    )

    return (localStorage.getItem('pseudo')) ? HomeLogged : HomeLoggedOut;

};

export default Home;
