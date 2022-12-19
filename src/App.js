import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accueil from "./composants/Accueil";
import Guide from "./composants/Guide";
import MenuPrincipal from "./composants/Menu";
import RechercheMusee from "./composants/RechercheMusee";
import {Container} from "semantic-ui-react";
import OeuvreAuHasard from "./composants/OeuvreAuHasard";

export default function App() {
	const [oeuvres, setOeuvres] = useState({})
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
	const [titreChoisi, setTitreChoisi] = useState("");
	const chooseTitre = (titreChoisi) => {
		setTitreChoisi(titreChoisi);
	};

	return (
		<BrowserRouter>
			<Container>
				<br/>
				<h1>Musée d'art contemporain de Montréal</h1>
				<MenuPrincipal/>

				<Routes>
					<Route path="/" element={<Accueil choisirTitre={chooseTitre}/>}/>
					<Route path="/Recherche">
						<Route index element={<RechercheMusee oeuvres={oeuvres}/>}/>
						<Route path={":titre"} element={<RechercheMusee titrePasse={titreChoisi} oeuvres={oeuvres}/>}/>
					</Route>
					<Route path="/OeuvreAuHasard" element={<OeuvreAuHasard oeuvres={oeuvres}/>}/>
					<Route path="/Guide" element={<Guide/>}/>
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
