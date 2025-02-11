import RestaurantImages from "../assets/images/shutterstock_649541308-1.webp";
const Restorant = (props) => {
  const { resDataList } = props
  return (
      <div className="restorant-container">
         <img className="image" src={RestaurantImages}></img>
         <h4>{resDataList.name}</h4>
         <h5>{resDataList.cuisines.join(", ")}</h5>
         <h5>{resDataList.rating}</h5>
         <h5>{resDataList.sla.deliveryTime} Minutes</h5> 
      </div>
  )
}
export default Restorant;
