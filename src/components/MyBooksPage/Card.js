import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const Card = (card) => {

    const viewDetails = () => {

       async function  onDetails() {
           const result = await fetch(`http://localhost:3030/data/books${card._id}`)
             const data = await result.json()
        }
        onDetails()
    }

    return (
        <div>
            <li className="otherBooks">
                <h3>{card.title}</h3>
                <p>Type: {card.type}</p>
                <p className="img"><img src={card.imageUrl} /></p>
                <Link className="button" onClick={viewDetails} to={`/books${card._id}`}>Details</Link>
            </li>
        </div>
    )
}
