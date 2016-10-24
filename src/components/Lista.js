import React, { Component } from 'react'; 

import ItemLista from './ItemLista';

class Lista extends Component{
	render(){
		return (
			<ul> 
			 	<ItemLista texto="Teste"/>
			 	<ItemLista texto="Teste"/>
				<ItemLista texto="Teste"/>
			</ul>
		);
	}

}

export default Lista;