import React, {useState} from "react";
import "./MovieRow.css";
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(-400)

    const handLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
             x = 0
        }
        setScrollX(x)
    }

    const handRightArrow = () => {

        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x)  {
            x = (window.innerWidth - listW) - 60;

        }
        setScrollX(x);

    }
    return (
        <div className="movieRow">
            <h2>{title}</h2>
                <div className="movieRow--left" style={{fontSize: 30}} onClick={handLeftArrow}>
                <GrPrevious />
                </div>
                <div className="movieRow--right" style={{fontSize: 30}} onClick={handRightArrow}>
                <GrNext />
                </div>


                <div className="movieRow--listarea" style={{marginLeft: scrollX,
                width: items.results.length * 200
                }}>
                    <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                             <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
                        </div>
                    ))}
                    </div>
               
                </div>
        </div>
    )
}