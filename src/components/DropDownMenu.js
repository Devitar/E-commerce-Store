import React from 'react';
import { Dropdown } from 'semantic-ui-react';
//import {Link} from 'react-router-dom';

const categoryOptions = [
  {
    key: 'Phones',
    text: 'Phones',
    value: 'Phones',
  },
]

const DropDownMenu = () => (
  <Dropdown
    placeholder='Select Category'
    fluid
    selection
    options={categoryOptions}
  />
)

export default DropDownMenu;