import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow,setIsShow] = useState(false)
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce((preValue, currentItem)=> preValue + currentItem.price, 0)
      setTotalPrice(parseFloat(total).toFixed(2))

    }
    else {
      setNofound("No Data Found");
    }

  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound("No Data Found");
  };

  return (
    <div>
      {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      : <div>
         {favorites.length > 0 && (
         <div className="flex flex-col justify-center items-center py-10">
           <button
              onClick={handleRemove}
              className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Delete
            </button> 
            <h1 className="py-5 text-lg font-semibold">Total Favorites Items Price: ${totalPrice}</h1>
         </div>
         )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          { 
            isShow ? favorites.map(phone=> (
              <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
            ))  
            : favorites.slice(0,4).map((phone) => (
              <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
            ))
          }
        </div>

        <div className="flex justify-center items-center py-10">
        {favorites.length > 4 && <button
              onClick={()=>setIsShow(!isShow)} 
              className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              {isShow ? "See less" : "See more"}          
          </button>
        }
        </div>
      </div>
      }
    </div>
  )
}

export default Favorites
