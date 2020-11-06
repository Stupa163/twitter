import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import TweetsList from "../components/TweetsList";
import {HomeButton, HomeMoto, TweetsContainer} from "../styled";
import {Link} from "react-router-dom";

const Home = (props) => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        setTweets(JSON.parse(localStorage.getItem('tweets')) || []);
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
