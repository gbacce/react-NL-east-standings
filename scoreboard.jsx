

// Create a component called "Application that eturns a single DOM element.
// 		Note: Components should be uppercase."
//		Note: If you want to use an HTML class, use className. Class is a reserved word for JavaScript. 

//The App works, but it's big. It's no better than if we copy and pasted it into our HTML file.
// If it gets any bigger, we are in big trouble because we have to manage both JSX and HTML.
// Break the app into components:
//		1. Header
//		2. Multiple Teams
//		3. Each team has a counter


// Our app sucks!! There is no point in using React yet. Let's make some JSON to fix that.




////// STATE ////////
// State is the counterpart to props. It DOES change.
// Props are immutable. They do not change.

// State has:
//	1. An initial value
//	2. An infinite number of changed values

// In the case of the NL East, all gamesback start at 0.
// Then, some kind of change occurs. (Namely, someone wins or loses a game)

// In ES5, to use state, React provides a component class.
// It takes an object as a parameter.

// ANY TIME STATE CHANGES, THE COMPONENT WILL RE-RENDER.


var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Florida"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadeliphia"
	}
]


function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

// Create a new componenet called Team to be used by Application.


function Team(props){
	return(
		<div className ="row">
			<div className="col-sm-8 col-sm-offset-2 team">
				<div className="team-name col-sm-12">{props.name}</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

// Create a var with the name of the component
//	The ONLY REQUIRED PROPERTY is RENDER
//	Note: This is a CONSTRUCTOR for the Counter CLASS. When we call it inside teams, we create an OBJECT.

var Counter = React.createClass({

	//// getInitialState /////
	// This is a set React property, like render. The function:
	// 	- Sets the initial state value of a variable.
	//	- Returns a single object

	getInitialState: function() {
		var stateObject = {
			gamesBack: 0
		}
		return stateObject;
	},

//// BECAUSE THESE (getInitialState, addGame, loseGame and render) ARE FOUR PROPERTIES OF THE SAME OBJECT (Counter), INCLUDE A COMMA AFTER CLOSING EACH FUNCTION (except the last one)////


	addGame: function() {
		this.setState({
			gamesBack: this.state.gamesBack + 1
		})
	},

	// Note: Don't EVER change this.state yourself. React is in charge of state. The WORST THING YOU CAN DO IN REACT IS SOMETHING LIKE   // this.stage.gamesBack++ \\   ...Use  ///  this.setState() \\\   instead!!!


	loseGame: function() {
		this.setState({
			gamesBack: this.state.gamesBack - 1
		})
	},


	// Note: Whenever the state changes, render runs again.

	render: function(){
		return(
			<div className="counter">
				<button onClick={this.addGame} className="btn btn-primary col-sm-1">+</button>
				<div className="games-back col-sm-10">{this.state.gamesBack}</div>
				<button onClick={this.loseGame} className="btn btn-danger col-sm-1">-</button>
			</div>
		)
	}
})

function Application(props){
	return(

		// Use map to loop through the teams array.
		// We no longer need:
			// <Team name="Braves" score="0"/>
			// <Team name="Brewers" score="0"/>
		// props.teams is an array with team objects
		// Send Team in the team object, in map, ES6 style


		<div className ="container">     
			{ /* <h1>{props.title}</h1> */}
			<Header title={props.title} />
			{props.teams.map((team,index)=>{    {/* team could be anything. The variable name is irrelevant. This is a "let" variable.*/}
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}


// Add a prop to sent the title to the Application component.

ReactDOM.render(
	<Application title="NL East Scoreboard" teams={teams} />,
	document.getElementById('root')
)