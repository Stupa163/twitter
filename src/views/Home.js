import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import TweetsList from "../components/TweetsList";
import {TweetsContainer} from "../styled";
import {HomeButton, HomeMoto, OffLineError, OffLineIcon} from "../styled/Home";
import {Link} from "react-router-dom";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

const Home = (props) => {
    const [noInternet, setNoInternet] = useState(false)
    const [loading, setLoading] = useState(true);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios.get('https://twiiter-api.herokuapp.com/')
            .then((res) => {
                setTweets(res.data.content.reverse())
                setLoading(false)
            })
            .catch(() => {
                setNoInternet(true)
                setLoading(false)
            })
    }, [])

    const HomeLogged = (
        <div>
            <Navbar/>
            <OffLineError display={noInternet}>
                <OffLineIcon>
                    <g fill="#1DA1F2">
                        <path
                            d="M1.626 17.87c.125 0 .253-.03.37-.098.36-.205.485-.663.28-1.023-.355-.627-.544-1.343-.544-2.07 0-2.218 1.732-4.02 3.913-4.172.018.282.046.564.096.84.067.36.383.614.738.614.045 0 .09-.004.136-.012.407-.074.678-.465.604-.873-.062-.34-.094-.69-.094-1.04 0-3.204 2.606-5.81 5.81-5.81.58 0 1.15.085 1.702.253.394.123.814-.103.937-.498.12-.396-.103-.815-.5-.937-.69-.21-1.41-.318-2.14-.318-3.673 0-6.714 2.727-7.225 6.262-3.04.118-5.475 2.62-5.475 5.69 0 .986.256 1.958.74 2.81.138.243.39.38.653.38zm18.554-6.802c.03-.312.063-.78.063-1.032 0-.59-.07-1.177-.21-1.745-.1-.4-.503-.645-.907-.55-.402.1-.648.506-.55.908.11.45.167.92.167 1.388 0 .203-.03.615-.055.888-2.067.132-3.816 1.567-4.306 3.603-.097.402.15.808.555.904.397.094.808-.15.904-.554.352-1.46 1.647-2.48 3.15-2.48 1.788 0 3.242 1.455 3.242 3.242s-1.454 3.24-3.24 3.24H8.454c-.414 0-.75.336-.75.75s.336.75.75.75H18.99c2.615 0 4.742-2.126 4.742-4.74 0-2.2-1.514-4.038-3.55-4.57zm.878-8.848c-.293-.293-.768-.293-1.06 0l-19 19c-.294.293-.294.768 0 1.06.145.147.337.22.53.22s.383-.072.53-.22l19-19c.293-.293.293-.767 0-1.06z"/>
                    </g>
                </OffLineIcon>
                It looks like you've lost your internet connexion.
            </OffLineError>
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
