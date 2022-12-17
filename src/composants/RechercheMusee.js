// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import React, {useEffect, useState} from "react";
import {Button, Input, Select} from "semantic-ui-react";
import SelectExample from "./SelectExample";
import CardExemple from "./CardExemple";

const RechercheMusee = () => {


	const [titre, setTitre] = useState("");
	const [oeuvres, setOeuvres] = useState([]);
//	const [isLoading, setIsLoading] = useState(true);

	const appelApi = () => {
		//		setIsLoading(true)

		//event.preventDefault();
		// get request
//		fetch('https://macrepertoire.macm.org/api/oeuvres/')
		fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
			//		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())

			.then((data) => {
				console.log(data);
				setOeuvres(data)
			});

		//	.catch((erreur) => console.log(erreur));
	}

	useEffect(() => {
		appelApi();
	//	renderTitres();
	}, []);

	function trouverOeuvre() {
		oeuvres.forEach(function (element) {
		//	console.log(element);
			if (element.titre === titre){
			//	console.log(element);
				uneOeuvre = element;
				console.log(uneOeuvre);
				renderOeuvres();
			}
		})
	}


	const renderOeuvres = () => {
		return oeuvres.map((item) => {
			return (
				<div>
					<ul>
						<li key={item.numero}>
							{item.titre}
						</li>
					</ul>
				</div>
			)
		})
	}

/*	const mesTitres =[];

	function renderTitres () {

		oeuvres.forEach(function (element) {
			//	console.log(element);

			mesTitres.push(element.titre)

		})
		console.log(mesTitres);
	};*/

	return (
		<div>
			{/*<Select options={renderTitres()} onChange={(e) => setTitre(e.target.value)}/>*/}

			<Input type="text" value={oeuvres.titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre de l'oeuvre"/>
			{/*<Select options={oeuvres.numero} value={oeuvres.numero}/>*/}

			<Button onClick={event => trouverOeuvre(event.target.value)}>Recherche par titre</Button>
			<div>
				{/*{renderOeuvres()}*/}
			</div>

		</div>
	)
}
export default RechercheMusee;