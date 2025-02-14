import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfRestuarant, setList] = useState([]);
    const [searchResName,setSearch] = useState("");
    const [listOfFilterRes,setFilteredRes] = useState([])
    useEffect(() => {
        fetchResturantData();
    },[])

    const fetchResturantData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.315118&lng=73.239674&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        const dataoflist = json.data.cards.map((list) =>{
            if(list.card.card.gridElements && list.card.card.gridElements.infoWithStyle && list.card.card.gridElements.infoWithStyle.restaurants){
                return list;
            }
        })
        const filterdata = dataoflist.filter((obj)=> obj != undefined)
        setList(filterdata[0].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRes(filterdata[0].card.card.gridElements.infoWithStyle.restaurants)
        
    }

    if(listOfRestuarant.length == 0){
        return <Shimmer/>
    }

    return (
        <div className="body-container">
            <div className="filter">
                <div className='search'>
               <input className="search-hotel" 
                value={searchResName} 
                onChange={(e)=>{setSearch(e.target.value)}}>
              </input><button onClick={() => {
                    let filterName = listOfRestuarant.filter((resName)=> resName.info.name.toLowerCase().includes(searchResName.toLowerCase()))
                    setFilteredRes(filterName);
                }}>Search</button></div>
                <button className="topRatedRestaurant" onClick={() => {
                    let filterList = listOfRestuarant.filter((restList) => restList.info.rating > 4.5)
                    setFilteredRes(filterList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="resturant-name">
                {listOfFilterRes.map((restuarant) =>
                    (<Link to={"/restaurant/" + restuarant.info.id}><Restaurant key={restuarant.info.id} resDataList={restuarant.info} /></Link>)
                )}
            </div>
        </div>
    )
}

export default Body;
