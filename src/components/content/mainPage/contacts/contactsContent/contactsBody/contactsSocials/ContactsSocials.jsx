import React from 'react';
// Link
import { Link } from 'react-router-dom';
// img
import insta from '@img/mainPage/contacts/insta.svg';
import vk from '@img/mainPage/contacts/vk.svg';
import facebook from '@img/mainPage/contacts/facebook.svg';
import odnoklasniki from '@img/mainPage/contacts/odnoklasniki.svg';
// styles
import "./contactsSocials.scss";


function ContactsSocials() {

    return (
        <div className="contacts-socials">
            <h2>Cоц. сети</h2>
            <div className="contacts-socials-items">
                <Link to="/"><img src={insta} alt="insta"/></Link>
                <Link to="/"><img src={vk} alt="vk"/></Link>
                <Link to="/"><img src={facebook} alt="facebook"/></Link>
                <Link to="/"><img src={odnoklasniki} alt="odnoklasniki"/></Link>
            </div>
        </div>
	)
}

export default ContactsSocials;