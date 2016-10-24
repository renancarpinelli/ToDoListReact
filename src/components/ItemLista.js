import React, { Component, PropTypes } from 'react';

import '../css/ItemLista.css';

class ItemLista extends Component{
	render() {
		return (
			<li className="ItemLista"> 
				<label> <input type="checkbox" value="" />  {this.props.texto} </label> 
			</li>
			);
	}
}

ItemLista.propTypes = {
    texto : PropTypes.string.isRequired	
}



export default ItemLista;