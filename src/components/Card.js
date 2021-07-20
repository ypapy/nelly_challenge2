
function Card(props) {

    const {title, image, id} = props;
    return (
        
        <div key={id}>
            <div className="card">
                <h3>{title}</h3>
                <img src={image} />
            </div>
        </div>
    )
}

export default Card;
