import React from 'react';
import {WhatsAppOutlined} from "@ant-design/icons";


const AskQuery = ({title, description}) => {
    const phoneNumber = "7402413714";
    const handleWhatsAppShare = (description, title) => {
        const whatsappMessage = `Check out this : ${title} \n\n ${description}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    };
    return (
        <div>
            <WhatsAppOutlined
                style={{color:"green", fontSize:"30px", transition: 'font-size 0.1s'}}
                onClick={() => handleWhatsAppShare(title, description)}
                onMouseEnter={(e) => {
                    e.target.style.fontSize = '40px'; // Increase font size on hover
                }}
                onMouseLeave={(e) => {
                    e.target.style.fontSize = '30px'; // Reset font size on hover out
                }}
            />
        </div>
    );
};

export default AskQuery;
