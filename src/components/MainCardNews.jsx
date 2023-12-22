import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataMock } from "../mock";
import { useNewsContext } from "../NewsContext";
import './main_card_news.css';


const MainNews = () => {

    const { data } = useNewsContext();
    const [value, setValue] = useState(dataMock);
    
  {/* useEffect(() => {
      if (data) {
        setValue(data);
      }
    }, [data]);
    
*/}
    const news = value.articles;
    
    return (
        <>
            {news[0] ?
                <div className="row d-flex flex-column flex-md-row py-4 px-3">

                    <div className="col-md-6 position-relative">
                        <span className="card__span__main">{news[0].source.name}</span>
                        <img className="img-set " src={news[0].urlToImage}></img>
                    </div>

                    <div className="col-md-6">

                        <Link to={`/news/${news[0].title}`} className="font-mod-main">{news[0].title}</Link>

                        <p>{news[0].description}</p>
                    </div>

                </div> : null}

        </>
    )
}

export default MainNews;