import React from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import CheckBoxStyles from './styles';

const CheckBox = ({
    id,
    isChecked,
    onCheckBoxSelection,
}) => {

    /**
     * @constant renderProductCheckBox
     * @description render product check box
    */
    const renderProductCheckBox = () => {
        const { checkBoxStyle } = CheckBoxStyles;
        return <TouchableOpacity onPress={() => {
            onCheckBoxSelection(id);
        }}>
            <Image
                style={checkBoxStyle}
                source={ isChecked ?
                    require("../../assets/checked.png"):
                    require("../../assets/unchecked.png")
                }
            />
        </TouchableOpacity>
    }
    
    return renderProductCheckBox();
}

export default CheckBox;
