import { StyleSheet, Platform } from "react-native";

const ProductSubViewStyles = StyleSheet.create({
    productContainerStyle: {
        flexDirection: "row",
        alignItems: "center",
        margin: 8,
    },
    subProductContainerStyle: {
        marginLeft: 16,
    },
    productDetailContainerStyle: {
        flexDirection: "column",
        marginHorizontal: 8,
    },
});

export default ProductSubViewStyles;
