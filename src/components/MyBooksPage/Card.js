import { Link } from 'react-router-dom'

export const Card = (card) => {

    return (
        <div>
            <li className="otherBooks">
                <h3>{card.title}</h3>
                <p>Type: {card.type}</p>
                <p className="img"><img src={card.imageUrl} /></p>
                <Link className="button" to={`/details/${card._id}`}>Details</Link>
            </li>
        </div>
    )
}