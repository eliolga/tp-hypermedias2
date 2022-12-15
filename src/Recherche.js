// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import {useEffect, useState} from "react";

const Recherche = () => {

	const appelApi = () => {

		//event.preventDefault();
		// get request
		fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
			.then((response) => response.json())
			// on va remplacer le console.log par setActivity
			.then((data) => console.log(data))
			.then((data) => {
					setOeuvres(data)
				}
			);
	}

	const [oeuvres, setOeuvres] = useState([]);

	useEffect(() => {
		appelApi();
	}, []);


	return (
		<div>
			{/*ne fonctionne pas encore*/}
			{/*{oeuvres.map((oeuvre) => {
			return <li key={oeuvre.id}>{oeuvre.titre}</li>
		})}*/}
			<button onClick={appelApi}>Appel API</button>
		</div>
	)
}
export default Recherche;