import React, { Component } from 'react';
import SearchField from './SearchField'
import Card from './Card'

class TodoGrid extends Component{

	state = {
	   todos: []					
	}

	componentDidMount(){
		fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista')
		.then(response => response.json())
		.then(response => {
			this.setState({
				todos: response
			})
		})
	}


	renderCards() {
		return this.state.todos.map(todo => {
			return <Card key={todo.id} 
			texto={todo.titulo} />
		})
	}
	
	render(){
	   return  (
	   	<div>
	   		<SearchField texto="Pesquisar tarefa" />
	   		{ this.renderCards() }

	   	</div>	
	   );
	}


} 

export default TodoGrid