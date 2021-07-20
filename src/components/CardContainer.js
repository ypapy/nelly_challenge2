import Card from "./Card";
import test from "../img/test.png"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function CardContainer() {
    const { id } = useParams();
    const [data, setData] = useState(''); 
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(res=>{
            setData(res.data);
        })
    }, [id])
    return (
        <div className="card_container">
            {data && data.map(el=>(
                <Card title={el.title} image={el.thumbnailUrl} id={el.id}/>
            ))}
        </div>
    )
}

export default CardContainer
