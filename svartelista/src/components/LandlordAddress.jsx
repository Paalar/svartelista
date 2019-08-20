import React from 'react';
import { Input, Label } from 'reactstrap';
import { ADDRESS } from '../constants/Text';

const LandlordAddress = (address, setAddress) => (
  <div className='item-address'>
    <Label htmlFor={ADDRESS}>{ADDRESS}</Label>
    <Input
      id={ADDRESS}
      value={address}
      onChange={e => setAddress(e.target.value)}
    />
  </div>
);

export default LandlordAddress;
