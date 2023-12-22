import React from "react";
import './components.css'
import { Link } from "react-router-dom";

const Card = ({ author, imageSRC, url, title, content, description, source }) => {


  return (

    <div className="card-body">
      <div className="card__corner"></div>
      <div className="card__img">
        <span className="card__span">{source.name}</span>
        <img src={imageSRC}></img>
      </div>
      <div className="card-int">
        <a href={url} className="card-int__title">{title}</a>
        <p className="excerpt">{content}</p>

      </div>
    </div>
  )

}

export default Card;