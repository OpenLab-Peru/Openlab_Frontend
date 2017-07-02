import React from 'react';
const TodoForm=({submit})=>{
let tok;
	return (

	<div>
	<form>
	<input ref={node=>
	{
	tok=node;
	}} />

	 <button onClick={()=>{submit(tok.value) tok.value=''}} >+</button>
		</form>
	</div>
	)
}

const Title=()=>{
	return(<h1>Todo App</h1>)
}

const TodoItem=({item,remove})=>{
	return (
	<li onClick={remove(item.id)}>{todo.text}</li>
	)
}

const TodoBody=({items,removeItem})=>{
	const todoNode=items.map(todo=>{
		return (
		<TodoItem item={todo} remove={removeItem} />
		)
	})
	return(
	<ul>
	{todoNode}
	</ul>
	)
}

window.id=0;
export default class TodoApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[]
		};
	}	

	componentWillMount(prevProps,prevState) {
		console.log("willMount",prevPros,prevState);

    }
	submitTodo(val){
		const todo={text:val,id:window.id++}
		this.state.data.push(todo);
		this.setState({data:this.state.data})
	}

	removeItem(id){
	const todo=this.state.data.filter(item=>{
		if(item.id!=id){
			return item;
		}
	})
	this.setState({data:todo});
	}

	render(){
		return(
		<div>
		<Title />
		
		<TodoForm submit={this.submitTodo.bind(this)} />	

		<TodoBody removeItem={this.removeItem.bind(this)} items={this.state.data} />
		</div>
		)
	}
}