import React from 'react';


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
