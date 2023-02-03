import { useNavigate } from "react-router-dom";

const Create = ({ user }) => {
    const navigate = useNavigate();

    const onCreate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { title, description, imageUrl, type } = Object.fromEntries(formData);

        function addBookService(data, token) {
            fetch('http://localhost:3030/data/books', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'X-Authorization': token
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
        }

        addBookService({
            title: title,
            description: description,
            imageUrl: imageUrl,
            type: type
        }, user.accessToken);

        navigate('/');
    }

    return (
        <section id="create-page" className="create">
            <form onSubmit={onCreate} id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="ClassNameclassName=c">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Book" />
                </fieldset>
            </form>
        </section>
    )
}
export default Create