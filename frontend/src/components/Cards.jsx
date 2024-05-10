//shall we include an icon img  in this as well?
function Card({ title, details }) {
    return (
        <div div className="card">
            {/* {icon && <img src={icon} alt={title} />} */}
            <h3>{title}</h3>
            {details}

        </div>
    );

}
export default Card;