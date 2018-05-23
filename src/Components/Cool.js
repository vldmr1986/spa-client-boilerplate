import React from 'react';
import PropTypes from 'prop-types';

export default class Cool extends React.PureComponent {
  render() {
    console.log('Cool props', this.props);
    return (
            <div>
                {'Cool'}
            </div>
    );
  }
}

Cool.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
