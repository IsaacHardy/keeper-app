import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './KeeperCreateWidget.css';

export class KeeperCreateWidget extends Component {
  addKeeper = () => {
    const nameRef = this.refs.name;
    const roundRef = this.refs.round;
    if (nameRef.value && roundRef.value) {
      this.props.addKeeper(nameRef.value, roundRef.value);
      nameRef.value = roundRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddKeeper ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewKeeper" /></h2>
          <input placeholder={this.props.intl.messages.keeperName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.keeperRound} className={styles['form-field']} ref="round" />
          <a className={styles['keeper-submit-button']} href="#" onClick={this.addKeeper}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

KeeperCreateWidget.propTypes = {
  addKeeper: PropTypes.func.isRequired,
  showAddKeeper: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(KeeperCreateWidget);
