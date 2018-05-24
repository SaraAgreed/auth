import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {      // here on press is our props which has been passed from the AlbumDetail.js

    const { buttonStyle, textStyle } = styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}     //the 1st onPress is the function & 2nd onPress is the props
        >   
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
buttonStyle: {
    flex:1,     //allowing the component to expand as much as it can
    alignSelf:'stretch',   //applied to flexBox
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5,

},
textStyle: {
    alignSelf:'center',
    color:'#007aff',
    fontSize:16,
    fontWeight:'600',
    paddingTop:10,
    paddingBottom:10
    
}
};
export { Button } ;
