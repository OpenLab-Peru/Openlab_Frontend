import React from 'react';
const Header=({title}	)=>(
	<a href="#">{title}</a>
);

		const dataPersonal=[
		    {label:"Nombre",id:"nombre",holder:"Nombre",type:"text"},
			{label:"Apellido Paterno",id:"apellidoP",holder:"Apellido Paterno",type:"text"},
			{label:"Apellido Materno",id:"apellidoM",holder:"Apellido Materno",type:"text"},
			{label:"Sexo",id:"nombre",holder:"Nombre",type:"select"},
			{label:"Fecha",id:"nombre",holder:"Nombre",type:"date"}
		];
		const dataContacto=[
		    {label:"Celular",id:"nombre",holder:"Nombre",type:"text"},
			{label:"Email",id:"apellidoP",holder:"Apellido Paterno",type:"text"}
			];

		const dataOrganization=[
		    {label:"Nombre",id:"nombre",holder:"Nombre",type:"text"},
			{label:"RUC",id:"apellidoP",holder:"Apellido Paterno",type:"text"},
			{label:"Descripcion",id:"apellidoP",holder:"Apellido Paterno",type:"text"}
			
			];




const SectionInput=(props)=>{
	render(
	<div class="form-group">
	<label htmlFor={props.id}>{props.label}</label>
	<input type={props.type} className="form-control" id={props.id} placeholder={props.holder} />
	</div>
	);
}
const SectionHeader=({title})=>{
	return (<h2>{title}</h2>);
}
const SectionBody=({type,item})=>{
	console.log({type},{item});
	const nodo=item.map((data)=>{
		return (<SectionInput key={data.id} props={data} />)
	});

	console.log({nodo});
	return ({nodo})
}

const FormRegister=({data})=>{
	console.log("dataa",{data});
	return(
	<div>
		<SectionHeader title={'Personal'}/>
		<SectionBody type={'personal'} item={data.dataPersonal} />
		<SectionHeader title={'Datos de Contacto'}/>
		<SectionBody type={'contacto'} item={data.dataContacto}/>
		<SectionHeader title={'Organizacion'}/>
		<SectionBody type={'organization'} item={data.dataOrganization}/>
	</div>
	);
}

export class Registro extends React.Component{

	constructor(props){
		super(props);
		this.state={

	  dataPersonal:dataPersonal,
	  dataContacto:dataContacto,
	  dataOrganization:dataOrganization,
			title:"kevin"
		}

	}

   


	render(){
		return(
		<div>
			<Header title={this.state.title} />
			<FormRegister data={this.state}/>
		</div>
		);
	}
}