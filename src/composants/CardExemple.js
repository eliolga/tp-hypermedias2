import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => (
	<Card>
		<Image src={"https://macrepertoire.macm.org/media/oeuvres/collections/"+props.oeuvre.dateAcquisition + "/M/"+ props.oeuvre.numero+ "_IN001.jpg"} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{props.oeuvre.titre}</Card.Header>
			<Card.Meta>
				<span className='date'>produit en {props.oeuvre.dateProduction}</span>
			</Card.Meta>
			<Card.Description>
				{props.oeuvre.materiaux}
			</Card.Description>
		</Card.Content>
		<Card.Content extra>

		</Card.Content>
	</Card>
)

export default CardExampleCard
