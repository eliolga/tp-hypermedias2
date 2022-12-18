import React from 'react'
import {Dropdown,  Menu,} from 'semantic-ui-react'

const MenuExampleAttached = () => (<div>
   <Menu attached='top'>
      <Dropdown item icon='bars' simple>
         <Dropdown.Menu>
            <Dropdown.Item>Accueil</Dropdown.Item>
            <Dropdown.Item>Recherche</Dropdown.Item>
            <Dropdown.Item>Guide d’utilisation</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   </Menu>
</div>)

export default MenuExampleAttached
