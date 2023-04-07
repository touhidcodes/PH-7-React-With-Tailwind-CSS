import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import PriceList from "./components/PriceList/PriceList";

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<PriceList></PriceList>
			<Dashboard></Dashboard>
			<PhoneBar></PhoneBar>
		</div>
	);
}

export default App;
