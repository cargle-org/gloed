import React  from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomepageScreen from "./screens/HomepageScreen";

function App() {
	return (
		<div >
			<Router>
				<Route path = "/" exact component = {HomepageScreen}/>
			</Router>
		</div>
	);
}

export default App;
