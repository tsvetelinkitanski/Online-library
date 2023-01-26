const Details = () => {
    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>A Court of Thorns and Roses</h3>
                <p className="type">Type: Fiction</p>
                <p className="img"><img src="/public/images/book1.png" /></p>
                <div className="actions">
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>

                    <a className="button" href="#">Like</a>

                    <div className="likes">
                        <img className="hearts" src="/public/images/heart./png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div className="book-description">
                <h3>Description:</h3>
                <p>Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold,
                    bleak place in the long winter months. So when she spots a deer in the forest being pursued by a
                    wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and
                    killing something so precious comes at a price ...</p>
            </div>
        </section>
    )
}
export default Details;