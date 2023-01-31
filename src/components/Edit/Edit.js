import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const Edit = () => {
    const params = useParams();

    const [data, setData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        type: '',
    });


    useEffect(() => {
        const id = params.id

        fetch(`http://localhost:3030/data/books/${id}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const submitHandler = () => {

    }
    return (
        <section id="edit-page" className="edit">
            <form onSubmit={submitHandler} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" defaultValue={data.title} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue={data.description}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={data.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" >
                                <option defaultValue="Fiction" selected >{data.type}</option>
                                <option defaultValue="Romance">Romance</option>
                                <option defaultValue="Mistery">Mistery</option>
                                <option defaultValue="ClassNameclassName=c">Clasic</option>
                                <option defaultValue="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" defaultValue="Save" />
                </fieldset>
            </form>
        </section>
    )
}
export default Edit