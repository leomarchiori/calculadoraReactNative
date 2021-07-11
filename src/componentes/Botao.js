import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';

export default props => {

    const estilosBotoes=[estilos.btn]
    if (props.duplo){
        estilosBotoes.push(estilos.btnDuplo)
    }
    if (props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if (props.operacao){
        estilosBotoes.push(estilos.btnOperacao)
    }
    if (props.ac){
        estilosBotoes.push(estilos.btnAC)
    }
    if (props.bs){
        estilosBotoes.push(estilos.btnBS)
    }

    return(
        <TouchableHighlight
            onPress={props.aoClicar}
        >
            <Text style={estilosBotoes}>{props.label}</Text>

        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    btn:{
        fontSize:30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor:'#0053bf',
        color: '#00ffff',
        //borderWidth:1,
        borderColor:'#fffb00',
        textAlign:'center',
    },
    btnOperacao:{
        color: '#00ff08',
        backgroundColor:'#00aeff'
    },
    btnIgual:{
        color: '#ccff00',
        backgroundColor:'#0089c9'
    },
    btnAC:{
        color: '#00ff88',
        backgroundColor:'#00aeff'
    },
    btnBS:{
        color: '#ccff00',
        backgroundColor:'#006a9c'
    },
    btnDuplo:{
        width: (Dimensions.get('window').width/4)*2,
    },
})