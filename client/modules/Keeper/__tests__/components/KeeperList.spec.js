import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import KeeperList from '../../components/KeeperList';

const keepers = [
  { name: 'Prashant', round: '3', cuid: 'f34gb2bh24b24b2' },
  { name: 'Mayank', round: '3', cuid: 'f34gb2bh24b24b3' },
];

test('renders the list', t => {
  const wrapper = shallow(
    <KeeperList keepers={keepers} handleShowKeeper={() => {}} handleDeleteKeeper={() => {}} />
  );

  t.is(wrapper.find('KeeperListItem').length, 2);
});
