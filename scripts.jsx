
//////////// COMPONENT ////////////

//  A component is essentially a variable that contains HTML or JSX.

function Application(){

	// This part of the function reads regular JavaScript. It's not until you reach RETURN that the function reads JSX.

	var name = "Guido";

	return(
		<div>
			<div>
				<h1>Hello, World!</h1>
			</div>
			<div>
				<h2>From {name}</h2>
				<Message ception = "ception" />
			</div>
		</div>
	)
}


////////// PROPS (Properties) //////////

// A prop is information that is sent to a component. It is IMMUTABLE.


function Message(props){      // You can call the argument whatever you want, but the convention is to call it props.
	return(
		<h5>I am a component within a component. Component{props.ception}.</h5>
	)
}



///////// ReactDOM - Render /////////

// ReactDOM is available because reactDOM.js is included in the HTML file.
// The .render function requires React (react.js). It takes 2 arguments:
//	  1. The component to render
//	  2. Where to render it.

ReactDOM.render(
	<Application />,
	document.getElementById('container')
)