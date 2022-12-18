// valeurs disponibles dans le json:
/*{libelleNomsArtistes, titre, dateProduction, categorie, materiaux, dimensions, lieuProduction, cultures, emplacementHorsMurs, provenance, collection, departement, dateAcquisition, numero, oeuvrePrincipale, elements, nomsArtistesTries, artistes, evenements, publications, id}*/

import React, {useState} from "react";
import {Button, Container, Input} from "semantic-ui-react";
import CardExemple from "./CardExemple";

const RechercheMusee = (props) => {
	const [titre, setTitre] = useState("");
	var tipit = {};
	const [uneOeuvre, setUneOeuvre] = useState({})
	const uneOeuvreHandler = () => {
		setUneOeuvre(trouverOeuvre());
	}
	if (props.oeuvresMoinsDe7){
		setUneOeuvre(props.oeuvresMoinsDe7);
	}

	function trouverOeuvre() {
		props.oeuvres.forEach(function (element) {
			if (element.titre === titre) {

				tipit = element;
			}
		})
		return (tipit);
	}

	return (
		<Container>
			<h1>Recherche</h1>
			<Input type="text" value={uneOeuvre.titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre de l'oeuvre"/>

			<Button onClick={uneOeuvreHandler}>Recherche par titre</Button>
			<div>
				{uneOeuvre.titre !== undefined ? <CardExemple oeuvre={uneOeuvre}/> : undefined}
			</div>

		</Container>
	)
}
export default RechercheMusee;
