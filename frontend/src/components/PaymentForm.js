import React, { useEffect, useState } from 'react'
import "../css/PaymentForm.css"
import CloseIcon from '../images/close.svg'
import CaretDown from '../images/caret-down.svg'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { XCircle } from 'react-feather'



const PaymentForm = ({ setViewModal, siteText, selectedPlan, selectedPrice }) => {
    const history = useHistory()
    const [selectedPaymentType, setSelectedPaymentType] = useState("Bank Transfer")
    const [showDropdown, setShowDropdown] = useState(false)
    const [registrationStatus, setRegistrationStatus] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNum, setPhoneNum] = useState("")


    const CloseModal = (e) => {
        if (e.target !== document.querySelector(".payment-form") && document.querySelector(".payment-form").contains(e.target) === false) {
            setViewModal(false)
        }
    }

    const onClickProceed = (e) => {
        e.preventDefault()
        const data = {
            fullName: name,
            phoneNum: phoneNum,
            email: email,
            price: selectedPrice,
            plan: selectedPlan
        }

        if (selectedPrice === "Free") {
            axios.post("https://gloed-server.herokuapp.com/api/addUser", data)
                .then(response => {
                    console.log(response.data)
                    setRegistrationStatus(true)
                })
                .catch(err => {
                    console.error(err.response)
                })
            return
        }
        axios.post("https://gloed-server.herokuapp.com/api/createTransaction", data)
            .then(response => {
                console.log(response)
                setRegistrationStatus(true)
                window.open(response.data.response);
                //history.push()
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        if (document.querySelector("#registerButton")) {
            if (email !== "" && phoneNum !== "" && name !== "") {
                document.querySelector("#registerButton").disabled = false
            } else {
                document.querySelector("#registerButton").disabled = true
            }
        }

    }, [email, phoneNum, name])
    return (
        <div className="payment-form-background" onClick={CloseModal}>
            {/* <img style={{ cursor: "pointer" }} src={CloseIcon} alt="" className="close-icon"
                onClick={() => { setViewModal(false) }} /> */}
            {/* <XCircle className='close-icon' size={48} onClick={() => {setViewModal(false)}}/> */}
            <div className="payment-form">
                {registrationStatus ?
                    <div className='user-registered'>
                        <h2 className=""> Success. For more information, join our slack channel.</h2>
                        <p></p>
                        <button type='submit' className="close-button"
                            onClick={() => { setViewModal(false); window.location.href = "https://join.slack.com/t/gloedworkspace/shared_invite/zt-yvcwllf9-7Hab2o2DCJl7jiifv78lvQ" }}>Continue to slack</button>
                        <button type='button' className="close-button1"
                            onClick={() => { setViewModal(false) }}>Close</button>
                    </div>
                    : <div className="">
                        <h2 className="title">Contact Form</h2>
                        <div className="payment-desc-div">
                            <p className="payment-plan">Send us your details</p>
                            <p className="payment-plan"></p>
                        </div>

                        <form action="" className="">
                            <input type="text" name="name" id="" placeholder='Full Name'
                                onChange={(e) => { setName(e.target.value) }} />
                            <input type="email" name="email" id="" placeholder='Email'
                                onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="text" name="phoneNum" placeholder='Number'
                                onChange={(e) => { setPhoneNum(e.target.value) }} />
                            <button type='submit' id="registerButton" className="register-button"
                                onClick={onClickProceed}>{selectedPrice === "Free" ? "Continue" : "Continue to checkout"}</button>
                            <button type='button' className="close-button1"
                                onClick={() => { setViewModal(false) }}>Close</button>
                        </form>
                    </div>
                }

            </div>
        </div>
    )
}

export default PaymentForm
