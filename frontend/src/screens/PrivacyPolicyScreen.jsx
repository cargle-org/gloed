import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

function PrivacyPolicyScreen() {
  return (
    <div className='privacy-policy-screen'>
        <header className='privacy-policy-header'>
            <img src={logo} alt="logo" />
            <Link to='/'>Home</Link>
        </header>

       <div className="privacy-section">
       <div className="privacy-title">
       <h2>Privacy Policy </h2>
        <p><i>Last updated at 20th May, 2022.</i></p>
       </div>

       <h4 className='privacy-sub-title'>Introduction</h4>
       <p className='privacy-text'><a href="http://gloed.co/#/">Gloed.co</a>
        Limited is an educational institution, licensed by the Federal Government of Nigeria, with the RC **1953165.** Gloed operates the gloed.co web application.<br/>

        This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Gloed website.<br/>

        If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        </p>
       <h4 className='privacy-sub-title'>Information Collection and Use</h4>
       <p className='privacy-text'>
        For a better experience while using Gloed.co, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and email address. The information that we collect will be used to contact or identify you. 

        We currently request that you only provide your name, phone number and email address upon class registration.
        </p>
       <h4 className='privacy-sub-title'>Protection of Information</h4>
       <p className='privacy-text'>
       Gloed.co safeguards the security of the data you provide us with physical, electronic, and managerial procedures. Please note that we cannot guarantee that any data transmitted over the Internet is completely secure. Accordingly, we encourage you to take every precaution to protect your personal data when you are on the Internet.
        </p>
       <h4 className='privacy-sub-title'>Commitment to Privacy</h4>
       <p className='privacy-text'>
       To make sure your personal information remains confidential; we communicate these privacy guidelines to every Gloed employee. Gloed’s Website may, from time to time, contain links to other sites. Gloed does not share your personal information with those websites and is not responsible for their privacy practices. We encourage you to learn about the privacy policies of any such company. If we are going to use your personal information differently from that stated at the time of collection, we will inform you accordingly. Gloed’s Privacy Policy is subject to change at any time. It is in your interest to review the privacy policy regularly for any changes.
        </p>
       <h4 className='privacy-sub-title'>Contact Us</h4>
       <p className='privacy-text'>
       If you have any questions or suggestions about our Privacy Policy, do not hesitate to <a href="mailto: hi@gloed.co">Contact Us</a>
        </p>
       </div>
    </div>
  )
}

export default PrivacyPolicyScreen