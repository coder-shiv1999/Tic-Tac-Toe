import './Button.css';


const Button = (props) => {
    
    return(
        
        <div className="btn">
            <button onClick={props.onClick}>{ props.title }</button>
        </div>
        
    );
}

export default Button;