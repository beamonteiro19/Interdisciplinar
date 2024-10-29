import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {ContainerJogos} from '../styles/styled';


interface props {
    titulo: string;
    inscritos: string;
    endereco: string;
    dataEvento: string;
}
export const CardEventos = ({titulo, inscritos, endereco, dataEvento}:props)=>{ 
    return(
        <ContainerJogos>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}> 
            <Text style={{fontSize: 15, color: 'black'}}>{titulo}</Text>
            <View style={{backgroundColor: '#5D17EB', borderRadius: 3}}>
                    <Text style={{color: 'white', paddingHorizontal: 6, fontSize: 13}}>{dataEvento}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', columnGap: 10, marginTop: 10}}>
                <View style={{borderWidth: 1, borderColor: '#5D17EB', borderRadius: 5, height: 19, width: 44, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 10, color: '#5D17EB', textAlign: 'center'}}>Esporte</Text>
                </View>
                <View style={{width: 105, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width: 80, height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../images/icons/perfilCalendar.png')} />
                <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 2, marginLeft: -15, }}/>
                <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 3, marginLeft: -15}}/>
                <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 4, marginLeft: -15}}/>
                </View>
                <Text style={{fontSize: 12, color: '#999393', bottom: 5}}>+{inscritos}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
                    <Image source={require('../images/icons/localizacao.png')}/>
                    <Text style={{fontSize: 10, color: 'black'}}>{endereco}</Text>
                </View>
        </ContainerJogos>
    )
}
export const ItensMenu = () =>{
    return(
        <View style={{backgroundColor: '#5D17EB', borderRadius: 10, alignItems: 'center', justifyContent: 'space-evenly', width: 174, height: 170}}>
            <TouchableOpacity style={{ width: '100%',alignItems: 'center', borderBottomColor: 'white', borderBottomWidth:2, height:54, justifyContent: 'center'}}>
                <Text style={{fontSize: 22, textAlign: 'center', color: 'white'}}>Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth:2,height:54, justifyContent: 'center'}}>
                <Text style={{fontSize: 22, textAlign: 'center',color: 'white'}}>Meus Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', alignItems: 'center', height:60, justifyContent: 'center'}}>
                <Text style={{fontSize: 22, textAlign: 'center', color: 'white'}}>Eventos que participei</Text>
            </TouchableOpacity>
        </View>
    )
}

const Calendar = () => {
    const [menu, setMenu] = useState(false);

    function mostrarMenu() {
    setMenu(!menu); 
  }
    
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
            <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Image source={require('../images/icons/perfilHome.png')} style={styles.profileIcon} />
          </View>
          <Text style={styles.profileText}>D.A FATEC JD</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignSelf: 'flex-end', right: 20}}
      onPress={mostrarMenu} >
      <Image source={require('../images/icons/menuOptions.png')} style={styles.menu}/>
      </TouchableOpacity>
      {menu && ( 
        <View style={{ marginTop: 20, zIndex: 2, position: 'absolute', top: 75, right: 10,}}>
            <ItensMenu />
            </View>
      )}
      
      <View style={styles.containerTitle}>
            <Text style={styles.title}>CALENDARIO</Text>
            </View>
            <View style={styles.mesContainer}>
                <View style={styles.meses}> 
                    <TouchableOpacity>
                <Image source={require('../images/icons/setaEsquerda.png')}/>
                </TouchableOpacity>
                <Text style={styles.textMes}>Julho</Text>
                <TouchableOpacity>
                <Image source={require('../images/icons/setaDireita.png')}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerCalendario}>
                <View style={styles.dataContainer}>
                    <Text style={styles.diaSemana}>Qua</Text>
                    <Text style={styles.diaEvento}>17</Text>
                </View>
                <View style={{width: '60%', alignItems: 'flex-end', paddingRight: 3}}>
                <Text style={styles.mesEvento}>julho</Text>
                <View style={styles.diasCalendarioContainer}>
                    <View style={styles.containerDia}>
                <Text style={styles.diaCalendario}>1</Text>
                <Text style={styles.diaCalendario}>2</Text>
                </View>
                </View>
                </View>

            </View>
            <View style={styles.containerAdd}>
                <View style={styles.dataAtual}>
                <Text style={{fontSize: 16, color: '#5D17EB'}}>SEG</Text>
                <Text style={{fontSize: 16, color: '#5D17EB'}}>9</Text>
                </View>
                <TouchableOpacity>
                <View style={styles.add}>
                    <Image source={require('../images/icons/mais.png')}/>
                <Text style={{fontSize: 18, color: '#5D17EB'}}>ADD</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{width:'90%', marginTop: 30}}>
            <Text style={styles.dataCompleta}>segunda-feira, dia 9 de setembro de 2024:</Text>
            </View>
           <CardEventos titulo='INTERFACE: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul'/>
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#5D17EB',
        padding: 15,
        width: '100%'
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileIconContainer: {
        backgroundColor: '#D9D9D9', 
        borderRadius: 20, 
        padding: 5, 
      },
      profileIcon: {
        width: 30,
        height: 30,
      },
      profileText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
      },
      menu:{
        alignSelf: 'flex-end',
        marginTop: 10
      },
      containerTitle:{
        height: 80,
        alignItems: 'center',
        justifyContent: 'center', marginBottom: 20
      },
      title: {
        fontSize: 32,
        color: '#5D17EB',
      },
      textMes:{
        fontSize: 25,
        color: '#5D17EB',
      },
      mesContainer:{
        width: '90%',
        height: 58,
        borderRadius: 10,
        borderColor: '#5D17EB',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
      },
      meses:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
      },
      containerCalendario:{
        width: '90%',
        height: 214,
        backgroundColor: '#5D17EB',
        borderRadius: 10,
        marginTop: 10,
         flexDirection: 'row'
      },
      dataContainer:{
        width: 140,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      diaSemana: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
      },
      mesEvento:{
        fontSize: 20,
        textAlign: 'right',
        color: 'white',
        top: 10,
        right: 5
      },
      diaEvento: {
        fontSize: 65,
        textAlign: 'center',
        color: 'white',
      },
      diaCalendario:{
        textAlign: 'center',
        color: 'white',
        fontSize: 13,
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 3
      },
      diasCalendarioContainer:{
        width: 170,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 25,
      },
      containerDia:{
       flexDirection: 'row', 
       gap: 5,
       width: '100%',
       flexWrap: 'wrap',
       justifyContent: 'flex-start'
      },
      add: {
        height: 47,
        width: 74,
        borderWidth: 1,
        borderColor: '#5D17EB',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 3
      },
      containerAdd: {
        flexDirection: 'row', 
        width: '50%', 
        alignSelf: 'flex-end', 
        justifyContent: 'flex-end', 
        right: 20, 
        marginTop: 20,
        columnGap: 10
      },
      dataAtual: {
        height: 47,
        width: 74,
        borderWidth: 1,
        borderColor: '#5D17EB',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
      dataCompleta:{
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 25
      }

      

})
export default Calendar;