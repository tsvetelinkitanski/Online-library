import { useState, useEffect } from 'react'
import { CardDashboard } from './CardDashboard'

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3030/data/books?sortBy=_createdOn%20desc`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            {data.length > 0
                ?
                <ul className="other-books-list">
                    {data.map(card => <CardDashboard key={card._id} {...card} />)}
                </ul>
                :
                <p className="no-books">No books in database!</p>}
        </section>
    )
}
export default Dashboard