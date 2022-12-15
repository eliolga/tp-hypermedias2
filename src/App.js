import './App.css';
import React, {useEffect, useState} from "react";
import useAnswer from "./composants/useAnswer";
import makeRequest from "./composants/makeRequest";
import Recherche from "./Recherche";

export default function App() {
/*	const answer = useAnswer();

	const submit = async () => {
		const res = await makeRequest({
			title: "delectus aut autem",
			completed: false
		});
		console.log(res);
	};


	return (<>
			<div className="App">{JSON.stringify(answer)}</div>
			<div>
				<button onClick={submit}>add todo</button>
			</div>
		</>
	);*/
	return (
		<div>
			<Recherche/>
		</div>
	);
}