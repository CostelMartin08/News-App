import React, { useState, useEffect } from "react";
import Card from "./CardNews";
import { dataMock } from "../mock";
import { useNewsContext } from "../NewsContext";

const CardGrid = () => {


  const { data } = useNewsContext();
  const [value, setValue] = useState(dataMock);

  useEffect(() => {
    if (data) {

      setValue(data);

    }
  }, [data]);


  const news = value.articles;

  return (
    <div className="grid-mode">

      {news && news.map((article, index) => (

        index > 0 && (

          <div key={index}>
            <Card
              author={article.author}
              imageSRC={article.urlToImage}
              url={article.url}
              title={article.title}
              content={article.content}
              description={article.description}
              source={article.source}
            />
          </div>
        )
      ))
      }
    </div>

  )
}


export default CardGrid;