import { Link } from 'react-router-dom'

// (userId) =>
//     `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`



export const Card = ( card ) => {
    return (
        <div>
            <li className="otherBooks">
                <h3>{card.title}</h3>
                <p>Type: {card.type}</p>
                <p className="img"><img src={card.imageUrl} /></p>
                <Link className="button" to="/details">Details</Link>
            </li>
        </div>
    )
}
