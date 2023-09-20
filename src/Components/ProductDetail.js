import React from 'react';
import {cardData1, cardData2} from "../Assets/ProductsData";
import {useParams, } from "react-router-dom";
import '../App.css'
import AskQuery from "./AskQuery";
const ProductDetail = () => {
    const { cardSet, id } = useParams()
    // const cardIndex = parseInt(id);

    const cardData = cardSet === 'cardSet1' ? cardData1 : cardData2;

    const card = cardData.find((card) => card.id === parseInt(id));
    if (!card) {
        return <div>Card not found</div>;
    }

    return (
        <div className="product-details-container">
            <div className="product-details-left" >
                <img src={card.imageSrc} alt="CardImage" />
                <h1>{card.title}</h1><br/>
                <p>{card.description}</p>
                <br/><br/>

            </div>
            <div className="v1"></div>
            <div className="product-details-right" >
                <h1>{card.title}</h1>
                <p>{card.details}</p><br/>
                <AskQuery title={card.title} description={card.description} />
            </div>

        </div>
    );
};

export default ProductDetail;
