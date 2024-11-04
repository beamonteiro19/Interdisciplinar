import React from "react";
import { useState } from 'react';
import { FundoBG, InputLogin, ContainerComponentes, TitlePequeno, FundoPicker, ContainerTopo, TitleGrande} from '../styles/styled';
import { ThemeProvider, Button} from '@rneui/themed';
import {Picker} from '@react-native-picker/picker';
import theme from '../styles/theme';
import { View, Image, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [selecioneCategoria, setSelecioneCategoria] = useState();
    const navigation = useNavigation();
   
return(
    <FundoBG>
        <ContainerTopo>
        <Image source={require('../images/iconLoginTopo.png')} style={{marginTop: 40, bottom: 5 }}/>
        </ContainerTopo>
        <ContainerComponentes>
            
        <ThemeProvider theme={theme}>
            <ScrollView style={{marginTop: 20}}>
                <View style={{height: 450, alignItems: 'center', justifyContent: 'space-evenly', marginTop: 30}}>
        <InputLogin placeholder='Email Estudantil / RA:' placeholderTextColor={'#999393'}/>
        <FundoPicker >
            <TitlePequeno style={{color:'#999393'}}>Selecione se você é:</TitlePequeno>
        <Picker style={{width: 160, backgroundColor: 'transparent', left: 7, color:'#999393', }}
        selectedValue={selecioneCategoria}
        onValueChange={(itemValue, itemIndex) =>
            setSelecioneCategoria(itemValue)
        }>
        <Picker.Item label="D.A" value="da" style={{fontFamily:'Bryndan Write_fix', fontSize: 20}}/>
        <Picker.Item label="Atlética" value="atletica" style={{fontFamily:'Bryndan Write_fix', fontSize: 20}} />
        <Picker.Item label="Aluno" value="aluno" style={{fontFamily:'Bryndan Write_fix', fontSize: 20}}/>
        </Picker>
        </FundoPicker>
        <InputLogin placeholder='Nome de usuário:' placeholderTextColor={'#999393'} />
        <InputLogin placeholder='Qual seu curso:' placeholderTextColor={'#999393'} />
        <InputLogin placeholder='Crie uma senha:'  placeholderTextColor={'#999393'}/>
        <InputLogin placeholder='Confirme a senha:' placeholderTextColor={'#999393'} />

        </View>
        <View style={{height: '20%', padding: 20}}>
        <Button title='CRIAR CONTA' titleStyle={{fontSize: 18}} onPress={() => navigation.navigate('ContaCriada')}/>
        <View style={{zIndex: 1, right: -10, top: -50}}> 
            <Image source={require('../images/nuvem.png')}/> 
        </View>
        </View>
        </ScrollView>
        </ThemeProvider>
    </ContainerComponentes>
        
    </FundoBG>
)
}
export const ContaCriada = () => {
    const navigation = useNavigation();
   
    return(
            <FundoBG>
               <ContainerTopo>
               <Image source={require('../images/iconLoginTopo.png')} style={{marginTop: 40, bottom: 5 }}/>
               </ContainerTopo>
               <ContainerComponentes>
                   <View style={{width: '80%', height: '90%', justifyContent: 'center', alignItems: 'center'}}>
                   <View style={{justifyContent: 'center', alignItems: 'center'}}>
               <Image source={require('../images/fundoCirculo.png')} style={{position: 'absolute'}}/>
                   <Image source={require('../images/circuloVerificado.png')} style={{position: 'absolute'}}/>
                   </View>
                   <TitleGrande style={{color: '#5D17EB', textAlign: 'center', marginTop: 150}}>Conta criada com sucesso!!!</TitleGrande>
                   <ThemeProvider theme={theme}>
                       <Button title={'OK'} buttonStyle={{height: 38, borderRadius: 20, width: 200, marginTop: 50, padding: 3}} titleStyle={{fontSize: 25}} 
                       onPress={() => navigation.navigate('TabBar')}/>
                   </ThemeProvider>
                   </View>
               </ContainerComponentes>
            </FundoBG>
        
    )
}
export default SignUp;