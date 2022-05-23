import {StyleSheet} from 'react-native'



export const style = StyleSheet.create({

    container1:{
        // backgroundColor: 'red',
        width:'100% ',
        height: '100%'
    },

    container2:{
        // backgroundColor: 'green',
        margin: 15,
        marginTop: 15,
    },

    viewdoinput:{
        alignItems:'center',
        marginTop: 8

    },

    input:{
        backgroundColor: 'grey',
        padding: 10,
        fontSize: 12,
        borderRadius: 8,
        width:'97%',
        
    },

    text:{
        color: 'purple',
        fontWeight:'bold',
        margin: 10,
        fontSize: 20,
        
    },

    container3:{
        //backgroundColor:'pink',
    
        flexDirection: 'row',
        display: 'flex',
        width: '99%'
    
        
        
    },

    button1:{
        fontSize: 10,
        backgroundColor: 'grey',
        width: 140,
        padding: 28,
        marginBottom: 10,
        textAlign:'center',
        borderRadius: 8,
        fontSize: 12,
        color:'black'
        
    },

    container4:{
       //backgroundColor:'blue',
        width: '50%',
        height: '50%',
        alignItems: 'center'
    },

    imagem:{
        width: 160,
        height: 70,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: '#b56528',

    },

    legenda:{
        margin: 3,
        textAlign: 'center',


    },

    container5:{
        //backgroundColor:'yellow',
        width: '50%',
        height: '50%',
        alignItems: 'center'
    }

})
export default style