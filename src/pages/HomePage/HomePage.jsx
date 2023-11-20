import { Input,Avatar, Button, List, Skeleton, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsListByQuery } from '../../store/thunks';
import { StarOutlined } from '@ant-design/icons';

const { Search } = Input;

export  function HomePage() {
    const dispatch = useDispatch();
    const { loading,filmsList } = useSelector((state) => state.films);
    console.log(loading)
    console.log(filmsList)

    const handleSearch =(value)=>{
        dispatch(fetchFilmsListByQuery(value))
    }


  return (
    <div className='search-container'>
        
        <Search placeholder="input search text" enterButton="Search" size="large" loading={loading} onSearch={handleSearch} defaultValue='terminator'/>

        <List
            className="demo-loadmore-list"
            loading={loading}
            itemLayout="horizontal"
            dataSource={filmsList.Search}
            renderItem={(item) => (
                <List.Item
                    actions={[<Tooltip title="add to favorite">
                                <Button type="primary" shape="circle" icon={<StarOutlined />} />
                            </Tooltip>
                            ]}
                >
                    <Skeleton avatar title={false} loading={loading} active>
                        <List.Item.Meta
                        avatar={<Avatar src={item.Poster} />}
                        title={<a href="https://ant.design">{item.Title}</a>}
                        description={`Year: ${item.Year}, Type: ${item.Type}, id: ${item.imdbID}`}
                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    </div>
  )
}


