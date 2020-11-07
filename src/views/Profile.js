import React, {useState} from 'react';
import {BigBlueBlock, HiddenInputFile, ProfileImage} from "../styled/Profile";
import {getBase64} from '../utils/File'
import {LoginInput} from "../styled/Login";
import Navbar from "../components/Navbar";

const Profile = (props) => {
    const [image, setImage] = useState(localStorage.getItem('profilePicture'));
    const [pseudo, setPseudo] = useState(localStorage.getItem('pseudo'));

    const handleImageChange = (e) => {
        getBase64(e.target.files[0], (res) => {
            localStorage.setItem('profilePicture', res);
            setImage(res);
        })
    }

    const handlePseudoChange = (e) => {
        setPseudo(e.target.value);
        localStorage.setItem('pseudo', e.target.value)
    }

    return (
        <div>
            <Navbar/>
            <BigBlueBlock/>
            <label htmlFor="image">
                <ProfileImage src={image} alt=""/>
            </label>
            <HiddenInputFile id="image" type="file" onChange={handleImageChange}/><br/>
            <LoginInput onChange={handlePseudoChange} value={pseudo} margin_left="5vw"/>
        </div>
    )
};

export default Profile;
