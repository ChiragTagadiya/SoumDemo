import React, { useState } from 'react';
import ProductSubView from '../components/ProductSubView';
import productsMockData from '../mock.json';


const ProductList = () => {
    const [products, setProducts] = useState(productsMockData);

    /**
     * @constant checkForParentProductSelection
     * @description change parent product selection
    */
    const checkForParentProductSelection = product => {
        product?.children?.map(subProduct => {
            subProduct.isChecked = product.isChecked;
            if (subProduct?.children) {
                const parentSelection = checkForParentProductSelection(subProduct);
                subProduct = {
                    ...subProduct,
                    children: parentSelection,
                };
            }
            return subProduct;
        });
        return product;
    }

    /**
     * @constant checkSubProductSelection
     * @description change sub product selection
    */
    const checkSubProductSelection = product => {
        const checkedCount =
            product.children.filter(subProduct => subProduct?.isChecked);
        return product.children.length === checkedCount.length;
    }

    /**
     * @constant mutateSelection
     * @description mutate product selection
    */
    const mutateSelection = (productsData, selectedProductId, isForExpand) => {
        const finalData = productsData?.map(product => {
            let subProduct = product;
            if (product?.id === selectedProductId) {
                if (isForExpand) {
                    product.isExpanded = !(product.isExpanded);
                } else {
                    product.isChecked = !(product.isChecked);
                }
                if (product?.children) {
                    subProduct = checkForParentProductSelection(product);
                }
            }
           
            if (product?.children) {
                subProduct = {
                    ...product,
                    children:
                        mutateSelection(product?.children, selectedProductId, isForExpand),
                };
                subProduct["isChecked"] = checkSubProductSelection(subProduct);
                return subProduct;
            } else  {
                return product;
            }
        });
        return finalData;
    }

    /**
     * @constant onCheckBoxSelection
     * @description change check box selection and
     * expand/ collapse product tree
    */
    const onCheckBoxSelection = (selectedProductId, isForExpand) => {
        const tempProducts = mutateSelection(products, selectedProductId, isForExpand);
        setProducts(tempProducts);
    }

    return <ProductSubView
        productsData={products}
        onCheckBoxSelection={onCheckBoxSelection}
    />
 };
 
 export default ProductList;
 