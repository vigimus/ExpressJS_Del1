const express = require('express');

const app = express();

//Förkortningar på required och response 
//Ger oss en JASON stringerfy utan att vi behöver manuellt göra det
//Smidigt är det med Express.JS
app.get('/', (req, res) => {
	const user = {
		name: 'Sally' , 
		hobby: 'soccer',

	}
	res.send(user);
})
app.listen(3000); 