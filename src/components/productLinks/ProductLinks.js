import React from "react";
import ProductCard from "../resusable/ProductCard";
import "../../static/css/main_content/ProductLink.css";

const ProductLinks = () => {
    return (
        <div className="products_link_container">
            <ProductCard imageClassName="image_div image_1" buttonName="Shop all Coats" />
            <ProductCard imageClassName="image_div image_2" buttonName="Shop all T-Shirts" />
            <ProductCard imageClassName="image_div image_3" buttonName="Shop all Shoes" />
            <ProductCard imageClassName="image_div image_4" buttonName="Shop all Watches" />
        </div>
    );
}

export default ProductLinks;