import React from 'react';
import { Input, Label } from 'reactstrap';
import { LANDLORD } from '../constants/Text';

const LandlordName = (setLandlord, value) => (
  <div className='item-landlord'>
    <Label htmlFor={LANDLORD}>{LANDLORD}</Label>
    <Input
      id={LANDLORD}
      required
      value={value}
      onChange={e => setLandlord(e.target.value)}
    />
  </div>
);

export default LandlordName;
