import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ColorPropType
} from 'react-native';

export default props => {
    return(
        <View style={estilos.display}>
            <Text
                style={estilos.textoDisplayOperacao}
                numberOfLines={1}
            >{props.valor}
            </Text>
            <Text
                style={estilos.textoDisplayResult}
                numberOfLines={1}
            >{props.result}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    display:{
        flex:1,
        padding: 20,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'#0070ff',
        width:'100%'
    },
    textoDisplayResult:{
        fontSize:50,
        color:'#fffb00',
    },
    textoDisplayOperacao:{
        fontSize:25,
        color:'#fffb00',
    }
})