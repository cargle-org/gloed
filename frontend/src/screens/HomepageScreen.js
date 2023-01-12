import "../css/App.css";
import { Link } from "react-router-dom";
import {
     AtSign,
     Mail,
} from "react-feather";
import {
     useEffect,
     useState,
} from "react";
import Logo from "../images/logo.svg";
import JumbotronImage from "../images/jumbotron-img.svg";
import SlackImage from "../images/slack.svg";
import AboutUsImage from "../images/about-us-image.svg";
import PersonaImg from "../images/testimonial-card-img.svg";
import FoooterDesign from "../images/footer-design.svg";
import Logo2 from "../images/logo2.svg";
import SocialInstagram from "../images/social/instagram.svg";
import SocialTwitter from "../images/social/twitter.svg";
import SocialLinkedIn from "../images/social/linkedIn.svg";
import SocialSlack from "../images/social/slack.svg";
import axios from "axios";
import PaymentForm from "../components/PaymentForm";
import { Icon } from "@iconify/react";
import Testimonials from "../components/Testimonials";
import moment from "moment";

const siteTextData =
     {
          siteText:
               {
                    _id: "61c9d583f86a9659381694cd",
                    site: "gloed.co",
                    data: {
                         headerMenu1:
                              "ABOUT US",
                         headerMenu2:
                              "PRICING",
                         headerMenu3:
                              "TESTIMONIALS",
                         jumbotronText1:
                              "AFFORDABLE, INTERACTIVE & FRIENDLY",
                         jumbotronText2part1:
                              "Learn to use SQL for",
                         jumbotronText2part2:
                              "Business analysis & automation ",
                         jumbotronText2part3:
                              "",
                         jumbotronText3part1:
                              "Scale up your productivity by over 60% using SQL & Excel to analyze and automate business needs. ",
                         jumbotronText3part2:
                              "No prior SQL knowledge is required.",
                         pricingHeader:
                              "PRICING",
                         pricingText1:
                              "Available Courses",
                         sqlCard1Title:
                              "BASIC LEVEL",
                         sqlCard1Price:
                              "5000",
                         sqlCard1Description:
                              "Learn how to use SQL to query data stored in a database",
                         sqlCard1Time:
                              "in 1 hour",
                         sqlCard2Title:
                              "INTERMEDIATE LEVEL",
                         sqlCard2Price:
                              "10000",
                         sqlCard2Description:
                              "Expand your SQL skills by manipulating databases with multiple related tables",
                         sqlCard2Time:
                              "in 1 hour",
                         sqlCard3Title:
                              "ADVANCED LEVEL",
                         sqlCard3Price:
                              "15000",
                         sqlCard3Description:
                              "Learn powerful functions for performing complex database operations",
                         sqlCard3Time:
                              "in 2 hours ",
                         excelText1:
                              "Coming Soon",
                         excelText2:
                              "Join our slack community to get up to date",
                         excelCard1Title:
                              "BASIC LEVEL",
                         excelCard1Price:
                              "10000",
                         excelCard1Description:
                              "Learn to work with different data types and basic formula and functions to solve real life problems",
                         excelCard1Time:
                              "in 1 hour",
                         excelCard2Title:
                              "INTERMEDIATE LEVEL",
                         excelCard2Price:
                              "15000",
                         excelCard2Description:
                              "Learn to effectively use excel to analyse and visualise data.",
                         excelCard2Time:
                              "in 1 hour",
                         joinOurCommunityText1:
                              "JOIN US",
                         joinOurCommunityText2:
                              "Slack Community",
                         joinOurCommunityText3part1:
                              "Join our slack community to collaborate with other people",
                         joinOurCommunityText3part2:
                              "and get answers to your SQL & Excel related questions.",
                         firesideText1:
                              "FREE CLASS",
                         firesideText2:
                              "Fireside Chat",
                         firesideText3part1:
                              "Once every month, we will discuss the importance of SQL and Excel, walk you through its application to your daily use-cases and also answer any questions you might have.",
                         firesideText3part2:
                              "This session is aimed at getting you started with data analysis and improving your productivity.",
                         aboutUsText1:
                              "WHO WE ARE",
                         aboutUsText2:
                              "About Us",
                         aboutUsText3:
                              "Our coaches have over 5 years of experience teaching SQL and Excel and have trained 600+ people from Basic to Advanced proficiency level. ",
                         experienceText1:
                              "",
                         experienceText2:
                              "",
                         trainedText1:
                              "200 +",
                         trainedText2:
                              "Number of people trained",
                         testimonialText1:
                              "FEEDBACK",
                         testimonialText2:
                              "Testimonials",
                         testimonialCard1Text:
                              "“It was convenient - the communication and teaching style is commendable.”",
                         testimonialCard1Name:
                              "aFounder at Bangs INC",
                         testimonialCard1Position:
                              "Founder at Bangs INC",
                         testimonialCard2Text:
                              "“The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”",
                         testimonialCard2Name:
                              "Wale Fasakin",
                         testimonialCard2Position:
                              "Student, U.I",
                         testimonialCard3Text:
                              "“The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”",
                         testimonialCard3Name:
                              "Kirko Bangs",
                         testimonialCard3Position:
                              "Founder at Bangs INC",
                    },
                    __v: 0,
               },
     };

