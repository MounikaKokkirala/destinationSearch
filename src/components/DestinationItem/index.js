// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="item-container">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
      console.log({name})
    </li>
  )
}

export default DestinationItem
