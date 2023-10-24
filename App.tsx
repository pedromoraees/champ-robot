import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  
  <Image style={styles.jogo}   source={require('./src/assets/jogo.png')} /> 
      
  <Image style={styles.champ}   source={require('./src/assets/robol.png')} /> 


      <TouchableOpacity >   <Image style={styles.abc}   source={require('./src/assets/letra.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.bola}   source={require('./src/assets/bola.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.bola1}   source={require('./src/assets/bola1.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.mapa}   source={require('./src/assets/mapa.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.sorvete}   source={require('./src/assets/sorvete.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.elefante}   source={require('./src/assets/elefante.png')} />   </TouchableOpacity>
    
      <Image style={styles.senai}   source={require('./src/assets/senai.png')} /> 

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40',
        
  },

  abc:{

    width: 142,
    height: 142,
    left: 75,
    top:-142,
  },

  bola:{
    width: 140,
    height: 140,
    right: 75,
    alignItems: 'center',
    justifyContent: 'center',
    top: -300,
  },

  bola1:{
    
    
    width: 138,
    height: 138,
    right:75,
    alignItems: 'center',
    justifyContent: 'center',
    top:-280,

  },

  mapa:{

    width: 143,
    height: 143,
    left: 75,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 440,
  },

  sorvete:{

    width: 143,
    height: 143,
    right:75,
    alignItems: 'center',
    justifyContent: 'center',
    bottom:420,

  },

  elefante:{
    
    width: 140,
    height: 140,
    left: 75,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 580,

  },

  champ:{
    resizeMode: 'contain',
    width:150,
    height:150,
    right:80,
    bottom:124,
      
  },


  jogo:{

width:350,
height:350,
resizeMode:'contain',
bottom:20,
  },

  senai:{

width:370,
height:370,
bottom:600,
resizeMode:'contain',

  },
});
