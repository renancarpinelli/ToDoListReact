import React, { Component, PropTypes } from 'react';
import Lista from './Lista';

import '../css/Card.css';

class Card extends Component{
	render(){
		return (
			<div className="Card">
			<h2> {this.props.texto} </h2>
			  	<Lista/>
            </div>
			);
	}
}

Card.propTypes = {
	texto: PropTypes.string.isRequired
}

export default Card;