

function Hello (props) {
  
    return (
    <div >
   
    <h2> {props.person.msg} {props.person.name} {props.emoji} {props.person.seat} </h2>
   
   </div>

    )
  
};

export default Hello;