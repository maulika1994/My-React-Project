import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState([])
    const {resID} = useParams();
    useEffect(()=> {
        fetchRestaurantMenu();  
    },[])

    const fetchRestaurantMenu = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.315118&lng=73.239674&restaurantId='+resID+'&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json();
        setResInfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4] ? 
                  json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards :
                  json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    }
    return(
        <div className ="menu">
           {/* <h1>{resInfo[0].card.info.category}</h1> */}
             <h2>Menu</h2>
             <ul>
                {resInfo.map((item) => 
                <li>{item.card.info.name} - {"Rs."}{item.card.info.defaultPrice ? item.card.info.defaultPrice :item.card.info.price/100}</li>
                )}
             </ul>
        </div>
    )

}
export default RestaurantMenu;





