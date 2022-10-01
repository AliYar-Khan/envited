import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventPageCreate from "./pages/EventPageCreate";

function App() {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<EventPageCreate />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