const HomepageScreen =
     () => {
          const [
               siteText,
               setSiteText,
          ] =
               useState(
                    {}
               );
          const [
               selectedCourse,
               setSelectedCourse,
          ] =
               useState(
                    "sql"
               );

              const [info,  setInfo] = useState('true') ;
          const [
               menuOpen,
               setMenuOpen,
          ] =
               useState(
                    false
               );
          const [
               viewModal,
               setViewModal,
          ] =
               useState(
                    false
               );
          const [
               selectedPlan,
               setSelectedPlan,
          ] =
               useState(
                    ""
               );
          const [
               selectedPrice,
               setSelectedPrice,
          ] =
               useState(
                    ""
               );

          useEffect(() => {
            //    axios.get(
            //         "https://gloed-previous.onrender.com/api/site-text"
            //    ).then(
            //         (
            //              response
            //         ) => {
            //              setSiteText(
            //                   response
            //                        .data
            //                        .siteText
            //                        .data
            //              );
            //              console.log(
            //                   response
            //              );
            //         }
            //    );
               setSiteText(siteTextData.siteText.data)
          }, []);

          const gotoAbout =
               () => {
                    const aboutTop =
                         document.getElementById(
                              "about-us"
                         ).offsetTop;
                    console.log(
                         aboutTop
                    );
                    window.scrollTo(
                         {
                              top: aboutTop,
                              left: 0,
                              behavior:
                                   "smooth",
                         }
                    );
                    setMenuOpen(
                         false
                    );
               };

          const gotoPricing =
               () => {
                    const pricingTop =
                         document.getElementById(
                              "available-courses"
                         ).offsetTop;
                    console.log(
                         pricingTop
                    );
                    window.scrollTo(
                         {
                              top: pricingTop,
                              left: 0,
                              behavior:
                                   "smooth",
                         }
                    );
                    setMenuOpen(
                         false
                    );
               };

          const gotoContact =
               () => {
                    const contactTop =
                         document.getElementById(
                              "contact-us"
                         ).offsetTop;
                    console.log(
                         contactTop
                    );
                    window.scrollTo(
                         {
                              top: contactTop,
                              left: 0,
                              behavior:
                                   "smooth",
                         }
                    );
                    setMenuOpen(
                         false
                    );
               };

          const gotoFireside = () => {
              const firesideTop = document.getElementById("fireside-section").offsetTop
              window.scrollTo({
                  top: firesideTop,
                  left: 0,
                  behavior: 'smooth'
              });
              setMenuOpen(false)
          }

          // const gotoTestimonials = () => {
          //     // const testimonialTop = document.getElementById("testimonials").offsetTop
          //     // console.log(testimonialTop)
          //     // window.scrollTo({
          //     //     top: testimonialTop,
          //     //     left: 0,
          //     //     behavior: 'smooth'
          //     // });
          //     // setMenuOpen(false)
          // }
        const FiresideClass = moment("20230128", "YYYYMMDD").fromNow();

          return (
               <>
                    <header>
                         {/* Navbar */}
                         <div className="header">
                              <nav className="header-div">
                                   <div className="logo">
                                        <img
                                             src={
                                                  Logo
                                             }
                                             alt=""
                                             className=""
                                        />
                                   </div>
                                   <div className="header-menu">
                                        <ul className="">
                                             <li className="">
                                                  <span
                                                       onClick={
                                                            gotoAbout
                                                       }
                                                       href="#"
                                                       className=""
                                                  >
                                                       {
                                                            siteText.headerMenu1
                                                       }
                                                  </span>
                                             </li>
                                             <li className="">
                                                  <span
                                                       onClick={
                                                            gotoPricing
                                                       }
                                                       className=""
                                                  >
                                                       {
                                                            siteText.headerMenu2
                                                       }
                                                  </span>
                                             </li>
                                             <li className="">
                                                  <span
                                                       onClick={
                                                            gotoContact
                                                       }
                                                       className=""
                                                  >
                                                       Contact
                                                       us
                                                  </span>
                                             </li>
                                             {/* <li className=""><span onClick={gotoTestimonials} className="">{siteText.headerMenu3}</span></li> */}
                                        </ul>
                                   </div>
                                   <div className="mobile-menu">
                                        <div
                                             className="burger-menu"
                                             onClick={() => {
                                                  setMenuOpen(
                                                       !menuOpen
                                                  );
                                             }}
                                        >
                                             <div className=""></div>
                                             <div className=""></div>
                                             <div className=""></div>
                                        </div>
                                        {menuOpen ? (
                                             <ul className="">
                                                  <li className="">
                                                       <span
                                                            onClick={
                                                                 gotoAbout
                                                            }
                                                            href="#about-us"
                                                            className=""
                                                       >
                                                            {
                                                                 siteText.headerMenu1
                                                            }
                                                       </span>
                                                  </li>
                                                  <li className="">
                                                       <span
                                                            onClick={
                                                                 gotoPricing
                                                            }
                                                            href="#available-courses"
                                                            className=""
                                                       >
                                                            {
                                                                 siteText.headerMenu2
                                                            }
                                                       </span>
                                                  </li>
                                                  {/* <li className=""><span onClick={gotoTestimonials} href="#testimonials" className="">{siteText.headerMenu3}</span></li> */}
                                             </ul>
                                        ) : null}
                                   </div>
                              </nav>
                         </div>
                         {/* jumbotron */}
                         <div className=" jumbotron">
                              <div className="jumbotron-div1">
                                   <h6 className=" text-1">
                                        <svg
                                             width="27"
                                             height="27"
                                             viewBox="0 0 27 27"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M24 13.5C24 19.299 19.0751 24 13 24C6.92487 24 2 19.299 2 13.5C2 7.70101 6.92487 3 13 3C19.0751 3 24 7.70101 24 13.5Z"
                                                  fill="url(#paint0_radial_125_581)"
                                                  stroke="#F8DF15"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                             />
                                             <path
                                                  opacity="0.36"
                                                  d="M20 15.0771C18.3866 17.357 16.5001 19 13.1418 19C9.87912 19 7.49065 17.1063 6 15C7.3636 16.3335 9.36055 17.8653 13 17.8653C17.3486 17.8653 18.109 16.5968 20 15.0771Z"
                                                  fill="white"
                                             />
                                             <path
                                                  d="M20 15.0771C18.3866 17.357 16.5001 19 13.1418 19C9.87912 19 7.49065 17.1063 6 15C7.3636 16.3335 9.36055 17.8653 13 17.8653C17.3486 17.8653 18.109 16.5968 20 15.0771Z"
                                                  fill="url(#paint1_radial_125_581)"
                                             />
                                             <path
                                                  opacity="0.36"
                                                  d="M12 11C12 12.6667 11.3415 14 10.5366 14C9.73171 14 9 12.6667 9 11C9 9.33333 9.65854 8 10.4634 8C11.2683 8 11.9268 9.33333 11.9268 11H12Z"
                                                  fill="white"
                                             />
                                             <path
                                                  opacity="0.36"
                                                  d="M17 11C17 12.6667 16.55 14 16 14C15.45 14 15 12.6667 15 11C15 9.33333 15.45 8 16 8C16.55 8 17 9.33333 17 11Z"
                                                  fill="white"
                                             />
                                             <path
                                                  d="M12 10.5C12 11.8889 11.325 13 10.5 13C9.675 13 9 11.8889 9 10.5C9 9.11111 9.675 8 10.5 8C11.325 8 12 9.11111 12 10.5Z"
                                                  fill="black"
                                             />
                                             <path
                                                  d="M17 10.5C17 11.8889 16.55 13 16 13C15.45 13 15 11.8889 15 10.5C15 9.11111 15.45 8 16 8C16.55 8 17 9.11111 17 10.5Z"
                                                  fill="black"
                                             />
                                             <defs>
                                                  <radialGradient
                                                       id="paint0_radial_125_581"
                                                       cx="0"
                                                       cy="0"
                                                       r="1"
                                                       gradientUnits="userSpaceOnUse"
                                                       gradientTransform="translate(10.6829 9.51478) scale(11.3048 10.7909)"
                                                  >
                                                       <stop stopColor="#FFFCDE" />
                                                       <stop
                                                            offset="0.64486"
                                                            stopColor="#F6E76A"
                                                       />
                                                       <stop
                                                            offset="1"
                                                            stopColor="#FFB738"
                                                       />
                                                  </radialGradient>
                                                  <radialGradient
                                                       id="paint1_radial_125_581"
                                                       cx="0"
                                                       cy="0"
                                                       r="1"
                                                       gradientUnits="userSpaceOnUse"
                                                       gradientTransform="translate(13.3418 20.3597) scale(10.5351 8.5947)"
                                                  >
                                                       <stop stopColor="#777777" />
                                                       <stop offset="1" />
                                                  </radialGradient>
                                             </defs>
                                        </svg>
                                        <span>
                                             {
                                                  siteText.jumbotronText1
                                             }
                                        </span>
                                   </h6>
                                   <h4 className="text-2">
                                        {
                                             siteText.jumbotronText2part1
                                        }{" "}
                                        <span>
                                             {
                                                  siteText.jumbotronText2part2
                                             }
                                        </span>{" "}
                                        {
                                             siteText.jumbotronText2part3
                                        }
                                   </h4>
                                   <p className="text-3">
                                        {
                                             siteText.jumbotronText3part1
                                        }
                                        <br />
                                        <strong>
                                             {
                                                  siteText.jumbotronText3part2
                                             }
                                        </strong>
                                   </p>
                                   <div
                                        className="join-slack-button"
                                        onClick={
                                             gotoPricing
                                        }
                                   >
                                        <div className="join-slack-button-div1">
                                             START
                                             HERE
                                        </div>
                                        <div className="join-slack-button-div2">
                                             <svg
                                                  width="18"
                                                  height="18"
                                                  viewBox="0 0 18 18"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                       fill="#FDD961"
                                                  />
                                             </svg>
                                        </div>
                                   </div>

                                   <div className="circle-down">
                                        <svg
                                             onClick={
                                                  gotoAbout
                                             }
                                             width="31"
                                             height="31"
                                             viewBox="0 0 31 31"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M1.9375 15.5C1.9375 19.097 3.3664 22.5467 5.90986 25.0901C8.45333 27.6336 11.903 29.0625 15.5 29.0625C19.097 29.0625 22.5467 27.6336 25.0901 25.0901C27.6336 22.5467 29.0625 19.097 29.0625 15.5C29.0625 11.903 27.6336 8.45333 25.0901 5.90986C22.5467 3.3664 19.097 1.9375 15.5 1.9375C11.903 1.9375 8.45333 3.3664 5.90986 5.90986C3.3664 8.45333 1.9375 11.903 1.9375 15.5ZM31 15.5C31 19.6109 29.367 23.5533 26.4602 26.4602C23.5533 29.367 19.6109 31 15.5 31C11.3891 31 7.44666 29.367 4.53984 26.4602C1.63303 23.5533 0 19.6109 0 15.5C0 11.3891 1.63303 7.44666 4.53984 4.53984C7.44666 1.63303 11.3891 0 15.5 0C19.6109 0 23.5533 1.63303 26.4602 4.53984C29.367 7.44666 31 11.3891 31 15.5ZM16.4688 9.71875C16.4688 9.46182 16.3667 9.21542 16.185 9.03374C16.0033 8.85206 15.7569 8.75 15.5 8.75C15.2431 8.75 14.9967 8.85206 14.815 9.03374C14.6333 9.21542 14.5312 9.46182 14.5312 9.71875V18.9427L10.3734 14.7829C10.1915 14.601 9.94475 14.4988 9.6875 14.4988C9.43025 14.4988 9.18353 14.601 9.00162 14.7829C8.81972 14.9648 8.71753 15.2115 8.71753 15.4688C8.71753 15.726 8.81972 15.9727 9.00162 16.1546L14.8141 21.9671C14.9041 22.0573 15.011 22.1289 15.1287 22.1778C15.2464 22.2266 15.3726 22.2517 15.5 22.2517C15.6274 22.2517 15.7536 22.2266 15.8713 22.1778C15.989 22.1289 16.0959 22.0573 16.1859 21.9671L21.9984 16.1546C22.1803 15.9727 22.2825 15.726 22.2825 15.4688C22.2825 15.2115 22.1803 14.9648 21.9984 14.7829C21.8165 14.601 21.5698 14.4988 21.3125 14.4988C21.0552 14.4988 20.8085 14.601 20.6266 14.7829L16.4688 18.9427V9.71875Z"
                                                  fill="black"
                                             />
                                        </svg>
                                   </div>
                              </div>
                              <div className="jumbotron-div2">
                                   <img
                                        src={
                                             JumbotronImage
                                        }
                                        alt=""
                                        className=""
                                   />
                              </div>
                         </div>
                         <div className="info-section">
                              <div className="info-card">
                                   <Icon
                                        icon="bi:info-circle"
                                        color="#fff"
                                        width="30"
                                        onClick={() =>
                                             setInfo(
                                                  !info
                                             )
                                        }
                                   />
                                   {info && (
                                        <div
                                             onClick={
                                                  gotoFireside
                                             }
                                        >
                                             {" "}
                                             Next
                                             Fireside
                                             Chat : Jan. 28
                                        
                                        </div>
                                   )}
                              </div>
                         </div>
                         {/* <div className="header-carousel-icon">
                              <svg
                                   width="67"
                                   height="7"
                                   viewBox="0 0 67 7"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <rect
                                        width="38.1061"
                                        height="6.92838"
                                        rx="3.46419"
                                        fill="black"
                                   />
                                   <rect
                                        x="45.5667"
                                        width="6.64892"
                                        height="6.64892"
                                        rx="3.32446"
                                        fill="black"
                                   />
                                   <rect
                                        x="59.5272"
                                        width="6.64892"
                                        height="6.64892"
                                        rx="3.32446"
                                        fill="black"
                                   />
                              </svg>
                         </div> */}
                    </header>
                    {/* available courses */}
                    <section
                         id="available-courses"
                         className="available-courses"
                    >
                         <div className="">
                              <h2 className="pricing">
                                   {
                                        siteText.pricingHeader
                                   }
                              </h2>
                              <h4 className="available-courses-text">
                                   {
                                        siteText.pricingText1
                                   }
                              </h4>
                              <div className="pricing-div">
                                   <div className="sql-or-excel">
                                        <div
                                             className={
                                                  selectedCourse ===
                                                  "sql"
                                                       ? "sql active"
                                                       : "sql"
                                             }
                                             onClick={() => {
                                                  setSelectedCourse(
                                                       "sql"
                                                  );
                                             }}
                                        >
                                             <svg
                                                  width="43"
                                                  height="43"
                                                  viewBox="0 0 43 43"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <circle
                                                       cx="21.4025"
                                                       cy="21.4025"
                                                       r="20.9025"
                                                       fill="none"
                                                       stroke="#EFEFEF"
                                                  />
                                                  <path
                                                       d="M29.9841 14.8679C29.7252 13.2683 26.0266 12 21.5 12C16.9734 12 13.2748 13.2683 13.0159 14.8679H13V15.0472V19.1698V19.3491V19.5283V23.4717V23.6509V23.8302V28.1321H13.0159C13.2748 29.7313 16.9737 31 21.5 31C26.0262 31 29.7252 29.7313 29.9841 28.1321H30V23.8302V23.6509V23.4717V19.5283V19.3491V19.1698V15.0472V14.8679H29.9841Z"
                                                       fill="#4588EC"
                                                  />
                                                  <path
                                                       d="M21.5 26.698C16.8055 26.698 13 25.3336 13 23.6509V28.132H13.0159C13.2748 29.7312 16.9737 30.9999 21.5 30.9999C26.0262 30.9999 29.7252 29.7312 29.9841 28.132H30V23.6509C30 25.3336 26.1945 26.698 21.5 26.698Z"
                                                       fill="#1F447A"
                                                  />
                                                  <path
                                                       d="M13 23.4717V23.6509C13 23.5907 13.0064 23.5312 13.0159 23.4717H13Z"
                                                       fill="#1F447A"
                                                  />
                                                  <path
                                                       d="M29.9841 23.4717C29.9937 23.5312 30.0001 23.5907 30.0001 23.6509V23.4717H29.9841Z"
                                                       fill="#1F447A"
                                                  />
                                                  <path
                                                       d="M21.5 22.3962C16.8055 22.3962 13 21.0318 13 19.349V23.8301H13.0159C13.2748 25.4294 16.9737 26.6981 21.5 26.6981C26.0262 26.6981 29.7252 25.4294 29.9841 23.8301H30V19.349C30 21.0318 26.1945 22.3962 21.5 22.3962Z"
                                                       fill="#2D65B8"
                                                  />
                                                  <path
                                                       d="M13 19.1698V19.349C13 19.2888 13.0064 19.2293 13.0159 19.1698H13Z"
                                                       fill="#2D65B8"
                                                  />
                                                  <path
                                                       d="M29.9841 19.1698C29.9937 19.2293 30.0001 19.2888 30.0001 19.349V19.1698H29.9841Z"
                                                       fill="#2D65B8"
                                                  />
                                                  <path
                                                       d="M21.5 18.0943C26.1944 18.0943 30 16.7301 30 15.0472C30 13.3643 26.1944 12 21.5 12C16.8056 12 13 13.3643 13 15.0472C13 16.7301 16.8056 18.0943 21.5 18.0943Z"
                                                       fill="#4588EC"
                                                  />
                                                  <path
                                                       d="M21.5 18.0943C16.8055 18.0943 13 16.7299 13 15.0471V19.5283H13.0159C13.2748 21.1275 16.9737 22.3962 21.5 22.3962C26.0262 22.3962 29.7252 21.1275 29.9841 19.5283H30V15.0471C30 16.7299 26.1945 18.0943 21.5 18.0943Z"
                                                       fill="#4588EC"
                                                  />
                                                  <path
                                                       d="M13 14.8679V15.0472C13 14.9869 13.0064 14.9274 13.0159 14.8679H13Z"
                                                       fill="#4588EC"
                                                  />
                                                  <path
                                                       d="M29.9841 14.8679C29.9937 14.9274 30.0001 14.9869 30.0001 15.0472V14.8679H29.9841Z"
                                                       fill="#4588EC"
                                                  />
                                                  <path
                                                       d="M21.5859 17.2145C25.6638 17.2145 28.9697 16.2028 28.9697 14.9549C28.9697 13.707 25.6638 12.6953 21.5859 12.6953C17.5079 12.6953 14.202 13.707 14.202 14.9549C14.202 16.2028 17.5079 17.2145 21.5859 17.2145Z"
                                                       fill="white"
                                                  />
                                             </svg>
                                             <span className="">
                                                  SQL
                                             </span>
                                        </div>
                                        <div
                                             className={
                                                  selectedCourse ===
                                                  "sql"
                                                       ? "sql "
                                                       : "sql active"
                                             }
                                             onClick={() => {
                                                  setSelectedCourse(
                                                       "excel"
                                                  );
                                             }}
                                        >
                                             <svg
                                                  width="43"
                                                  height="43"
                                                  viewBox="0 0 43 43"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <circle
                                                       cx="21.4025"
                                                       cy="21.4025"
                                                       r="20.9025"
                                                       fill="none"
                                                       stroke="#EFEFEF"
                                                  />
                                                  <path
                                                       d="M22.782 11.6932H15.9827C15.5166 11.6932 15.1328 12.0776 15.1328 12.5444V16.1619L22.782 20.6306L26.6065 22.2467L30.431 20.6306V16.1619L22.782 11.6932Z"
                                                       fill="#21A366"
                                                  />
                                                  <path
                                                       fillRule="evenodd"
                                                       clipRule="evenodd"
                                                       d="M15.1328 15.9147H22.5752V20.5582H15.1328V15.9147Z"
                                                       fill="#107C41"
                                                  />
                                                  <path
                                                       d="M29.5582 11.6932H22.5752V15.9146H30.431V12.4973C30.431 12.0563 30.0369 11.6932 29.5582 11.6932Z"
                                                       fill="#33C481"
                                                  />
                                                  <path
                                                       d="M22.782 20.5582H15.1328V28.5789C15.1328 29.0419 15.5166 29.4232 15.9827 29.4232H29.5812C30.0473 29.4232 30.431 29.0419 30.431 28.5789V24.9907L22.782 20.5582Z"
                                                       fill="#185C37"
                                                  />
                                                  <path
                                                       fillRule="evenodd"
                                                       clipRule="evenodd"
                                                       d="M22.5752 20.5582H30.431V25.2018H22.5752V20.5582Z"
                                                       fill="#107C41"
                                                  />
                                                  <path
                                                       d="M20.6998 14.7814H15.1993V27.0591H20.6998C21.1634 27.0578 21.5446 26.6696 21.5459 26.1975V15.6429C21.5446 15.1709 21.1634 14.7827 20.6998 14.7814Z"
                                                       fill="black"
                                                       fillOpacity="0.094118"
                                                  />
                                                  <path
                                                       d="M20.0651 15.4276H15.1993V27.7053H20.0651C20.5287 27.704 20.9099 27.3158 20.9112 26.8438V16.2891C20.9099 15.8171 20.5287 15.4289 20.0651 15.4276Z"
                                                       fill="black"
                                                       fillOpacity="0.2"
                                                  />
                                                  <path
                                                       d="M20.0651 15.4276H15.1993V26.4129H20.0651C20.5287 26.4116 20.9099 26.0234 20.9112 25.5514V16.2891C20.9099 15.8171 20.5287 15.4289 20.0651 15.4276Z"
                                                       fill="black"
                                                       fillOpacity="0.2"
                                                  />
                                                  <path
                                                       d="M19.4304 15.4276H15.1993V26.4129H19.4304C19.894 26.4116 20.2753 26.0234 20.2766 25.5514V16.2891C20.2753 15.8171 19.894 15.4289 19.4304 15.4276Z"
                                                       fill="black"
                                                       fillOpacity="0.2"
                                                  />
                                                  <path
                                                       d="M10.9682 15.4276H19.4304C19.8945 15.4276 20.2766 15.8166 20.2766 16.2891V24.9052C20.2766 25.3777 19.8946 25.7667 19.4304 25.7667H10.9682C10.5042 25.7667 10.1221 25.3777 10.1221 24.9052V16.2891C10.1221 15.8166 10.5042 15.4276 10.9682 15.4276Z"
                                                       fill="#107C41"
                                                  />
                                                  <path
                                                       d="M12.3646 23.8282L14.4182 20.5882L12.5372 17.3662H14.0509L15.0777 19.4255C15.1721 19.6209 15.237 19.7667 15.2724 19.8627H15.2857C15.3535 19.7066 15.4244 19.5548 15.4982 19.4075L16.5957 17.3662H17.9855L16.0558 20.5701L18.0341 23.8282H16.5558L15.3697 21.5661C15.3139 21.4699 15.2665 21.3688 15.2281 21.2642H15.2105C15.1758 21.3667 15.1298 21.4649 15.0732 21.5569L13.8517 23.8282H12.3646Z"
                                                       fill="#F7FAFF"
                                                  />
                                             </svg>
                                             <span className="">
                                                  Excel
                                             </span>
                                        </div>
                                        <svg
                                             width="63"
                                             height="37"
                                             viewBox="0 0 63 37"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <mask
                                                  id="path-1-inside-1_0_1"
                                                  fill="white"
                                             >
                                                  <path
                                                       fillRule="evenodd"
                                                       clipRule="evenodd"
                                                       d="M8.13326 8.53795C6.30672 3.83649 2.23015 1.73668 0 1.24319V0H8.13326H9.02921H54.2771H55.1897H62.7419V1.24319C60.6803 1.72982 56.9354 3.77836 55.1897 8.34318V12.4903C55.1897 25.4846 44.6558 36.0185 31.6615 36.0185C18.6672 36.0185 8.13326 25.4846 8.13326 12.4903V8.53795Z"
                                                  />
                                             </mask>
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M8.13326 8.53795C6.30672 3.83649 2.23015 1.73668 0 1.24319V0H8.13326H9.02921H54.2771H55.1897H62.7419V1.24319C60.6803 1.72982 56.9354 3.77836 55.1897 8.34318V12.4903C55.1897 25.4846 44.6558 36.0185 31.6615 36.0185C18.6672 36.0185 8.13326 25.4846 8.13326 12.4903V8.53795Z"
                                                  fill="#F7FAFF"
                                             />
                                             <path
                                                  d="M0 1.24319H-1V2.0461L-0.216055 2.21958L0 1.24319ZM8.13326 8.53795H9.13326V8.35052L9.06539 8.17581L8.13326 8.53795ZM0 0V-1H-1V0H0ZM62.7419 0H63.7419V-1H62.7419V0ZM62.7419 1.24319L62.9717 2.21645L63.7419 2.03464V1.24319H62.7419ZM55.1897 8.34318L54.2557 7.98598L54.1897 8.15849V8.34318H55.1897ZM-0.216055 2.21958C1.77015 2.65908 5.52329 4.58138 7.20114 8.90008L9.06539 8.17581C7.09014 3.0916 2.69016 0.814285 0.216055 0.266813L-0.216055 2.21958ZM-1 0V1.24319H1V0H-1ZM8.13326 -1H0V1H8.13326V-1ZM8.13326 1H9.02921V-1H8.13326V1ZM9.02921 1H54.2771V-1H9.02921V1ZM54.2771 1H55.1897V-1H54.2771V1ZM55.1897 1H62.7419V-1H55.1897V1ZM61.7419 0V1.24319H63.7419V0H61.7419ZM62.5122 0.269938C60.186 0.819007 56.1394 3.0603 54.2557 7.98598L56.1237 8.70038C57.7315 4.49642 61.1746 2.64063 62.9717 2.21645L62.5122 0.269938ZM54.1897 8.34318V12.4903H56.1897V8.34318H54.1897ZM54.1897 12.4903C54.1897 24.9323 44.1035 35.0185 31.6615 35.0185V37.0185C45.208 37.0185 56.1897 26.0369 56.1897 12.4903H54.1897ZM31.6615 35.0185C19.2195 35.0185 9.13326 24.9323 9.13326 12.4903H7.13326C7.13326 26.0369 18.1149 37.0185 31.6615 37.0185V35.0185ZM9.13326 12.4903V8.53795H7.13326V12.4903H9.13326Z"
                                                  fill="#F1F1F1"
                                                  mask="url(#path-1-inside-1_0_1)"
                                             />
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M24 18C24 19.8565 24.7375 21.637 26.0503 22.9497C27.363 24.2625 29.1435 25 31 25C32.8565 25 34.637 24.2625 35.9497 22.9497C37.2625 21.637 38 19.8565 38 18C38 16.1435 37.2625 14.363 35.9497 13.0503C34.637 11.7375 32.8565 11 31 11C29.1435 11 27.363 11.7375 26.0503 13.0503C24.7375 14.363 24 16.1435 24 18ZM39 18C39 20.1217 38.1571 22.1566 36.6569 23.6569C35.1566 25.1571 33.1217 26 31 26C28.8783 26 26.8434 25.1571 25.3431 23.6569C23.8429 22.1566 23 20.1217 23 18C23 15.8783 23.8429 13.8434 25.3431 12.3431C26.8434 10.8429 28.8783 10 31 10C33.1217 10 35.1566 10.8429 36.6569 12.3431C38.1571 13.8434 39 15.8783 39 18ZM31.5 14.5C31.5 14.3674 31.4473 14.2402 31.3536 14.1464C31.2598 14.0527 31.1326 14 31 14C30.8674 14 30.7402 14.0527 30.6464 14.1464C30.5527 14.2402 30.5 14.3674 30.5 14.5V20.293L28.354 18.146C28.2601 18.0521 28.1328 17.9994 28 17.9994C27.8672 17.9994 27.7399 18.0521 27.646 18.146C27.5521 18.2399 27.4994 18.3672 27.4994 18.5C27.4994 18.6328 27.5521 18.7601 27.646 18.854L30.646 21.854C30.6924 21.9006 30.7476 21.9375 30.8084 21.9627C30.8691 21.9879 30.9342 22.0009 31 22.0009C31.0658 22.0009 31.1309 21.9879 31.1916 21.9627C31.2524 21.9375 31.3076 21.9006 31.354 21.854L34.354 18.854C34.4479 18.7601 34.5006 18.6328 34.5006 18.5C34.5006 18.3672 34.4479 18.2399 34.354 18.146C34.2601 18.0521 34.1328 17.9994 34 17.9994C33.8672 17.9994 33.7399 18.0521 33.646 18.146L31.5 20.293V14.5Z"
                                                  fill="black"
                                             />
                                        </svg>
                                   </div>
                                   {selectedCourse ===
                                   "sql" ? (
                                        <div className="prices">
                                             <div className="price-plan-1">
                                                  <p className="plan-name">
                                                       {
                                                            siteText.sqlCard1Title
                                                       }
                                                  </p>
                                                  <h6 className="plan-price">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.sqlCard1Price
                                                       )}
                                                  </h6>
                                                  <p className="plan-description">
                                                       {
                                                            siteText.sqlCard1Description
                                                       }
                                                  </p>
                                                  <p className="plan-time">
                                                       {
                                                            siteText.sqlCard1Time
                                                       }
                                                  </p>
                                                  <span className="plan-banner">
                                                       {
                                                            siteText.sqlCard1Price
                                                       }
                                                  </span>
                                                  <div
                                                       className="start-here"
                                                       onClick={() => {
                                                            setViewModal(
                                                                 true
                                                            );
                                                            setSelectedPlan(
                                                                 siteText.sqlCard1Title
                                                            );
                                                            setSelectedPrice(
                                                                 siteText.sqlCard1Price
                                                            );
                                                       }}
                                                  >
                                                       <div className="start-here-div">
                                                            <div className="start-here-div-div1">
                                                                 Start
                                                                 here
                                                            </div>
                                                            <div className="start-here-div-div2">
                                                                 <svg
                                                                      width="18"
                                                                      height="18"
                                                                      viewBox="0 0 18 18"
                                                                      fill="none"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                 >
                                                                      <path
                                                                           d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                                           fill="black"
                                                                      />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="price-plan-2">
                                                  <p className="plan-name">
                                                       {
                                                            siteText.sqlCard2Title
                                                       }
                                                  </p>
                                                  <h6 className="plan-price">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.sqlCard2Price
                                                       )}
                                                  </h6>
                                                  <p className="plan-description">
                                                       {
                                                            siteText.sqlCard2Description
                                                       }
                                                  </p>
                                                  <p className="plan-time">
                                                       {
                                                            siteText.sqlCard2Time
                                                       }
                                                  </p>
                                                  <span className="plan-banner">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.sqlCard2Price
                                                       )}
                                                  </span>
                                                  <div
                                                       className="start-here"
                                                       onClick={() => {
                                                            setViewModal(
                                                                 true
                                                            );
                                                            setSelectedPlan(
                                                                 siteText.sqlCard2Title
                                                            );
                                                            setSelectedPrice(
                                                                 siteText.sqlCard2Price
                                                            );
                                                       }}
                                                  >
                                                       <div className="start-here-div">
                                                            <div className="start-here-div-div1">
                                                                 Start
                                                                 here
                                                            </div>
                                                            <div className="start-here-div-div2">
                                                                 <svg
                                                                      width="18"
                                                                      height="18"
                                                                      viewBox="0 0 18 18"
                                                                      fill="none"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                 >
                                                                      <path
                                                                           d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                                           fill="black"
                                                                      />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="price-plan-3">
                                                  <p className="plan-name">
                                                       {
                                                            siteText.sqlCard3Title
                                                       }
                                                  </p>
                                                  <h6 className="plan-price">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.sqlCard3Price
                                                       )}
                                                  </h6>
                                                  <p className="plan-description">
                                                       {
                                                            siteText.sqlCard3Description
                                                       }
                                                  </p>
                                                  <p className="plan-time">
                                                       {
                                                            siteText.sqlCard3Time
                                                       }
                                                  </p>
                                                  <span className="plan-banner">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.sqlCard3Price
                                                       )}
                                                  </span>
                                                  <div
                                                       className="start-here"
                                                       onClick={() => {
                                                            setViewModal(
                                                                 true
                                                            );
                                                            setSelectedPlan(
                                                                 siteText.sqlCard3Title
                                                            );
                                                            setSelectedPrice(
                                                                 siteText.sqlCard3Price
                                                            );
                                                       }}
                                                  >
                                                       <div className="start-here-div">
                                                            <div className="start-here-div-div1">
                                                                 Start
                                                                 here
                                                            </div>
                                                            <div className="start-here-div-div2">
                                                                 <svg
                                                                      width="18"
                                                                      height="18"
                                                                      viewBox="0 0 18 18"
                                                                      fill="none"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                 >
                                                                      <path
                                                                           d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                                           fill="black"
                                                                      />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ) : (
                                        <div className="excel-prices">
                                             <div className="price-plan-1">
                                                  <p className="plan-name">
                                                       {
                                                            siteText.excelCard1Title
                                                       }
                                                  </p>
                                                  <h6 className="plan-price">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.excelCard1Price
                                                       )}
                                                  </h6>
                                                  <p className="plan-description">
                                                       {
                                                            siteText.excelCard1Description
                                                       }
                                                  </p>
                                                  <p className="plan-time">
                                                       {
                                                            siteText.excelCard1Time
                                                       }
                                                  </p>
                                                  <span className="plan-banner">
                                                       {
                                                            siteText.excelCard1Price
                                                       }
                                                  </span>
                                                  <div
                                                       className="start-here"
                                                       onClick={() => {
                                                            setViewModal(
                                                                 true
                                                            );
                                                            setSelectedPlan(
                                                                 siteText.excelCard1Title
                                                            );
                                                            setSelectedPrice(
                                                                 siteText.excelCard1Price
                                                            );
                                                       }}
                                                  >
                                                       <div className="start-here-div">
                                                            <div className="start-here-div-div1">
                                                                 Start
                                                                 here
                                                            </div>
                                                            <div className="start-here-div-div2">
                                                                 <svg
                                                                      width="18"
                                                                      height="18"
                                                                      viewBox="0 0 18 18"
                                                                      fill="none"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                 >
                                                                      <path
                                                                           d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                                           fill="black"
                                                                      />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="price-plan-2">
                                                  <p className="plan-name">
                                                       {
                                                            siteText.excelCard2Title
                                                       }
                                                  </p>
                                                  <h6 className="plan-price">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.excelCard2Price
                                                       )}
                                                  </h6>
                                                  <p className="plan-description">
                                                       {
                                                            siteText.excelCard2Description
                                                       }
                                                  </p>
                                                  <p className="plan-time">
                                                       {
                                                            siteText.excelCard2Time
                                                       }
                                                  </p>
                                                  <span className="plan-banner">
                                                       ₦
                                                       {new Intl.NumberFormat(
                                                            "en-US"
                                                       ).format(
                                                            siteText.excelCard2Price
                                                       )}
                                                  </span>
                                                  <div
                                                       className="start-here"
                                                       onClick={() => {
                                                            setViewModal(
                                                                 true
                                                            );
                                                            setSelectedPlan(
                                                                 siteText.excelCard2Title
                                                            );
                                                            setSelectedPrice(
                                                                 siteText.excelCard2Price
                                                            );
                                                       }}
                                                  >
                                                       <div className="start-here-div">
                                                            <div className="start-here-div-div1">
                                                                 Start
                                                                 here
                                                            </div>
                                                            <div className="start-here-div-div2">
                                                                 <svg
                                                                      width="18"
                                                                      height="18"
                                                                      viewBox="0 0 18 18"
                                                                      fill="none"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                 >
                                                                      <path
                                                                           d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                                           fill="black"
                                                                      />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </div>
                         </div>
                    </section>

                    {/* join our slack */}
                    <section className="fireside-chat">
                         <div className="join-our-slack-grid">
                              <div className="join-our-slack-grid-div1">
                                   <img
                                        src={
                                             SlackImage
                                        }
                                        alt=""
                                        className=""
                                   />
                              </div>
                              <div
                                   className="join-our-slack-grid-div2"
                                   id="fireside-section"
                              >
                                   <div className="join-our-slack-text">
                                        <span className="">
                                             {
                                                  siteText.firesideText1
                                             }
                                        </span>
                                        <h4 className="">
                                             {
                                                  siteText.firesideText2
                                             }
                                        </h4>
                                        <p className="">
                                             {
                                                  siteText.firesideText3part1
                                             }
                                             <br />
                                             <strong>
                                                  {
                                                       siteText.firesideText3part2
                                                  }
                                             </strong>
                                        </p>
                                   </div>
                                   <div
                                        className="join-slack-button"
                                        onClick={() => {
                                             setViewModal(
                                                  true
                                             );
                                             setSelectedPlan(
                                                  "FIRESIDE"
                                             );
                                             setSelectedPrice(
                                                  "Free"
                                             );
                                        }}
                                   >
                                        <div className="join-slack-button-div1">
                                             REGISTER
                                             HERE
                                        </div>
                                        <div className="join-slack-button-div2">
                                             <svg
                                                  width="18"
                                                  height="18"
                                                  viewBox="0 0 18 18"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                       fill="#FDD961"
                                                  />
                                             </svg>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section className="join-our-slack">
                         <div className="join-our-slack-grid">
                              <div className="join-our-slack-grid-div1">
                                   <div className="slack-logo-div">
                                        <svg
                                             width="45"
                                             height="45"
                                             viewBox="0 0 45 45"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M16.2165 0C13.7716 0.00180343 11.7929 1.98197 11.7947 4.42201C11.7929 6.86206 13.7734 8.84223 16.2183 8.84403H20.642V4.42382C20.6438 1.98378 18.6633 0.00360686 16.2165 0C16.2183 0 16.2183 0 16.2165 0V0ZM16.2165 11.7944H4.42377C1.97884 11.7962 -0.00168003 13.7764 0.000127009 16.2165C-0.00348708 18.6565 1.97703 20.6367 4.42196 20.6403H16.2165C18.6615 20.6385 20.642 18.6583 20.6402 16.2183C20.642 13.7764 18.6615 11.7962 16.2165 11.7944Z"
                                                  fill="#36C5F0"
                                             />
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M44.2293 16.2165C44.2311 13.7764 42.2506 11.7962 39.8056 11.7944C37.3607 11.7962 35.3802 13.7764 35.382 16.2165V20.6403H39.8056C42.2506 20.6385 44.2311 18.6583 44.2293 16.2165ZM32.4347 16.2165V4.42201C32.4365 1.98378 30.4578 0.00360686 28.0129 0C25.5679 0.00180343 23.5874 1.98197 23.5892 4.42201V16.2165C23.5856 18.6565 25.5661 20.6367 28.0111 20.6403C30.456 20.6385 32.4365 18.6583 32.4347 16.2165Z"
                                                  fill="#2EB67D"
                                             />
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M28.011 44.2292C30.456 44.2274 32.4365 42.2473 32.4347 39.8072C32.4365 37.3672 30.456 35.387 28.011 35.3852H23.5874V39.8072C23.5856 42.2455 25.5661 44.2256 28.011 44.2292ZM28.011 32.433H39.8056C42.2505 32.4312 44.2311 30.451 44.2292 28.011C44.2329 25.5709 42.2523 23.5908 39.8074 23.5872H28.0128C25.5679 23.589 23.5874 25.5691 23.5892 28.0092C23.5874 30.451 25.5661 32.4312 28.011 32.433Z"
                                                  fill="#ECB22E"
                                             />
                                             <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.000123306 28.0109C-0.00168374 30.4509 1.97883 32.4311 4.42376 32.4329C6.86869 32.4311 8.84921 30.4509 8.8474 28.0109V23.5889H4.42376C1.97883 23.5907 -0.00168374 25.5708 0.000123306 28.0109ZM11.7947 28.0109V39.8053C11.7911 42.2454 13.7716 44.2256 16.2165 44.2292C18.6615 44.2274 20.642 42.2472 20.6402 39.8072V28.0145C20.6438 25.5744 18.6633 23.5943 16.2183 23.5907C13.7716 23.5907 11.7929 25.5708 11.7947 28.0109C11.7947 28.0109 11.7947 28.0127 11.7947 28.0109Z"
                                                  fill="#E01E5A"
                                             />
                                        </svg>
                                   </div>
                                   <div className="join-our-slack-text">
                                        <span className="">
                                             {
                                                  siteText.joinOurCommunityText1
                                             }
                                        </span>
                                        <h4 className="">
                                             {
                                                  siteText.joinOurCommunityText2
                                             }
                                        </h4>
                                        <p className="">
                                             {
                                                  siteText.joinOurCommunityText3part1
                                             }
                                             <br />
                                             <strong>
                                                  {
                                                       siteText.joinOurCommunityText3part2
                                                  }
                                             </strong>
                                        </p>
                                   </div>
                                   <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://join.slack.com/t/gloedworkspace/shared_invite/zt-yvcwllf9-7Hab2o2DCJl7jiifv78lvQ"
                                        className="join-slack"
                                   >
                                        <div className="join-slack-button">
                                             <div className="join-slack-button-div1">
                                                  JOIN
                                                  SLACK
                                                  COMMUNITY
                                             </div>
                                             <div className="join-slack-button-div2">
                                                  <svg
                                                       width="18"
                                                       height="18"
                                                       viewBox="0 0 18 18"
                                                       fill="none"
                                                       xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                       <path
                                                            d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                            fill="#FDD961"
                                                       />
                                                  </svg>
                                             </div>
                                        </div>
                                   </a>
                              </div>
                              <div className="join-our-slack-grid-div2">
                                   <img
                                        src={
                                             SlackImage
                                        }
                                        alt=""
                                        className=""
                                   />
                              </div>
                         </div>
                    </section>

                    <section
                         className="contact-us"
                         id="contact-us"
                    >
                         <div className="contact-us-grid">
                              <h2 className="contact-us-heading">
                                   Contact
                                   Us
                              </h2>
                              <div className="contact-us-buttons">
                                   <a
                                        href="mailto:hi@gloed.co"
                                        className="contact-us-email"
                                   >
                                        <div className="contact-us-email-div1">
                                             EMAIL
                                        </div>
                                        <div class="contact-us-email-div2">
                                             <svg
                                                  width="18"
                                                  height="18"
                                                  viewBox="0 0 18 18"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                       fill="#FDD961"
                                                  ></path>
                                             </svg>
                                        </div>
                                   </a>
                                   <a
                                        href=" https://wa.me/message/JENLEHZUC46SK1"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-us-whatsapp"
                                   >
                                        <div className="contact-us-whatsapp-div1">
                                             WHATSAPP
                                        </div>
                                        <div class="contact-us-whatsapp-div2">
                                             <svg
                                                  width="18"
                                                  height="18"
                                                  viewBox="0 0 18 18"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                       fill="#FDD961"
                                                  ></path>
                                             </svg>
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </section>

                    {/* about us and testimonials */}
                    <section className="about-us-and-testimonials">
                         {/* about us */}
                         <section
                              id="about-us"
                              className="about-us"
                         >
                              <div className="about-us-grid">
                                   <div className="about-us-grid-div1">
                                        <img
                                             src={
                                                  AboutUsImage
                                             }
                                             alt=""
                                             className=""
                                        />
                                   </div>
                                   <div className="about-us-grid-div2">
                                        <div className="about-us-grid-text">
                                             <span className="">
                                                  {
                                                       siteText.aboutUsText1
                                                  }
                                             </span>
                                             <h4 className="">
                                                  {
                                                       siteText.aboutUsText2
                                                  }
                                             </h4>
                                             <p className="">
                                                  {
                                                       siteText.aboutUsText3
                                                  }
                                             </p>
                                        </div>
                                        <div className="people-trained">
                                             <div className="">
                                                  <span className="main-text">
                                                       {
                                                            siteText.experienceText1
                                                       }
                                                  </span>
                                                  <span className="sub-text">
                                                       {
                                                            siteText.experienceText2
                                                       }
                                                  </span>
                                             </div>
                                             {/* <div className="">
                                    <span className="main-text">{siteText.trainedText1}</span>
                                    <span className="sub-text">{siteText.trainedText2}</span>
                                </div> */}
                                        </div>
                                        <a
                                             target="_blank"
                                             rel="noreferrer"
                                             href="https://join.slack.com/t/gloedworkspace/shared_invite/zt-yvcwllf9-7Hab2o2DCJl7jiifv78lvQ"
                                             className="join-slack"
                                        >
                                             <div className="join-slack-button">
                                                  <div className="join-slack-button-div1">
                                                       JOIN
                                                       SLACK
                                                       COMMUNITY
                                                  </div>
                                                  <div className="join-slack-button-div2">
                                                       <svg
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                       >
                                                            <path
                                                                 d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                                                                 fill="#FDD961"
                                                            />
                                                       </svg>
                                                  </div>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         </section>
                         {/* testimonials */}
                         <section
                              id="testimonials"
                              className="testimonials"
                         >
                              <h2 className="feedback ">
                                   feedback
                              </h2>
                              <h4 className="testimonials-text">
                                   Testimonials
                              </h4>
                              {/* <div className="testimonials-carousel">
                        <div className="carousel-icon-left">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" transform="rotate(-180 18 18)" fill="#FBFCEC" fill-opacity="0.44" stroke="#BCBCBC" />
                                <path d="M19.574 24L21.0011 22.59L16.3655 18L21.0011 13.41L19.574 12L13.5011 18L19.574 24Z" fill="#BCBCBC" />
                            </svg>
                        </div>
                        <div className="carousel-icon-right">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" fill="#FBFCEC" fill-opacity="0.44" stroke="black" />
                                <path d="M16.426 12L14.9988 13.41L19.6345 18L14.9988 22.59L16.426 24L22.4988 18L16.426 12Z" fill="black" />
                            </svg>
                        </div>
                        <div className="carousel-icon-bottom">
                            <svg width="67" height="7" viewBox="0 0 67 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="38.1061" height="6.92838" rx="3.46419" fill="black" />
                                <rect x="45.5667" width="6.64892" height="6.64892" rx="3.32446" fill="black" />
                                <rect x="59.5272" width="6.64892" height="6.64892" rx="3.32446" fill="black" />
                            </svg>
                        </div>
                        <ul id="responsive" className="testimonial-card-section">
                            <li className="testimonial-card item-a">
                                <p className="testimonial-card-text">
                                    {siteText.testimonialCard1Text}
                                </p>
                                <div className="testimonail-persona">
                                    <img src={PersonaImg} alt="" className="" />
                                    <div className="testimonial-persona-text">
                                        <h6 className="testimonial-persona-name">{siteText.testimonialCard1Name}</h6>
                                        <span className="testimonial-persona-name-credentials">{siteText.testimonialCard1Position}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="testimonial-card item-b">
                                <p className="testimonial-card-text">
                                    {siteText.testimonialCard2Text}
                                </p>
                                <div className="testimonail-persona">
                                    <img src={PersonaImg} alt="" className="" />
                                    <div className="testimonial-persona-text">
                                        <h6 className="testimonial-persona-name">{siteText.testimonialCard2Name}</h6>
                                        <span className="testimonial-persona-name-credentials">{siteText.testimonialCard2Position}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div> */}
                              <Testimonials />
                         </section>
                    </section>
                    {/* footer */}
                    <footer>
                         <img
                              src={
                                   FoooterDesign
                              }
                              alt=""
                         />
                         <div className="footer-div">
                              <div className="footer-section1">
                                   <div className="logo-social">
                                        <div className="logo">
                                             <img
                                                  src={
                                                       Logo2
                                                  }
                                                  alt=""
                                                  className=""
                                             />
                                        </div>
                                        <div className="socials">
                                             {/* <a href="mailto: contact@gloed.co" className="">
                                    <div className=" email-icon">
                                        <AtSign size={14} className="icon"/>
                                    </div>
                                </a> */}
                                             <a
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  href="https://gloedworkspac.slack.com/join/shared_invite/zt-yvcwllf9-7Hab2o2DCJl7jiifv78lvQ#/shared-invite/email"
                                             >
                                                  <img
                                                       src={
                                                            SocialSlack
                                                       }
                                                       alt=""
                                                       className=""
                                                  />
                                             </a>
                                             <a
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  href="https://www.linkedin.com/company/gloed-co"
                                             >
                                                  <img
                                                       src={
                                                            SocialLinkedIn
                                                       }
                                                       alt=""
                                                       className=""
                                                  />
                                             </a>
                                             <a
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  href="https://twitter.com/gloed_co"
                                             >
                                                  <img
                                                       src={
                                                            SocialTwitter
                                                       }
                                                       alt=""
                                                       className=""
                                                  />
                                             </a>
                                             <a
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  href="https://www.instagram.com/gloed_co/"
                                             >
                                                  <img
                                                       src={
                                                            SocialInstagram
                                                       }
                                                       alt=""
                                                       className=""
                                                  />
                                             </a>
                                        </div>
                                   </div>
                                   <div className="footer-menu">
                                        <ul className="footer-menu2">
                                             <li className="">
                                                  Courses
                                             </li>
                                             <li className="">
                                                  <span
                                                       onClick={() => {
                                                            setSelectedCourse(
                                                                 "sql"
                                                            );
                                                            gotoPricing();
                                                       }}
                                                       className=""
                                                  >
                                                       SQL
                                                  </span>
                                             </li>
                                             <li className="">
                                                  <span
                                                       onClick={() => {
                                                            setSelectedCourse(
                                                                 "excel"
                                                            );
                                                            gotoPricing();
                                                       }}
                                                       className=""
                                                  >
                                                       Excel
                                                  </span>

                                                  .
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="footer-section2">
                                   <Link
                                        className="privacy-policy"
                                        to="/privacy-policy"
                                   >
                                        Privacy
                                        Policy
                                   </Link>
                                   <span className="copyright">
                                        ©{" "}
                                        <strong>
                                             2021{" "}
                                        </strong>{" "}
                                        All
                                        rights
                                        Reserved
                                   </span>
                                   <span className="company-name">
                                        Gloed.co
                                   </span>
                              </div>
                         </div>
                    </footer>

                    {viewModal ? (
                         <PaymentForm
                              setViewModal={
                                   setViewModal
                              }
                              siteText={
                                   siteText
                              }
                              selectedPlan={
                                   selectedPlan
                              }
                              selectedPrice={
                                   selectedPrice
                              }
                              selectedCourse={
                                   selectedCourse
                              }
                         />
                    ) : null}
               </>
          );
     };

export default HomepageScreen;
