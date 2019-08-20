import React from 'react';
import { Input, Label } from 'reactstrap';
import { DESCRIPTION } from '../constants/Text';

const LandlordDescription = (setDescription, description) => (
  <div className='item-description'>
    <Label htmlFor={DESCRIPTION}>{DESCRIPTION}</Label>
    <Input
      type='textarea'
      required
      value={description}
      id={DESCRIPTION}
      onChange={e => setDescription(e.target.value)}
    />
  </div>
);

export default LandlordDescription;
