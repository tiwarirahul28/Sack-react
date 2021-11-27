import React from 'react';
import './ContactPage.css';
import ContactImg from "../assets/images/contact-img.svg"

const ContactPage = () => {
    return (
        <>
        <div className="container">
            <h1 className="heading">contact us</h1>
            <section className="contact">
                <div className="image">
                    <img src={ContactImg} alt=""/>
                </div>
                <form className="form1" action="">
                    <div className="inputBox">
                        <input type="text" placeholder="name"/>
                        <input type="email" placeholder="email"/>
                    </div>
                    <input type="text" placeholder="subject" className="box"/>
                    <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                    <input type="submit" className="btn" value="send"/>
                </form>
            </section>
        </div>
        </>
    )
}

export default ContactPage
