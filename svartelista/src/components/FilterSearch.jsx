import React from 'react';
import { Input, Label } from 'reactstrap';
import { SEARCH_LABEL, SEARCH_PLACEHOLDER } from '../constants/Text';

const FilterSearch = (setSearchText, searchText) => (
  <div className='searchBar'>
    <Label htmlFor={SEARCH_LABEL}>{SEARCH_LABEL}</Label>
    <Input
      value={searchText}
      type='text'
      id={SEARCH_LABEL}
      placeholder={SEARCH_PLACEHOLDER}
      onChange={e => setSearchText(e.target.value.toLowerCase())}
    />
  </div>
);

export default FilterSearch;
