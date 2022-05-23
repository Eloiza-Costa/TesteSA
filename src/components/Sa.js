import React from 'react'
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native'
import style from '../styles/sa'



export const Sa=()=>{
    return(
        <View style={style.container1}>

            <View style={style.container2}>

            <View style={style.viewdoinput}>

                <TextInput style={style.input} placeholder='Buscar categoria' placeholderTextColor='black'/>

            </View>

                <Text style={style.text}>Serviços</Text>

            </View>

            <View style={style.container3}>

                <View style={style.container4}>

                 <View>
                     <Image source={require('../imagens/diarista.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Diarista</Text>
                 </View>

                 <View>
                     <Image source={require('../imagens/manicure.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Manicure</Text>
                 </View>

                 <View>
                     <Image source={require('../imagens/costureira.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Costureira</Text>
                 </View>


                 <View>
                     <Image source={require('../imagens/maridodealuguel.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Marido de aluguel</Text>
                 </View>

                </View>

                <View style={style.container5}>

                <View>
                     <Image source={require('../imagens/eletricista.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Eletricista</Text>
                 </View>

                 <View>
                     <Image source={require('../imagens/maquiadora.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Maquiadora</Text>
                 </View>

                 <View>
                     <Image source={require('../imagens/pintor.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Pintor</Text>
                 </View>

                   <View>
                     <Image source={require('../imagens/jardineiro.png')} style={style.imagem}/>
                     <Text style={style.legenda}>Jardineiro</Text>
                 </View>

                </View>

            </View>
        </View>
    )
}


export default Sa;