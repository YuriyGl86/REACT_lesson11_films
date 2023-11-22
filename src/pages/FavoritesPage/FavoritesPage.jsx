import {  useSelector } from "react-redux";
import { FilmList } from "../../components/FilmList";

export  function FavoritesPage() {

    const { favoritesList } = useSelector((state) => state.favorites);
    console.log(favoritesList)
    
    return (
      <FilmList filmsList={favoritesList}/>
    )
}
