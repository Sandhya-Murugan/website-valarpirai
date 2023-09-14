import ProductsList from "../Components/ProductsList";
import {cardData1} from "../Assets/ProductsData";
import {cardData2} from "../Assets/ProductsData";

function ProductListPage() {
    return (
        <div className="App">
            <ProductsList cardData={cardData1} cardSet="cardSet1"/><br/><br/>
            <ProductsList cardData={cardData2} cardSet="cardSet2"/><br/><br/>
        </div>
    );
}

export default ProductListPage;
