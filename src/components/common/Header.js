// Import libraries for making the component
import React from 'react';
import {
    Text,
    View
} from 'react-native';

// Make the component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor : '#F0F0F0',
        justifyContent  : 'center',
        alignItems      : 'center',
        height          : 60,
        paddingTop      : 15,
        shadowColor     : '#000',
        shadowOffset    : {
            width  : 0,
            height : 5,
        },
        shadowOpacity: .2,
        elevation: 2
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export { Header };
