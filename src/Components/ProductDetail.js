import React from 'react';
import {cardData1, cardData2} from "../Assets/ProductsData";
import {useParams, } from "react-router-dom";
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import '../App.css'
import AskQuery from "./AskQuery";
const ProductDetail = () => {
    const { cardSet, id } = useParams()
    const cardIndex = parseInt(id);

    const cardData = cardSet === 'cardSet1' ? cardData1 : cardData2;

    const card = cardData.find((card) => card.id === parseInt(id));
    if (!card) {
        return <div>Card not found</div>;
    }

    const goToPreviousCard = () => {
        const previousCardIndex = cardIndex - 1;
        if (previousCardIndex >= 0) {
            window.location.href = `/productDetails/${cardSet}/${previousCardIndex}`;
        }
    };

    const goToNextCard = () => {
        const nextCardIndex = cardIndex + 1;
        if (nextCardIndex < cardData.length) {
            window.location.href = `/productDetails/${cardSet}/${nextCardIndex}`;
        }
    };
    return (
        <div className="card-details-container">
            <button className="prev-button" onClick={goToPreviousCard}>
                <CaretLeftOutlined />
            </button>
            <div className="card-details">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
                <img src={card.imageSrc} alt="CardImage" />
                <AskQuery title={card.title} description={card.description} />
            </div>
            <button className="next-button" onClick={goToNextCard}>
                <CaretRightOutlined />
            </button>
        </div>
    );
};

export default ProductDetail;
