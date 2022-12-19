import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const CardOeuvre = (props) => (
	<Card.Group itemsPerRow={2}>
		<Card>
			<Image src={"https://macrepertoire.macm.org/media/oeuvres/collections/" + props.oeuvre.dateAcquisition + "/M/" + props.oeuvre.numero + "_IN001.jpg"} wrapped ui={false}/>
		</Card>
		<Card fluid={true}>
			<Card.Content>
				<Card.Header>{props.oeuvre.titre}</Card.Header>
				<Card.Description>
					{props.oeuvre.libelleNomsArtistes} <br/>

				</Card.Description>
				<Card.Meta>{props.oeuvre.dateProduction}
					</Card.Meta>
			</Card.Content>
			<Card.Content extra={true}>
				{props.oeuvre.categorie} <br/>
			</Card.Content>
			<Card.Content extra={true}>
				{props.oeuvre.materiaux} <br/>
			</Card.Content>
			<Card.Content extra={true}>
				{props.oeuvre.lieuProduction} <br/>
			</Card.Content>
		</Card>
	</Card.Group>
)

export default CardOeuvre
