import { skipToken } from "@reduxjs/toolkit/dist/query"
import {  useParams } from "react-router-dom"
import { useGetFilmQuery } from "../../store/slices/fetchAPI"
import { Image,Flex,Typography,Spin  } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const { Title, Paragraph,  } = Typography;

export  function FilmDetailViewPage() {
    const { id } = useParams()
    const {data, isLoading, isSuccess} = useGetFilmQuery(id || skipToken)


    return (
        <div>
            {isLoading && 
                <div className="spin">
                    <Spin
                        indicator={
                            <LoadingOutlined
                                style={{
                                fontSize: 44,
                                }}
                                spin
                            />
                        }
                    />
                </div>
            }
            {isSuccess && 
            <div>
                <Flex gap="middle" align="start" >
                    <Image
                        width={400}
                        src={data.Poster}
                        preview ={{scaleStep: 3}}
                        />
                    <Flex gap="samll" align="start" vertical>
                        <Title>{data.Title}</Title>
                        <Paragraph>
                            <ul>
                                <li>
                                    Год выпуск: {data.Year}
                                </li>
                                <li>
                                    Жанр: {data.Genre}
                                </li>
                                <li>
                                    Продолжительность: {data.Runtime}
                                </li>
                                <li>
                                    Режиссер: {data.Director}
                                </li>
                                <li>
                                    Актеры: {data.Actors}
                                </li>
                                <li>
                                    Рейтинг фильма: {data.imdbRating}
                                </li>
                            </ul>
                        </Paragraph>

                    </Flex>
                </Flex>
            </div>
                
            }


        </div>
    )
}
