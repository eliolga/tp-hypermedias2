// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import React, {useEffect, useState} from "react";
import {Button, Input, Select} from "semantic-ui-react";
import SelectExample from "./SelectExample";
import CardExemple from "./CardExemple";

const RechercheMusee = () => {


	const [titre, setTitre] = useState("");
	const [oeuvres, setOeuvres] = useState([]);
	var tipit = {};
	const [uneOeuvre, setUneOeuvre] = useState({})
	const uneOeuvreHandler = () =>{
		console.log("uneOeuvreHandler")
		tipit = trouverOeuvre()
		console.log(tipit)
		setUneOeuvre(tipit);
	}
	const appelApi = () => {
		fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
			.then((response) => response.json())

			.then((data) => {
				console.log(data);
				setOeuvres(data)
			});
	}

	useEffect(() => {
		appelApi();
	}, []);

	function trouverOeuvre() {
		oeuvres.forEach(function (element) {
			if (element.titre === titre){

				tipit = element;
				console.log(tipit);
			}
		})
		return (tipit);
	}

	return (
		<div>

			<Input type="text" value={oeuvres.titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre de l'oeuvre"/>

			<Button onClick={uneOeuvreHandler}>Recherche par titre</Button>
			<div>
				{console.log("uneOeuvre")}
				{console.log(uneOeuvre)}
				<CardExemple  oeuvre  = {uneOeuvre}/>
			</div>

		</div>
	)
}
export default RechercheMusee;
