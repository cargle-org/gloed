import React, {
     useEffect,
     useState,
} from "react";
import "../css/PaymentForm.css";
import CloseIcon from "../images/close.svg";
import CaretDown from "../images/caret-down.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { XCircle } from "react-feather";
import { Clock } from "../images/Clock";
import TimeCard from "./TimeCard";
import { Icon } from "@iconify/react";

const PaymentForm =
     ({
          setViewModal,
          siteText,
          selectedPlan,
          selectedPrice,
          setSelectedPrice,
          selectedCourse,
     }) => {
          const history =
               useHistory();
          const [
               selectedPaymentType,
               setSelectedPaymentType,
          ] =
               useState(
                    "Bank Transfer"
               );
          const [
               showDropdown,
               setShowDropdown,
          ] =
               useState(
                    false
               );
          const [
               registrationStatus,
               setRegistrationStatus,
          ] =
               useState(
                    null
               );
          const [
               name,
               setName,
          ] =
               useState(
                    ""
               );
          const [
               email,
               setEmail,
          ] =
               useState(
                    ""
               );
          const [
               phone,
               setPhone,
          ] =
               useState(
                    ""
               );
          const [
               scheduleType,
               setScheduledType,
          ] =
               useState(
                    ""
               );
          const [
               meetingTime,
               setMeetingTime,
          ] =
               useState(
                    ""
               );
          const [
               comments,
               setComments,
          ] =
               useState(
                    ""
               );
          const [
               selectedGroup,
               setSelectedGroup,
          ] =
               useState(
                    null
               );
          const [
               planDates,
               setPlanDates,
          ] =
               useState(
                    []
               );
          const [
               planTime,
               setPlanTime,
          ] =
               useState(
                    ""
               );
          const [
               preferredclass,
               setPreferredClass,
          ] =
               useState(
                    selectedCourse
               );
          const [
               isLoading,
               setIsLoading,
          ] =
               useState(
                    false
               );
               const [classPrice, setClassPrice]= useState(selectedPrice);

          const CloseModal =
               (
                    e
               ) => {
                    if (
                         e.target !==
                              document.querySelector(
                                   ".payment-form"
                              ) &&
                         document
                              .querySelector(
                                   ".payment-form"
                              )
                              .contains(
                                   e.target
                              ) ===
                              false
                    ) {
                         setViewModal(
                              false
                         );
                    }
               };

          const onClickProceed =
               (
                    e
               ) => {
                    e.preventDefault();
                    const data =
                         {
                              fullName:
                                   name,
                              email: email,
                              meetingType:
                                   scheduleType,
                              dateTime:
                                   meetingTime,
                              amount: classPrice,
                              phone: phone,
                              type: selectedPlan,
                              course: preferredclass,
                              comment:
                                   comments,
                         };
                         setIsLoading(true)
                    if (selectedPrice === "Free") {
                        axios.post("https://gloed-api.onrender.com/api/utils/session/book-free-unauth", data)
                            .then(response => {
                              if(response.data.success === true){
                                     setIsLoading(
                                          false
                                     );
                                     setRegistrationStatus(
                                          "success"
                                     );
                              } else {
                                     setIsLoading(false);
                                setRegistrationStatus("failed")
                              }
                            })
                            .catch(err => {
                                console.error(err.response)
                                      setIsLoading(false);
                                setRegistrationStatus("fail")
                            })
                        return
                    }
                   if (selectedPrice !== 'Free'){
                     axios.post(
                          "https://gloed-api.onrender.com/api/utils/session/book-paid-unauth",
                          data
                     )
                          .then(
                               (
                                    response
                               ) => {
                                    setIsLoading(false);
                                    window.open(
                                         response.data.data.url
                                    );
                               }
                          )
                          .catch(
                               (
                                    err
                               ) => {
                                  if (err.response.data.data.success === false){
                                      setIsLoading(
                                           false
                                      );
                                      setRegistrationStatus(
                                           "fail"
                                      );
                                  }
                               }
                          );
                   }
               };

          useEffect(() => {
               if (
                    document.querySelector(
                         "#registerButton"
                    )
               ) {
                    if (
                         email !==
                              "" &&
                         name !==
                              "" &&
                         scheduleType !==
                              "" &&
                         meetingTime !==
                              ""
                    ) {
                         document.querySelector(
                              "#registerButton"
                         ).disabled = false;
                    } else {
                         document.querySelector(
                              "#registerButton"
                         ).disabled = true;
                    }
               }

               if (
                    selectedPlan ===
                    "BASIC LEVEL"
               ) {
                    setPlanDates(
                         [
                              "Feb 11, 2023",
                              " Mar 11, 2023",
                              "Apr 8, 2023",
                              "May 13, 2023",
                         ]
                    );
               } else if (
                    selectedPlan ===
                    "INTERMEDIATE LEVEL"
               ) {
                    setPlanDates(
                         [
                              "Feb 18, 2023",
                              " Mar 18, 2023",
                              "Apr 15, 2023",
                              "May 20, 2023",
                         ]
                    );
               } else if (
                    selectedPlan ===
                    "FIRESIDE"
               ) {
                    setPlanDates(
                         [
                              "Jan 28, 2023",
                              " Feb 25, 2023",
                              "Mar 25, 2023",
                              "Apr 29, 2023",
                         ]
                    );
               } else {
                    setPlanDates(
                         []
                    );
               }

               if (
                    preferredclass ===
                    "sql"
               ) {
                    setPlanTime(
                         "8 PM to 9 PM"
                    );
               } else {
                    setPlanTime(
                         "7 PM to 8 PM"
                    );
               }
          }, [
               email,
               name,
               scheduleType,
               meetingTime,
               selectedPlan,
               preferredclass,
          ]);


          const OneOnOnePrice = selectedPrice * 3;

          return (
               <div
                    className="payment-form-background"
                    onClick={
                         CloseModal
                    }
               >
                    {/* <img style={{ cursor: "pointer" }} src={CloseIcon} alt="" className="close-icon"
                onClick={() => { setViewModal(false) }} /> */}
                    {/* <XCircle className='close-icon' size={48} onClick={() => {setViewModal(false)}}/> */}
                    <div className="payment-form">
                         {registrationStatus !==
                         null ? (
                              <div className="user-registered">
                                   {registrationStatus ===
                                   "success" ? (
                                        <h2 className="">
                                             {" "}
                                             Success.
                                             For
                                             more
                                             information,
                                             join
                                             our
                                             slack
                                             channel.
                                        </h2>
                                   ) : (
                                        <h2 className="">
                                             {" "}
                                             Failed.{" "}
                                             <br />
                                             Please
                                             try
                                             again
                                             later.{" "}
                                             <br />
                                             For
                                             more
                                             information,
                                             join
                                             our
                                             slack
                                             channel.
                                        </h2>
                                   )}
                                   <p></p>

                                   <button
                                        type="submit"
                                        className="close-button"
                                        onClick={() => {
                                             setViewModal(
                                                  false
                                             );
                                             window.location.href =
                                                  "https://join.slack.com/t/gloedworkspace/shared_invite/zt-yvcwllf9-7Hab2o2DCJl7jiifv78lvQ";
                                        }}
                                   >
                                        Continue
                                        to
                                        slack
                                   </button>
                                   <button
                                        type="button"
                                        className="close-button1"
                                        onClick={() => {
                                             setViewModal(
                                                  false
                                             );
                                        }}
                                   >
                                        Close
                                   </button>
                              </div>
                         ) : (
                              <div className="">
                                   <h2 className="title">
                                        Registration
                                        Form
                                   </h2>
                                   <div className="payment-desc-div">
                                        <p className="payment-plan">
                                             Plan:{" "}
                                             {
                                                  selectedPlan
                                             }
                                        </p>
                                        <p className="payment-plan">
                                             {selectedPlan !==
                                                  "ADVANCED LEVEL" && (
                                                  <>
                                                       Price:
                                                       {selectedPrice ===
                                                       "Free"
                                                            ? selectedPrice
                                                            : "₦" +
                                                              new Intl.NumberFormat(
                                                                   "en-US"
                                                              ).format(
                                                                   classPrice
                                                              )}
                                                  </>
                                             )}
                                             {selectedPlan ===
                                                  "ADVANCED LEVEL" && (
                                                  <>
                                                       Price:
                                                       ₦30,000
                                                  </>
                                             )}
                                        </p>
                                   </div>

                                   <form
                                        action=""
                                        className="pay-form"
                                   >
                                        <div className="form-wrapper">
                                             <div className="input-group">
                                                  <label htmlFor="name">
                                                       Full
                                                       Name:
                                                  </label>
                                                  <input
                                                       type="text"
                                                       name="name"
                                                       id=""
                                                       placeholder="Full Name"
                                                       onChange={(
                                                            e
                                                       ) => {
                                                            setName(
                                                                 e
                                                                      .target
                                                                      .value
                                                            );
                                                       }}
                                                  />
                                             </div>
                                             <div className="input-group">
                                                  <label htmlFor="email">
                                                       Email:
                                                  </label>
                                                  <input
                                                       type="email"
                                                       name="email"
                                                       id="email"
                                                       placeholder="Email"
                                                       onChange={(
                                                            e
                                                       ) => {
                                                            setEmail(
                                                                 e
                                                                      .target
                                                                      .value
                                                            );
                                                       }}
                                                  />
                                             </div>
                                             <div className="input-group">
                                                  <label htmlFor="phone">
                                                       Phone
                                                       Number:
                                                  </label>
                                                  <input
                                                       type="text"
                                                       name="phone"
                                                       id="phone"
                                                       placeholder="Phone Number"
                                                       onChange={(
                                                            e
                                                       ) => {
                                                            setPhone(
                                                                 e
                                                                      .target
                                                                      .value
                                                            );
                                                       }}
                                                  />
                                             </div>
                                             {selectedPlan ===
                                                  "FIRESIDE" && (
                                                  <div className="radio-group">
                                                       <label
                                                            className="schedule-label"
                                                            htmlFor="schedule"
                                                       >
                                                            Preferred
                                                            Class:
                                                       </label>
                                                       <input
                                                            type="radio"
                                                            id="sql"
                                                            name="class"
                                                            value="sql"
                                                            onChange={(
                                                                 e
                                                            ) => {
                                                                 setPreferredClass(
                                                                      e
                                                                           .target
                                                                           .value
                                                                 );
                                                            }}
                                                       />

                                                        {" "}
                                                       <label
                                                            className="radio-label scheduled"
                                                            htmlFor="sql"
                                                       >
                                                            SQL
                                                       </label>
                                                       <input
                                                            type="radio"
                                                            id="excel"
                                                            name="class"
                                                            value="excel"
                                                            onChange={(
                                                                 e
                                                            ) => {
                                                                 setPreferredClass(
                                                                      e
                                                                           .target
                                                                           .value
                                                                 );
                                                            }}
                                                       />

                                                        {" "}
                                                       <label
                                                            className="radio-label"
                                                            htmlFor="excel"
                                                       >
                                                            Excel
                                                       </label>
                                                  </div>
                                             )}
                                             <div className="radio-group">
                                                  <label
                                                       className="schedule-label"
                                                       htmlFor="schedule"
                                                  >
                                                       Schedule
                                                       Type:
                                                  </label>
                                                  {selectedPlan ===
                                                  "ADVANCED LEVEL" ? (
                                                       ""
                                                  ) : (
                                                       <>
                                                            {" "}
                                                            <input
                                                                 type="radio"
                                                                 id="schedule"
                                                                 name="scheduleType"
                                                                 value="scheduled"
                                                                 onChange={(
                                                                      e
                                                                 ) => {
                                                                      setScheduledType(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      );
                                                                      setClassPrice(
                                                                           selectedPrice
                                                                      );
                                                                 }}
                                                            />

                                                             {" "}
                                                            <label
                                                                 className="radio-label scheduled"
                                                                 htmlFor="html"
                                                            >
                                                                 Group
                                                            </label>
                                                       </>
                                                  )}

                                                   {" "}
                                                  {selectedPlan ===
                                                  "FIRESIDE" ? (
                                                       ""
                                                  ) : (
                                                       <>
                                                            {" "}
                                                            <input
                                                                 type="radio"
                                                                 id="one-on-one"
                                                                 name="scheduleType"
                                                                 value="one-on-one"
                                                                 onChange={(
                                                                      e
                                                                 ) => {
                                                                      setScheduledType(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      );
                                                                      setClassPrice(
                                                                           OneOnOnePrice
                                                                      );
                                                                 }}
                                                            />

                                                             {" "}
                                                            <label
                                                                 className="radio-label"
                                                                 htmlFor="css"
                                                            >
                                                                 One
                                                                 on
                                                                 One
                                                            </label>{" "}
                                                       </>
                                                  )}
                                             </div>

                                             {scheduleType ===
                                                  "one-on-one" && (
                                                  <div className="input-group">
                                                       <label htmlFor="name">
                                                            Select
                                                            a
                                                            date/time:
                                                       </label>
                                                       <input
                                                            type="datetime-local"
                                                            id="meeting-time"
                                                            name="meetingTime"
                                                            min="2023-01-01T00:00"
                                                            max="2030-12-31T00:00"
                                                            onChange={(
                                                                 e
                                                            ) => {
                                                                 setMeetingTime(
                                                                      e
                                                                           .target
                                                                           .value
                                                                 );
                                                            }}
                                                       />
                                                  </div>
                                             )}
                                             {scheduleType ===
                                                  "scheduled" && (
                                                  <div className="input-group">
                                                       <label htmlFor="name">
                                                            Select
                                                            a
                                                            date/time:
                                                       </label>
                                                       <div className="scheduled-times">
                                                            {planDates &&
                                                                 planDates.map(
                                                                      (
                                                                           planDate,
                                                                           i
                                                                      ) => (
                                                                           <TimeCard
                                                                                onClick={() => {
                                                                                     setSelectedGroup(
                                                                                          i
                                                                                     );
                                                                                     setMeetingTime(
                                                                                          planDate +
                                                                                               planTime
                                                                                     );
                                                                                }}
                                                                                key={
                                                                                     i
                                                                                }
                                                                                index={
                                                                                     i
                                                                                }
                                                                                setSelectedGroup={
                                                                                     setSelectedGroup
                                                                                }
                                                                                selectedGroup={
                                                                                     selectedGroup
                                                                                }
                                                                                selectedCourse={
                                                                                     selectedCourse
                                                                                }
                                                                                selectedPlan={
                                                                                     selectedPlan
                                                                                }
                                                                                date={
                                                                                     planDate
                                                                                }
                                                                                time={
                                                                                     planTime
                                                                                }
                                                                           />
                                                                      )
                                                                 )}
                                                       </div>
                                                  </div>
                                             )}

                                             <div className="input-group">
                                                  <label htmlFor="comments">
                                                       Comments:
                                                  </label>
                                                  <textarea
                                                       type="text"
                                                       name="comments"
                                                       id="comments"
                                                       placeholder="Enter your message here"
                                                       onChange={(
                                                            e
                                                       ) => {
                                                            setComments(
                                                                 e
                                                                      .target
                                                                      .value
                                                            );
                                                       }}
                                                  />
                                             </div>
                                        </div>

                                        {isLoading ? (
                                             <button
                                                  type="submit"
                                                  id="registerButton"
                                                  className="register-button loading-button"
                                                  onClick={
                                                       onClickProceed
                                                  }
                                             >
                                                  <Icon
                                                       icon="eos-icons:three-dots-loading"
                                                       color="white"
                                                       width="43"
                                                  />
                                             </button>
                                        ) : (
                                             <button
                                                  type="submit"
                                                  id="registerButton"
                                                  className="register-button"
                                                  onClick={
                                                       onClickProceed
                                                  }
                                             >
                                                  {selectedPrice ===
                                                  "Free"
                                                       ? "BOOK NOW"
                                                       : "PROCEED TO PAY"}
                                             </button>
                                        )}
                                        <button
                                             type="button"
                                             className="close-button1"
                                             onClick={() => {
                                                  setViewModal(
                                                       false
                                                  );
                                             }}
                                        >
                                             CLOSE
                                        </button>
                                   </form>
                              </div>
                         )}
                    </div>
               </div>
          );
     };

export default PaymentForm;
