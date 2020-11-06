import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import TweetsList from "../components/TweetsList";
import {TweetsContainer} from "../styled";

const Home = (props) => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        setTweets(JSON.parse(localStorage.getItem('tweets')) || []);
    }, [])

    return (
        <div>
            <Navbar/>
            <TweetsContainer>
                <TweetsList tweets={tweets}/>
            </TweetsContainer>
        </div>
    )
};

export default Home;
