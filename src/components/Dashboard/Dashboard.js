import { Link } from 'react-router-dom'
import { CardDashboard } from './CardDashboard'

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-books-list">
                <CardDashboard />
            </ul>
            <p className="no-books">No books in database!</p>
        </section>
    )
}
export default Dashboard