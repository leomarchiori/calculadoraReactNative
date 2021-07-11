import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Display from './src/componentes/Display';
import Btn from './src/componentes/Botao';

let estados={
  // Armazena os valores que estão sendo mostrados na tela, para realizar a operação
  valorTela:'',
  // Valor a apresentado na tela, embaixo da operação
  resultado:0,
  // Irá mostrar que a operação foi realizada, após clicar no sinal de igual
  operado:false,
  // Para indicar se um ponto foi adicionado, não podendo ter mais de um
  ponto:false,
}

function App () {

  // const [ operacao, setOperacao]=useState(0)
  // const [ resultado, setResultado]=useState(0)

  const [vtela, setVtela]=useState(estados.valorTela)
  const [vresult, setVresult]=useState(estados.resultado)
  
  // const efetuarConta = () => {
  //   // setResultado(parseInt(valor1)+parseInt(valor2))
  //   setResultado(eval(operacao))
  // }

  const addDigito=(digito)=>{

    if(digito=='+' || digito=='-' || digito=='/' || digito=='*'){
      estados.ponto=false
    }

    if(digito=='.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false
    }else if(digito=='.' && estados.ponto){
      return
    }

    if((digito=='+' || digito=='-' || digito=='/' || digito=='*') && estados.operado){
      estados.valorTela=estados.resultado
      estados.resultado=0
    }
    estados.valorTela=estados.valorTela+digito
    setVtela(estados.valorTela)
    setVresult(estados.resultado)
    estados.operado=false
  }

  const limparTela=()=>{
    estados={
      valorTela:'',
      resultado:0,
      operado:false,
      ponto:false,
    }
    setVtela(estados.valorTela)
    setVresult(estados.resultado)
  }

  const operar=(digito)=>{
    if (digito=='AC'){
      limparTela()
      return
    }
    if(digito=='BS'){
      estados.valorTela=vtela.substring(0, (vtela.length-1))
      setVtela(estados.valorTela)
      return
    }
    try{
      estados.resultado=eval(estados.valorTela)
      estados.operado=true
      setVresult(estados.resultado)
    }catch{
      estados.resultado='ERRO'
      estados.operado=true
      setVresult(estados.resultado)
    }
  }

  return (
    <SafeAreaView style={estilos.conteiner}>
      <Text> # Calculadora # </Text>
      <Display valor={vtela} result={vresult} />
      <View style={estilos.botoes}>
      <Btn label="AC" ac aoClicar={()=>{operar('AC')}}></Btn>
      <Btn label="(" aoClicar={()=>{addDigito('(')}}></Btn>
      <Btn label=")" aoClicar={()=>{addDigito(')')}}></Btn>
      <Btn label="/" operacao aoClicar={()=>{addDigito('/')}}></Btn>
      <Btn label="7" aoClicar={()=>{addDigito('7')}}></Btn>
      <Btn label="8" aoClicar={()=>{addDigito('8')}}></Btn>
      <Btn label="9" aoClicar={()=>{addDigito('9')}}></Btn>
      <Btn label="*" operacao aoClicar={()=>{addDigito('*')}}></Btn>
      <Btn label="4" aoClicar={()=>{addDigito('4')}}></Btn>
      <Btn label="5" aoClicar={()=>{addDigito('5')}}></Btn>
      <Btn label="6" aoClicar={()=>{addDigito('6')}}></Btn>
      <Btn label="-" operacao aoClicar={()=>{addDigito('-')}}></Btn>
      <Btn label="1" aoClicar={()=>{addDigito('1')}}></Btn>
      <Btn label="2" aoClicar={()=>{addDigito('2')}}></Btn>
      <Btn label="3" aoClicar={()=>{addDigito('3')}}></Btn>
      <Btn label="+" operacao aoClicar={()=>{addDigito('+')}}></Btn>
      <Btn label="0" aoClicar={()=>{addDigito('0')}}></Btn>
      <Btn label="." aoClicar={()=>{addDigito('.')}}></Btn>
      <Btn label="<-" bs aoClicar={()=>{operar('BS')}}></Btn>
      <Btn label="=" igual aoClicar={()=>{operar('=')}}></Btn>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  conteiner:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'

  },
  // botao:{
  //   backgroundColor:'#0053bf',
  //   padding: 20,
  // },
  // textoBotao:{
  //   color: '#fffb00'
  // }
  botoes:{
    flexDirection:"row",
    flexWrap:"wrap",
  }

});

export default App;
