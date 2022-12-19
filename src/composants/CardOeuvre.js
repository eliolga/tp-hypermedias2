import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const CardOeuvre = (props) => (
	<Card>
		<Image src={"https://macrepertoire.macm.org/media/oeuvres/collections/" + props.oeuvre.dateAcquisition + "/M/" + props.oeuvre.numero + "_IN001.jpg"} wrapped ui={false}/>
		<Card.Content>
			<Card.Header>{props.oeuvre.titre}</Card.Header>
			<Card.Description>{props.oeuvre.libelleNomsArtistes}</Card.Description>
			<Card.Meta>{props.oeuvre.dateProduction}</Card.Meta>
		</Card.Content>
		<Card.Content extra>
			{props.oeuvre.materiaux}
		</Card.Content>
	</Card>
)

export default CardOeuvre
