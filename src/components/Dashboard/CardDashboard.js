import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../../api/data'

export const CardDashboard = () => {
    const [data, setData] = useState([])

    // useEffect(async () => {
    //     let result = await getAll()
    //     setData(result)
    // }, [])
    console.log(data);
    return (
        <li className="otherBooks">
            <h3>A Court of Thorns and Roses</h3>
            <p>Type: Fiction</p>
            <p className="img"><img src='/public/images/book1.png' /></p>
            <Link className="button" to="/details">Details</Link>
        </li>
    )
}