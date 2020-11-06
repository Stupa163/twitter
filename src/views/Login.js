import React, {useState} from 'react';
import {Title, Form, SubmitButton, BackArrow} from "../styled";
import {LoginInput, LoginLabel, LoginButtonContainer} from "../styled/Login";
import {Link} from "react-router-dom";

const Login = (props) => {
    const [pseudo, setPseudo] = useState('');

    const handleSubmit = () => {
        localStorage.setItem('pseudo', pseudo);
        props.history.push('/')
    }

    return (
        <div>
            <Link to="/">
                <BackArrow viewBox="0 0 24 24">
                    <g fill="#1DA1F2">
                        <path
                            d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"/>
                    </g>
                </BackArrow>
            </Link>
            <Title>Log in to Twitter</Title>
            <Form><br/>
                <LoginLabel htmlFor="pseudo">The pseudo you will be using</LoginLabel>
                <LoginInput id="pseudo" placeholder="Your pseudo" onChange={(e) => {setPseudo(e.target.value)}}/>
            </Form>
            <LoginButtonContainer>
                <SubmitButton onClick={handleSubmit}>Log in</SubmitButton>
            </LoginButtonContainer>
        </div>
    )
};

export default Login;
