import React, {useState} from "react";
import {cardData1} from "../Assets/ProductsData";
import {Card, Carousel, Col, Select} from "antd";
import "../App.css";
import {Header} from "antd/es/layout/layout";
import ProductsList from "./ProductsList";

const SearchBar = () => {
    const [category, setCategory] = useState(''); // Initial category state
    const filteredProducts = category
        ? cardData1.filter(product => product.category === category)
        : cardData1;
    return(
        <div>
            <div className="Search-bar">
                <Header style={{backgroundColor:"red"}}>
                        <Select
                            className="Search-Bar"
                            showSearch
                            placeholder="Search For"
                            onChange={(value) => setCategory(value)}
                        >
                            <Select.Option value="">All</Select.Option>
                            <Select.Option value="sofa">Sofa</Select.Option>
                            <Select.Option value="tech">Tech</Select.Option>
                            {/* Add more category options */}
                        </Select>
                </Header>

            </div>
            <div className="product-list">
                {filteredProducts.map((product) => (
                            <div key={product.id} >

                                {/*<img style={{marginTop:"10%"}} src={product.imageSrc} alt={product.name} />*/}
                                <h2>{product.name}</h2>
                                 {/*<p>{product.description}</p>*/}
                            </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBar;