import '../assets/css/Button.css'
const Button = ({insideText,nameOfClass,playicon}) => {
  return (
    <button  className={`same-btn btn btn-outline-primary ${nameOfClass}`}>

    {playicon && <img src={playicon} className='play-icon'/> } 
    {insideText} 
    </button>
  )
}

export default Button
