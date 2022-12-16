// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import {useEffect, useState} from "react";

const RechercheMusee = () => {
	const [oeuvres, setOeuvres] = useState([]);

	const appelApi = () => {

		//event.preventDefault();
		// get request
		fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
			.then((response) => response.json())
			.then((data) => {
				setOeuvres(data)
			})
			.catch((erreur) => console.log(erreur));
	}

	useEffect(() => {
		appelApi();
	}, []);

const artistes = oeuvres.map((item) => (
		<li key={item.numero}>
			{item.libelleNomsArtistes}
		</li>
	))

	return (
		<div>
{/*
			<button onClick={appelApi}>Appel API MAC</button>
*/}
			<ul>
				{oeuvres.map((item) => (
					<li key={item.numero}>
						{item.titre}, {item.libelleNomsArtistes}, {item.dateProduction}
					</li>
				))}
			</ul>
{/*
			<pre>{JSON.stringify(oeuvres, null, 2)}</pre>
*/}

		</div>
	)
}
export default RechercheMusee;