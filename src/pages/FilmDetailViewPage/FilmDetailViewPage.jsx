import { skipToken } from "@reduxjs/toolkit/dist/query"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetFilmQuery } from "../../store/slices/fetchAPI"

export  function FilmDetailViewPage() {
    const { id } = useParams()
    const {data, error, isLoading, isSuccess} = useGetFilmQuery(id || skipToken)        

    // useEffect(()=>{

    // }, [])

    return (
        <div>
            {isLoading && 'loading'}
            {isSuccess && <pre>
                {JSON.stringify(data,null,2)}
            </pre>}

        </div>
    )
}
