import React, { Component, PropTypes } from 'react';

import '../css/SearchField.css'

class SeachField extends Component{

	render() {
		return (
			 <form className="search-form">
			<input type="search" placeholder={this.props.texto} /> 
			</form>
			);
	}

}

SeachField.propTypes = {
	texto: PropTypes.string.isRequired
};


export default SeachField;
