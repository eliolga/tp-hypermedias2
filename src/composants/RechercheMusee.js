// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import {useEffect, useState} from "react";

const RechercheMusee = () => {

	const appelApi = () => {
			setIsLoading(true)

		//event.preventDefault();
		// get request
//		fetch('https://macrepertoire.macm.org/api/oeuvres/')
		fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
			.then((response) => response.json())
			.then((data) => {
				setOeuvres(data)
							setIsLoading(false)

			});
		//	.catch((erreur) => console.log(erreur));
	}

	const [oeuvres, setOeuvres] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		appelApi();
	}, []);

const tabOeuvres = [];

	tabOeuvres.push(oeuvres.at(1));
	tabOeuvres.push(oeuvres.at(2));
	tabOeuvres.push(oeuvres.at(3));


	const renderOeuvres = () => {
		return tabOeuvres.map((item) => {
			return (
				<div>
					<ul>
						<li key={item.numero}>
							{item.titre}, {item.libelleNomsArtistes}, {item.dateProduction}
						</li>
					</ul>
				</div>
			)
		})
	}


	return (
		<div>

			<button onClick={renderOeuvres}>Appel API MAC</button>
			<div>
				{renderOeuvres()}
			</div>
		</div>
	)
}
export default RechercheMusee;