import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { KeeperCreateWidget } from '../../components/KeeperCreateWidget/KeeperCreateWidget';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';

const props = {
  addKeeper: () => {},
  showAddKeeper: true,
};

test('renders properly', t => {
  const wrapper = shallowWithIntl(
    <KeeperCreateWidget {...props} />
  );

  t.truthy(wrapper.hasClass('form'));
  t.truthy(wrapper.hasClass('appear'));
  t.truthy(wrapper.find('h2').first().containsMatchingElement(<FormattedMessage id="createNewKeeper" />));
  t.is(wrapper.find('input').length, 2);
});

test('hide when showAddKeeper is false', t => {
  const wrapper = mountWithIntl(
    <KeeperCreateWidget {...props} />
  );

  wrapper.setProps({ showAddKeeper: false });
  t.falsy(wrapper.hasClass('appear'));
});

test('has correct props', t => {
  const wrapper = mountWithIntl(
    <KeeperCreateWidget {...props} />
  );

  t.is(wrapper.prop('addKeeper'), props.addKeeper);
  t.is(wrapper.prop('showAddKeeper'), props.showAddKeeper);
});

test('calls addKeeper', t => {
  const addKeeper = sinon.spy();
  const wrapper = mountWithIntl(
    <KeeperCreateWidget addKeeper={addKeeper} showAddKeeper />
  );

  wrapper.ref('name').get(0).value = 'David';
  wrapper.ref('round').get(0).value = '3';

  wrapper.find('a').first().simulate('click');
  t.truthy(addKeeper.calledOnce);
  t.truthy(addKeeper.calledWith('David', '3'));
});

test('empty form doesn\'t call addKeeper', t => {
  const addKeeper = sinon.spy();
  const wrapper = mountWithIntl(
    <KeeperCreateWidget addKeeper={addKeeper} showAddKeeper />
  );

  wrapper.find('a').first().simulate('click');
  t.falsy(addKeeper.called);
});
