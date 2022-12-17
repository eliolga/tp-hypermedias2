import './App.css';
import React from "react";
import RechercheMusee from "./composants/RechercheMusee";
import SelectExample from "./composants/SelectExample";
import CardExampleCard from "./composants/CardExemple";

export default function App() {

	return (
		<div>
			<h1>MAC</h1>
			<RechercheMusee/>
			<CardExampleCard/>
		</div>
	);
}