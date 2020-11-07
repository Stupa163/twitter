import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import TweetsList from "../components/TweetsList";
import {TweetsContainer} from "../styled";
import {HomeButton, HomeMoto} from "../styled/Home";
import {Link} from "react-router-dom";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

const Home = (props) => {

    const [loading, setLoading] = useState(true);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios.get('https://twiiter-api.herokuapp.com/')
            .then((res) => {
                setTweets(res.data.content.reverse())
                setLoading(false)
            })
    }, [])

    const HomeLogged = (
        <div>
            <Navbar/>
            <ClipLoader
                css={"display: block; margin: 50px auto auto;"}
                size={150}
                color={"#123abc"}
                loading={loading}
            />

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
