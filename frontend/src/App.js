import React  from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminPageScreen from "./screens/AdminPageScreen";
import HomepageScreen from "./screens/HomepageScreen";

function App() {
	return (
		<div >
			<Router>
				<Route path = "/" exact component = {HomepageScreen}/>
				<Route path = "/admin" exact component = {AdminPageScreen}/>
				<Route path = "/admin/login" component = {AdminLoginScreen}/>
			</Router>
		</div>
	);
}

export default App;
