const neo4j=require('neo4j-driver').v1;

const driver=neo4j.driver("bolt:localhost",neo4j.auth.basic("neo4j","neo4j"));

const session=driver.session();



driver.onCompleted=()=>{
	console.log("Driver conectado");
}
driver.onError=(error)=>{
	console.log("Error del driver",error)
}


driver.close();