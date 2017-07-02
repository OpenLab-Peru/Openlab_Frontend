import React from 'react';

const TodoForm=({submit})=>{
let input;
	return (

	<div>

	<input ref={node=>
	{
	input=node
	}} />

	 <button onClick={()=>{submit(input.value); input.value=''}} >+</button>
	</div>
	)
}

const Title=()=>{
	return(<h1>Todo App</h1>)
}

const TodoItem=({item,remove})=>{
	console.log("todo ite",item);
	return (
	<li onClick={()=>remove(item.id)}>{item.text}</li>
	)
}

const TodoBody=({items,removeItem})=>{
console.log("itms==",items);
	const todoNode=items.map(todo=>{
		return (
		<TodoItem key={todo.id} item={todo} remove={removeItem} />
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
		    this.apiUrl = 'http://5958e93d3715030011b89a8a.mockapi.io/todo'

	}	
	submitTodo(val){
		console.log("val a subir",val);
		const todo={text:val,id:window.id++}
		    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
       });
	}
	componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
      	console.log("res.data",res.data);
        // Set state with result
	  this.setState((prevState, props) => ({
	  data: res.data
	}));
      });
  	}



	removeItem(id){
	const todo=this.state.data.filter(item=>{
		if(item.id!=id){
			return item;
		}
		    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: todo});      
      })
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
