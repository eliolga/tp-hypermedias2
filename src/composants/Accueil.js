import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const Accueil = () => {

	const [oeuvres, setOeuvres] = useState([]);

	const appelApi = () => {
		fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
			.then((response) => response.json())
			.then((data) => {
				setOeuvres(data)
			});
	}

	useEffect(() => {
		appelApi();
	}, []);

	const renderOeuvres = () => {
		return oeuvres.map((item) => {

		let path = `/Recherche/${item.numero}`
            if (item.titre.length<7) {
                return (
                    <Link to = {path} >{item.titre} / </Link>
                )
            }
            else return null;
		})
	}
	return (
		<div>
            <h1>Titres de moins de 7 caractères pour la recherche</h1>
            <p><em>TODO onClick, passer le titre en paramètres vers la barre de recherche de RechercheMusee</em></p>
			{renderOeuvres()}

		</div>)
}
export default Accueil
