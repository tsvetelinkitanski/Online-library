import { useEffect, useState } from "react";

const Details = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/${window.location.pathname}`)
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
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>

                    <a className="button" href="#">Like</a>

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