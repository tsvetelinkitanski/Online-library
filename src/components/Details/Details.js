import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

const Details = ({ user }) => {

    const params = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
        const id = params.id
        fetch(`http://localhost:3030/data/books/${id}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>{data.title}</h3>
                <p className="type">Type: {data.title}</p>
                <p className="img"><img src={data.imageUrl} /></p>
                <div className="actions">

                    {user.email
                        ?
                        <>
                            <Link className="button" to={`/edit/${data._id}`}>Edit</Link>
                            <Link className="button" to={`/delete/${data._id}`}>Delete</Link>
                        </>
                        : <Link className="button" to="#">Like</Link>}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div className="book-description">
                <h3>Description:</h3>
                <p>{data.description}</p>
            </div>
        </section>
    )
}
export default Details;