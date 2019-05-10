import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import './scss/SearchBar.css';

const SearchBar = () => (
  <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' className="searchBar"/>
)

export default SearchBar;