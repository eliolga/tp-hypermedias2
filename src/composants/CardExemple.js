import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => (
	<Card>
		<Image src="https://macrepertoire.macm.org/media/oeuvres/collections/{props.oeuvre.dateAquis}/M/A%2078%2077%20PH%201_IN001.jpg" wrapped ui={false} />
		<Card.Content>
			<Card.Header>{props.oeuvre.titre}</Card.Header>
			<Card.Meta>
				<span className='date'>Joined in 2015</span>
			</Card.Meta>
			<Card.Description>
				Matthew is a musician living in Nashville.
			</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<a>
				<Icon name='user' />
				22 Friends
			</a>
		</Card.Content>
	</Card>
)

export default CardExampleCard
