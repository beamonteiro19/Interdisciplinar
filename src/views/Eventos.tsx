import React, { useState} from "react";
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { Button, SearchBar } from '@rneui/themed';
import { ItensMenu } from "./Calendar";

interface props {
  titulo: string;
  inscritos: string;
  endereco: string;
  dataEvento: string;
  tipoEvento: string;
  imagem: undefined;
  iconCard: undefined;
}

{/* card de eventos da atletica e DA */}

 const CardEventos = ({titulo, inscritos, endereco, dataEvento, tipoEvento, imagem, iconCard}:props)=>{ 
  return(
    <View style={{backgroundColor: 'white',borderWidth: 1, borderColor: '#5D17EB', borderRadius: 15, justifyContent: 'flex-start', alignItems: 'flex-start', height: 275, width: 350}}>
      <Image source={imagem} style={{width: 347, height: 182, marginBottom: 5,  borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomWidth: 5, borderColor: 'green'}}/>
      <View style={{backgroundColor: '#5D17EB', borderRadius: 3, alignSelf: 'flex-end', top: 10, right: 10, position: 'absolute'}}>
                  <Text style={{color: 'white', paddingHorizontal: 6, fontSize: 13, fontFamily: 'Bryndan Write_fix'}}>{dataEvento}</Text>
              </View>
      <View style={{left: 10}}>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}> 
          <Text style={{fontSize: 15, color: 'black', fontFamily: 'Sprite Graffiti Regular'}}>{titulo}</Text>
          
          </View>
          <View style={{flexDirection: 'row', columnGap: 10, marginTop: 6, alignItems: 'center'}}>
              <View style={{borderWidth: 1, borderColor: '#5D17EB', borderRadius: 5, height: 19, width: 44, alignItems: 'center', justifyContent: 'center', bottom: 4}}>
                  <Text style={{fontSize: 10, color: '#5D17EB', textAlign: 'center', fontFamily: 'Bryndan Write_fix'}}>{tipoEvento}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between'}}>
              <View style={{width: 105, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{width: 80, height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../images/icons/perfilCalendar.png')} />
              <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 2, marginLeft: -15, }}/>
              <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 3, marginLeft: -15}}/>
              <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 4, marginLeft: -15}}/>
              </View>
              <Text style={{fontSize: 12, color: '#999393', bottom: 5, fontFamily: 'Bryndan Write_fix'}}>+{inscritos}</Text>
              </View>
              <TouchableOpacity>
              <Image source={iconCard}/>
              </TouchableOpacity>
              </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
                  <Image source={require('../images/icons/localizacao.png')}/>
                  <Text style={{fontSize: 10, color: 'black', fontFamily: 'Bryndan Write_fix'}}>{endereco}</Text>
              </View>
              </View>
              </View>
  )
}
{require('../images/icons/setaDireita.png')}

const Eventos = () => {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    function mostrarMenu() {
    setMenu(!menu); 
  }
    return(
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{width: '65%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity style={{left: 0}}>
                <Image source={require('../images/icons/setaEsquerda.png')} style={{tintColor: 'white'}}/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>D.A FATEC JD</Text>
                </View>
            </View>
            <TouchableOpacity style={{alignSelf: 'flex-end', right: 20}}
      onPress={mostrarMenu} >
      <Image source={require('../images/icons/menuOptions.png')} style={styles.menu}/>
      </TouchableOpacity>

      {/* menu com os eventos, e eventos do usuario */}
      {menu && ( 
        <View style={{ marginTop: 20, zIndex: 2, position: 'absolute', top: 75, right: 10,}}>
            <ItensMenu />
            </View>
      )}
      <View style={styles.containerTitle}>
        <Text style={styles.estiloTitle}>EVENTOS</Text>
       
        {/* barra de pesquisa */}
        <SearchBar 
        containerStyle={{width: 320, borderTopColor: 'transparent', borderBottomColor: 'transparent', backgroundColor: 'transparent', }} 
        lightTheme={true} 
        inputContainerStyle={{height: 35, borderRadius: 30, paddingLeft: 10, borderColor: '#5D17EB', borderWidth: 1, backgroundColor: 'white', borderBottomWidth: 1}} 
        clearIcon 
        placeholderTextColor={'#999393'} 
        placeholder="Pesquise por eventos" 
        inputStyle={{fontSize: 13, justifyContent: 'center', alignSelf: 'center', fontFamily: 'Sprite Graffiti Regular' }}
        onChangeText={updateSearch} 
        value={search} 
        searchIcon={{size: 30, color: '#5D17EB'}}
   />
      </View>

      {/* botoes para cada tipo de evento */}
      <View style={{height: 50, marginTop: 10}}>
      <ScrollView horizontal>
      <View style={styles.containerBotoes}>
        <Button buttonStyle={styles.estiloBotaoTd} title="Todos" titleStyle={styles.titleStyleTd} containerStyle={{borderRadius: 10}}/>
        <Button buttonStyle={styles.estiloBotoes} title="Esporte" titleStyle={styles.titleStyle} containerStyle={{borderRadius: 10}}/>
        <Button buttonStyle={styles.estiloBotoes} title="Art" titleStyle={styles.titleStyle} containerStyle={{borderRadius: 10}}/>
        <Button buttonStyle={styles.estiloBotoes} title="Comunicação" titleStyle={styles.titleStyle} containerStyle={{borderRadius: 10}}/>
        <Button buttonStyle={styles.estiloBotoes} title="Festas" titleStyle={styles.titleStyle} containerStyle={{borderRadius: 10}}/>

      </View>
      </ScrollView>
      </View>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
      <View style={{rowGap: 30, width: '100%'}}>
      <CardEventos iconCard={require('../images/icons/setaDireita.png')} imagem={require('../images/imagemEvento.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul' tipoEvento="Esporte"/>
      <CardEventos iconCard={require('../images/icons/estrelaEvento.png')} imagem={require('../images/feedDA.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='5-9 Ago' tipoEvento="Comum"/>
      
      </View>
      </View>
      
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        alignItems: 'center'   
    },
    header: {
        backgroundColor: '#5D17EB', 
        width: '100%',
        height: 60,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    titleHeader:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Sprite Graffiti Regular'
    },
    menu:{
        alignSelf: 'flex-end',
        marginTop: 10,
      },
      containerTitle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        marginTop: 15
      },
      estiloTitle: {
        fontSize: 30,
        color: '#5D17EB',
        fontFamily: 'Sprite Graffiti Regular' ,
      },
      containerBotoes: {
        flexDirection: 'row',
        height: 30,
        columnGap: 10,
        marginLeft: 10,
        marginTop: 3,
        marginBottom: 2
      },

      titleStyle: {
        color: '#5D17EB',
        fontSize: 12,
        fontFamily: 'Bryndan Write_fix'
      },
      titleStyleTd: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Bryndan Write_fix'
      },
      estiloBotoes: {
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#5D17EB', 
        borderWidth: 1, 
        width: 98, 
        height: 25, 
        padding: 1, 
        borderRadius: 20
      },
      estiloBotaoTd: {
        backgroundColor: '#5D17EB', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#5D17EB', 
        borderWidth: 1, 
        width: 98, 
        height: 25, 
        padding: 1, 
        borderRadius: 20

      }
     

      
})
export default Eventos;