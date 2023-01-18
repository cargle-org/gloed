import React  from "react";
import {HashRouter as Router, Route} from 'react-router-dom'
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminPageScreen from "./screens/AdminPageScreen";
import HomepageScreen from "./screens/HomepageScreen";
import PaymentStatus from "./screens/PaymentStatus";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";

function App() {
	return (
		<div >
			<Router>
				<Route path = "/" exact component = {HomepageScreen}/>
				<Route path = "/privacy-policy" exact component = {PrivacyPolicyScreen}/>
				<Route path = "/payment-status" component = {PaymentStatus}/>
				<Route path = "/admin" exact component = {AdminPageScreen}/>
				<Route path = "/admin/login" component = {AdminLoginScreen}/>
			</Router>
		</div>
	);
}

export default App;
