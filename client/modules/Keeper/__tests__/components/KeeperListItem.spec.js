import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import KeeperListItem from '../../components/KeeperListItem/KeeperListItem';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';

const keeper = { name: 'Prashant', round: '3', cuid: 'f34gb2bh24b24b2' };
const props = {
  keeper,
  onDelete: () => {},
};

test('renders properly', t => {
  const wrapper = shallowWithIntl(
    <KeeperListItem {...props} />
  );

  t.truthy(wrapper.hasClass('single-keeper'));
  // t.is(wrapper.find('Link').first().prop('children'), keeper.round);
  // t.regex(wrapper.find('.author-name').first().text(), new RegExp(keeper.name));
});

test('has correct props', t => {
  const wrapper = mountWithIntl(
    <KeeperListItem {...props} />
  );

  t.deepEqual(wrapper.prop('keeper'), props.keeper);
  t.is(wrapper.prop('onClick'), props.onClick);
  t.is(wrapper.prop('onDelete'), props.onDelete);
});

test('calls onDelete', t => {
  const onDelete = sinon.spy();
  const wrapper = shallowWithIntl(
    <KeeperListItem keeper={keeper} onDelete={onDelete} />
  );

  wrapper.find('.keeper-action > a').first().simulate('click');
  t.truthy(onDelete.calledOnce);
});
