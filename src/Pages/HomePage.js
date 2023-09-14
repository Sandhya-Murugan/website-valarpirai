import React from 'react';
import ProductsListPage from "./ProductsListPage";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import ProductsCategoryPage from "./ProductsCategoryPage";

const HomePage = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    return (
        <div>
            {isMobile ? < ProductsCategoryPage /> : <ProductsListPage />}
        </div>
    );
};

export default HomePage;
