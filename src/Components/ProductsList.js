import React from 'react';
import {Card, Col,Carousel} from 'antd';
import {Link} from "react-router-dom";
import AskQuery from "./AskQuery";
import "../App.css"

const { Meta } = Card;



const MyCards = ({cardData, cardSet}) => {

    const responsiveSettings = [
        {
            breakpoint:400, // Define your mobile breakpoint here (e.g., 768px)
            settings: {
                slidesToShow: 2, // Show 1 card at a time on mobile
                slidesToScroll: 1, // Scroll 1 card at a time on mobile
            },
        },
        {
            breakpoint: 992, // Define your tablet breakpoint here (e.g., 992px)
            settings: {
                slidesToShow: 3, // Show 3 cards at a time on tablets
                slidesToScroll: 1, // Scroll 3 cards at a time on tablets
            },
        },
        {
            breakpoint: 2000, // Define your larger screen breakpoint here (e.g., 1200px)
            settings: {
                slidesToShow: 5, // Show 5 cards at a time on larger screens
                slidesToScroll: 1, // Scroll 5 cards at a time on larger screens
            },
        },
    ];

    const imageAspectRatio = 16 / 12;

    const carouselRef = React.useRef();

    return (
        <div>
            <Carousel  responsive={responsiveSettings} dotPosition="none" ref={carouselRef}  >
                {cardData.map((card, index) => (
                    <Col key={index} xs={23} sm={20} md={20} lg={20}>
                        <Link to={`/productDetails/${cardSet}/${index}`}>
                            <Card
                                hoverable
                                style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                                cover={
                                    <img style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%',
                                        aspectRatio: `${imageAspectRatio}`,
                                    }} alt={card.title} src={card.imageSrc} />
                                }
                            >

                                <div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                                    <div>
                                        <Meta title={card.title} description={card.description} />
                                    </div>
                                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                        <AskQuery title={card.title} description={card.description} />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Carousel>

        </div>

    );
};

export default MyCards;
