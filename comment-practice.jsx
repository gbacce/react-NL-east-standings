
var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
   {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]


function UserInfo(props){
	return (
		<div className="UserInfo">
			<Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
			<div className="UserInfo-name">
				{props.author.name}
			</div>
		</div>
	);
}

function Avatar(props){
	return (
		<img className="Avatar"
			src={props.avatarUrl}
			alt={props.name}
		/>
	);
}

function CommentBody(props){
	return (
		<div className="Comment-body">
			<h1>{props.commentHeading}</h1>
			<div className="Comment-text">{props.text}</div>
			<div className="Comment-date">
				{props.date}
			</div>
		</div>
	);
}

function Badges(props){
	return (
		<div className="UserBadges">
			<div className="badge">{props.userBadge[0]}</div>
			<div className="badge">{props.userBadge[1]}</div>
			<div className="badge">{props.userBadge[2]}</div>
		</div>
	);
}



function Comment(props){
	return(
		<div className = "Comment">
			<UserInfo author={props.author} />
			<CommentBody date={props.date} text={props.text} />
			<Badges userBadge={props.userBadge} /> 
		</div>
	)
}

function Application(props) {
	var commentsArray = [];
	props.data.map((commentData,index)=>{
   		commentsArray.push(<Comment key={index} author={commentData.author} userBadge = {commentData.userBadge} text={commentData.text} commentHeading={commentData.commentHeading} date={commentData.date} />)
 	})
	return(
		<div className="container">
			{commentsArray}
		</div>
	)

}



ReactDOM.render(
	<Application data= {data} />,
	document.getElementById('root')
)