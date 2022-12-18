import React from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

const MenuExampleAttached = () => (
	<div>
		<Menu attached='top'>
			<Dropdown item icon='bars' simple>
				<Dropdown.Menu>
					<Dropdown.Item><NavLink to="/">Accueil</NavLink></Dropdown.Item>
					<Dropdown.Item><NavLink to="/Recherche">Recherche</NavLink></Dropdown.Item>
					<Dropdown.Item><NavLink to="/Guide">Guide d’utilisation</NavLink></Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Menu>
	</div>)

export default MenuExampleAttached
