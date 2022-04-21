import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import CheckBox from '../CheckBox';
import ProductSubViewStyles from './styles';

const ProductSubView = ({
    productsData,
    onCheckBoxSelection,
}) => {

    /**
     * @constant renderProductDetailView
     * @description render product detail view
    */
    const renderProductDetailView = product => {
        const { productDetailContainerStyle } = ProductSubViewStyles;
        return <View style={productDetailContainerStyle}>
            <TouchableOpacity onPress={() => { onCheckBoxSelection(product.id, true); }}>
                <Text>{product?.title}</Text>
                { product?.description ?
                    <Text>{product.description}</Text> : <></> }
            </TouchableOpacity>
        </View>
    }

    /**
     * @constant renderSubView
     * @description render products sub view
    */
    const renderSubView = products => {
        const {
            productContainerStyle,
            subProductContainerStyle,
        } = ProductSubViewStyles;
        return <ScrollView>
            { products?.map(product => {
                return <View>
                    <View style={productContainerStyle}>
                        <CheckBox
                            id={product.id}
                            isChecked={product.isChecked}
                            onCheckBoxSelection={onCheckBoxSelection}
                        />
                        {renderProductDetailView(product)}
                    </View>
                    { product?.isExpanded && product?.children ?
                        <View style={subProductContainerStyle}>
                            {renderSubView(product?.children)}
                        </View> : <></> }
                </View>
            }) }
        </ScrollView>
    }
    
    return renderSubView(productsData);
}

export default ProductSubView;
