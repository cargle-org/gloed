import React, { useState } from 'react'
import "../css/PaymentForm.css"
import CloseIcon from '../images/close.svg'
import CaretDown from '../images/caret-down.svg'

const PaymentForm = ({ setViewModal, siteText, selectedPlan }) => {
    const [selectedPaymentType, setSelectedPaymentType] = useState("Bank Transfer")
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div className="payment-form-background">
            <img style={{ cursor: "pointer" }} src={CloseIcon} alt="" className="close-icon"
                onClick={() => { setViewModal(false) }} />
            <div className="payment-form">
                <div className="">
                    <h2 className="title">Payment Form</h2>
                    <div className="payment-desc-div">
                        <p className="payment-plan">Plan: {selectedPlan}</p>
                    </div>

                    <form action="" className="">
                        <input type="email" name="" id="" placeholder='Email' className="email" />
                        <input type="text" className="username" placeholder='Number' />
                        <div className="payment-dropdown">
                            <div className="selected-text">
                                <span className="">{selectedPaymentType}</span>
                                <div className="dropdown-icon"
                                    onClick={ () => {setShowDropdown(!showDropdown)}}>
                                    <img src={CaretDown} alt="" />
                                </div>
                            </div>
                            {showDropdown ?
                                <div className="dropdown-list">
                                    <span className=""
                                        onClick={() => { setSelectedPaymentType("Bank Transfer"); setShowDropdown(false) }}>Bank Transfer</span>
                                    <span className=""
                                        onClick={() => { setSelectedPaymentType("Online Pyament"); setShowDropdown(false) }}>Online Payment</span>
                                </div> : null
                            }
                        </div>
                        <button type='submit' disabled = {true} className="register-button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm
