import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const API = 'http://localhost:3030'

export const Card = (card) => {


    return (
        <div>
            <li className="otherBooks">
                <h3>{card.title}</h3>
                <p>Type: {card.type}</p>
                <p className="img"><img src={card.imageUrl} /></p>
                <Link className="button" to={`/books${card._id}`}>Details</Link>
            </li>
        </div>
    )
}
