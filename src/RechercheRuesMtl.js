
import {useEffect, useState} from "react";

const RechercheRuesMtl = () => {
	const [data, setData] = useState([]);

	const appelApi = () => {

		//event.preventDefault();
		// get request
		fetch('https://data.montreal.ca/dataset/2985215a-a049-4229-81bc-c22f99edb9f7/resource/cb52bb00-912b-4467-a4a8-6f9fc049694f/download/toponymes.json')
			.then((response) => response.json())
			.then((data) => {setData(data)})
			.catch((erreur) => console.log(erreur));
	}

	useEffect(() => {
		appelApi();
	}, []);


	return (
		<div>
			{/*ne fonctionne pas encore*/}
			{/*{oeuvres.map((oeuvre) => {
			return <li key={oeuvre.id_rire}>{oeuvre.specific}</li>
		})}*/}
			<button onClick={appelApi}>Appel API Toponymie Mtl</button>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						{item.title}
					</li>
				))}
			</ul>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
export default RechercheRuesMtl;