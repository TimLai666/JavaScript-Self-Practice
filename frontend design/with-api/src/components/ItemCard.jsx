import "./ItemCard.css";

function ItemCard(props) {
  const { title, km } = props;
  return (
    <div className="item-card">
      {/* <img width={"100%"} src=""/> */}
      <h5 className="item-title">{title} 月</h5>
      <div>合計 {km}km</div>
    </div>
  );
}

export default ItemCard;
