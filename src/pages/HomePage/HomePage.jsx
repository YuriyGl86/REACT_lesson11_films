import { Input} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsListByQuery } from '../../store/thunks';
import { FilmList } from '../../components/FilmList';

const { Search } = Input;

export  function HomePage() {
    const dispatch = useDispatch();
    const { loading,filmsList } = useSelector((state) => state.films);

    const handleSearch =(value)=>{
        dispatch(fetchFilmsListByQuery(value))
    }


  return (
    <div className='search-container'>
        
        <Search placeholder="input search text" enterButton="Search" size="large" loading={loading} onSearch={handleSearch} defaultValue='terminator'/>

        <FilmList loading={loading} filmsList={filmsList.Search}/>

    </div>
  )
}


