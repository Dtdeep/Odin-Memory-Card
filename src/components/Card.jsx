import "../css/Card.css";
const Card = ({ name, imageUrl, clickEvent }) => {
  return (
    <div className="cardDiv" onClick={() => clickEvent(name)}>
      <img src={imageUrl} alt="Dream Journey" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
