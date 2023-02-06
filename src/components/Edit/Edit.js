import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { updateBook } from "../../api/data";

const Edit = ({ user }) => {
    const params = useParams();
    const token = user.accessToken;
    const id = params.id
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        type: '',
    });

    useEffect(() => {

        fetch(`http://localhost:3030/data/books/${id}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const { title, description, imageUrl, type } = Object.fromEntries(formData);

        updateBook({ title, description, imageUrl, type }, id, token)
            .then(() => {
                navigate(`/details/${id}`);
            })
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
                                <option value="Fiction">{data.type}</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="ClassNameclassName=c">Clasic</option>
                                <option value="Other">Other</option>
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