import { StyleSheet } from 'react-native';

 export default StyleSheet.create({
    logo: {
        marginBottom: 115,
        width: 250,
        height: 60,
    },
    geral: {
        flex: 1,
        backgroundColor: '#252525',
      },
      formView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      AreaInput: {
        flexDirection: 'row',
      },
      textoInput: {
        backgroundColor: 'rgba(0,0,0,0.90)',
        width: '90%',
        fontSize: 17,
        color: '#fff',
        marginBottom: 35,
        padding: 10,
        borderRadius: 7,
      },
      botaoEntrar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00b94a',
        width: '90%',
        height: 45,
        borderRadius: 7,
        marginTop: 10,
      },
      textoAcessar: {
        fontSize: 20,
        color: '#131313',
      },
      link: {
        marginTop: 15,
        marginBottom: 9,
      },
      textolink: {
        color: '#fff',
        fontSize: 18,
      },
      botaoCadastrar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00b94a',
        width: '90%',
        height: 45,
        borderRadius: 7,
        marginTop: 10,
      },
      textoCadastrar: {
        color: '#131313',
        fontSize: 20,
        fontWeight: 'bold'
      }
});