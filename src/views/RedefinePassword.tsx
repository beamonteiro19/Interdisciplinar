import { FundoBG,InputLogin, ContainerComponentes, ContainerTopo, TitleGrande, LogoLogin, TitleMedio} from '../styles/styled';
import { View, Image, } from "react-native";
import { Button, ThemeProvider} from '@rneui/themed';
import theme from '../styles/theme';


const RedefinePassword = () => {
    return(
        <FundoBG>
            <ContainerComponentes>
                <ThemeProvider theme={theme}>
                <View style={{height: '60%', width: '90%', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <LogoLogin source={require('../images/logoLogin.png')}/>
                <TitleMedio style={{color: '#5D17EB'}}>REDEFINIR SENHA</TitleMedio>
                <InputLogin placeholder='Confirme seu e-mail:' placeholderTextColor={'#999393'}/>
                <Button title={'Enviar link de acesso'} buttonStyle={{width: 245}}/>
                </View>
                </ThemeProvider>
            </ContainerComponentes>
        </FundoBG>
    )
}
export const MudarSenha = () => {
    return(
        <FundoBG>
            <ContainerTopo>
            <Image source={require('../images/iconLoginTopo.png')} style={{marginTop: 40, bottom: 5 }}/>
            </ContainerTopo>
            <ContainerComponentes>
                <View style={{height: 360, width: '90%', marginTop: 60, justifyContent: 'space-between', alignItems: 'center'}}>
                <TitleMedio style={{color: '#5D17EB'}}>REDEFINIÇÃO DE SENHA</TitleMedio>
                <ThemeProvider theme={theme}>
                    <View style={{height: 300, width:'100%', justifyContent: 'space-evenly'}}>
                <InputLogin placeholder='Digite a nova senha:' placeholderTextColor={'#999393'}/>
                <InputLogin placeholder='Confirme a nova senha:' placeholderTextColor={'#999393'}/>
                <Button title={'REDEFINIR SENHA'} buttonStyle={{width: 245}}/>
                </View>
                </ThemeProvider>
                </View>
            </ContainerComponentes>
        </FundoBG>
    )
}
export const SenhaAlterada = () => {
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
            <TitleGrande style={{color: '#5D17EB', textAlign: 'center', marginTop: 150}}>Senha redefinida com sucesso!</TitleGrande>
            <ThemeProvider theme={theme}>
                <Button title={'OK'} buttonStyle={{height: 38, borderRadius: 20, width: 200, marginTop: 50}} titleStyle={{fontSize: 25}}/>
            </ThemeProvider>
            </View>
        </ContainerComponentes>
     </FundoBG>
    )
}
export default RedefinePassword;