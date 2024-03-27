import React from "react";
import "../style/Cards.css"

const Teach_Card = (props) => {
    return (
        <div>
            
                <article className="card">
                    <img
                        className="card__background"
                        src="https://i.imgur.com/QYWAcXk.jpeg"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width="1920"
                        height="2193"
                    />
                    <div className="card__content | flow">
                        <div className="card__content--container | flow">
                            <h2 className="card__title">{props.Title}</h2>
                            <p className="card__description">
                        {props.discription}
                            </p>
                        </div>
                        <button className="card__button">اطلاعات بیشتر  </button>
                    </div>
                </article>
            </div>
        
    )
}

export { Teach_Card }

