import { useState, useEffect } from "react"
import { Card } from "./Card";

const MyBooksPage = ({ user }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3030/data/books?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])


    return (
        <section id="my-books-page" className="my-books">
            <h1>My Books</h1>

            {data.length > 0
                ? <ul className="my-books-list">
                    {data.map(card => <Card key={card._id} {...card} />)}
                </ul>
                : <p className="no-books">No books in database!</p>}

        </section>
    )
}
export default MyBooksPage;