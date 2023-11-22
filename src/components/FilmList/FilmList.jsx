import { Avatar, Button, List, Skeleton, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { favoritesActions } from '../../store/slices/favoritesSlice';
import { Link } from 'react-router-dom';

export  function FilmList({ loading=false,filmsList }) {
    const dispatch = useDispatch();
    const { favoritesList } = useSelector((state) => state.favorites);

    const handleFavoriteClick = (e,item)=>{
        if(inFavorites(item)){
            dispatch(favoritesActions.deleteFromFavorites(item))
        } else {
            dispatch(favoritesActions.addToFavorites(item))
        }
    }

    const inFavorites = (film) => {
        return favoritesList.find(i=> i.imdbID === film.imdbID)
    }

    return (
        <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                dataSource={filmsList}
                renderItem={(item) => (
                    <List.Item
                        actions={[<Tooltip title={inFavorites(item)? "delete from favorites": "add to favorite"}>
                                    <Button type="primary" shape="circle" icon={inFavorites(item)?<StarFilled /> : <StarOutlined />} onClick={
                                        (e)=>{handleFavoriteClick(e,item)}}/>
                                </Tooltip>
                                ]}
                    >
                        <Skeleton avatar title={false} loading={loading} active>
                            <List.Item.Meta
                            avatar={<Avatar src={item.Poster} />}
                            title={<Link to={`/films/${item.imdbID}`}>{item.Title}</Link>}
                            description={`Year: ${item.Year}, Type: ${item.Type}, id: ${item.imdbID}`}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
    )
}
