/* eslint-disable react/prop-types */
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({monstersFiltered}) =>{
  return (
    <div className="card-list">
    {monstersFiltered.map((m) => {
      return <Card key={m.id} monster={m}/>;
    })}
  </div>
  )
}

export default CardList;
