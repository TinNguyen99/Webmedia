import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import {S22} from './Screenname';
export default class  S1 extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        username: '',
      };
    }

 
    PostAxios = async () =>  {

      params = {
          hoten: 'Fred',
          mssv: '999', 
          diachi: 'Eng'
        }
        
      axios.post("http://webmediatest.000webhostapp.com/insertdata.php", {
        hoten: 'Fred',
        mssv: '999',
        diachi: 'Eng'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  render(){
    var dl = {
      name: this.state.username,
    };

    const { navigation } = this.props;
    return(
      <View style={styles.container}>
          <View style={styles.logo}>
    
              <Text style={styles.title}>
                Xin Chào!
              </Text>
          </View>

          <View style={styles.edittext}>

              <TextInput style={styles.inputpass}
                  placeholder="Enter name here"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onChangeText={(username) => this.setState({username})}
                  //value11={this.state.text}
                  autoCorrect={false}/>
          </View>

          <TouchableOpacity onPress={ this.PostAxios()} style={[styles.button,]}
            onPress={() => {//this.props.navigate(SecondScreen1);
              //if( value1 == "Tin"){
                  navigation.navigate(S22, dl);
              //}
            }}>
            <Text  style={styles.txtSign}>Tiếp tục</Text>
          </TouchableOpacity>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(32, 53, 70)',
    backgroundColor: 'rgb(250, 250, 250)',
    flexDirection: 'column',
  },

  logo: {
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
  },


  lg: {
    width: 120,
    height: 120,
    marginTop: 1,
  },


  title: {
    color: '#e5c516',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 180,
    opacity: 0.9,
  },


  edittext: {

    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 10,
  },


  inputpass: {
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#e5c516",
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 45,
    color: "green",
    marginBottom: 12,
    fontSize: 18,
    paddingStart: 18  
  },

  button: {


    borderRadius: 10,
    borderWidth: 5,
    borderColor: "green",
    backgroundColor: "#e5c516",
    paddingVertical: 10,
    marginBottom: 25,
    marginHorizontal: 20
  },

  txtSign: {
    textAlign: 'center',
    fontSize: 20
  }
})
