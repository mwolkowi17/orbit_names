
export function Display(props) {


    return (
        <div className="display" style={{visibility: props.displayed}} >
           <h1> Name</h1>
           <h6>Info</h6>
           <p>Lorem ipsum ...</p>
           <a onClick={props.close} className="closebutton">(Close window)</a>
        </div>
    )
}