import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { delBook } from "../../api/data";

const Details = ({ user }) => {

    const params = useParams();
    const token = user.accessToken
    const id = params.id;
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/books/${id}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])


    const destroyHandler = (e) => {
        e.preventDefault()

        delBook(id, token)
            .then(() => {
                navigate('/')
            })
    }

    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>{data.title}</h3>
                <p className="type">Type: {data.type}</p>
                <p className="img"><img src={data.imageUrl} /></p>
                <div className="actions">

                    {user.email && (user._id === data._ownerId
                        ?
                        <>
                            <Link className="button" to={`/edit/${data._id}`}>Edit</Link>
                            <Link className="button" onClick={destroyHandler}>Delete</Link>
                        </>
                        : <Link className="button" to="#">Like</Link>)}

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