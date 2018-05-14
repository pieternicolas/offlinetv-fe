import React from 'react';
import { connect } from 'react-redux';

import LoggedInHeader from './components/LoggedInHeader.js';
import LoggedOutHeader from './components/LoggedOutHeader.js';


function mapStateToProps(state) {
	return {
		session: state.session
	};
};

export class PublicHeader extends React.Component {
	render() {
		if (this.props.session.isLoggedIn) {
			return (
				<LoggedInHeader session={this.props.session}></LoggedInHeader>
			);
		} else {
			return (
				<LoggedOutHeader></LoggedOutHeader>
			);
		};
	}
};


export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(PublicHeader);