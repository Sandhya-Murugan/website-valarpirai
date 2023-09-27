import {Carousel} from "antd";

const OfferZone = ({data}) => {
    const imageAspectRatio = 8 / 6;
    return(
        <div>

                <Carousel style={{color:"red"}} dotPosition="top" autoplay={true} >
                    {data.map((offer) => (
                    <div key={offer.id}>
                        <img src={offer.imageSrc} style={{height:"500px", width:"100%", aspectRatio: `${imageAspectRatio}`}}/>
                    </div>
                    ))}
                </Carousel>


        </div>
    )
}

export default OfferZone;