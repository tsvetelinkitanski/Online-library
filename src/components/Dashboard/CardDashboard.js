import { Link } from 'react-router-dom'


export const CardDashboard = (data) => {

    return (
        <li className="otherBooks">
            <h3>{data.title}</h3>
            <p>Type: {data.type}</p>
            <p className="img"><img src={data.imageUrl} /></p>
            <Link className="button" to={`/details/${data._id}`}>Details</Link>
        </li>
    )
}