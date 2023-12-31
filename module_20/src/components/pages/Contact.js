import React from "react";
import '../../style.css';

function Contact(props) {
    return (
        <div className="index-background">
                <div className="contact-links">
                <h2>Contact</h2>
                    <a className="btn" href="mailto:Haniadenm@gmail.com" role="button">
                        <img alt="email icon" src={"/portfolio/images/email.png"} style={{ width: 20 + "px" }} /> Haniadenm@gmail.com</a>
                    <br />
                    <a className="btn" href="tel:612-720-4675" role="button">
                        <img alt="phone icon" src={"/portfolio/images/phone.png"} style={{ width: 20 + "px" }} /> 612-720-4675</a>
                    <br />
                    <a className="btn" href="/portfolio/resume.pdf" target="_blank" role="button">
                        <img alt="pdf icon" src={"/portfolio/images/pdf.png"} style={{ width: 20 + "px" }} /> Resume</a>
                    <br />
                    <a className="btn" href="https://www.linkedin.com/in/hanimohamed/" target="_blank" role="button">
                        <img alt="linkedin icon" src={"/portfolio/images/linked in.png"} style={{ width: 20 + "px" }} /> linkedin.com/in/haniadenm</a>
                    <br />
                    <a className="btn" href="https://www.github.com/haniadenm" target="_blank" role="button">
                        <img alt="github icon" src={"/portfolio/images/githubicon.png"} style={{ width: 20 + "px" }} /> github.com/haniadenm</a>
                </div>
        </div>
    );
}

export default Contact;