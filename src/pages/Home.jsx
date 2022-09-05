import React from "react";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
		}
	};

	handleChange = () => {
		
	}

	render() {
		const {name} = this.state;
		return (
			<form>
				<input type="text" value= {name }/>
				<button>Entrar</button> 
			</form>
		)        
	}   
}

export default Home;
