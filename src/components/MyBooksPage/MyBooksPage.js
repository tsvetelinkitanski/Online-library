import { useState, useEffect, useContext } from "react"
import { Card } from "./Card";

const MyBooksPage = (userId) => {

    const [data, setData] = useState([])

    useEffect((userId) => {
        fetch(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (
        <section id="my-books-page" className="my-books">
            <h1>My Books</h1>
            <ul className="my-books-list">
                {data.map(card => <Card {...card} />)}
            </ul>

            <p className="no-books">No books in database!</p>
        </section>
    )
}
export default MyBooksPage;