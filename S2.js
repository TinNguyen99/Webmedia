import React, {Component} from 'react';
import{
  Text, View, StyleSheet, Image, TextInput, TouchableOpacity
} from 'react-native';

import base64 from 'react-native-base64';

import axios from 'axios';

import {S11} from './Screenname';


export default class S2 extends Component {


  constructor(props){
            
    super(props);
    this.state = {
        cs: this.props.pr,
        ten: '',
        mssv: '',
        diachi: '',
        f: ''
      }
  };

  componentDidMount(){
    //POST METHOD
    // axios.post("http://webmediatest.000webhostapp.com/insertdata.php", 
    //     'hoten=TN99&mssv=19992021&diachi=NThuan'
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //UPDATE METHOD
    // axios.post("http://webmediatest.000webhostapp.com/updatedata.php", 
    //     'id=6&hoten=NGUYEN_TIN&mssv=99999999&diachi=Ninh_Thuan'
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //DELETE METHOD
    //  axios.post("http://webmediatest.000webhostapp.com/deletedata.php", 
    //     'id=6'
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


    //GET METHOD
    const url = "http://192.168.5.105/webmedia/test.php";
    axios.get(url)
    .then(response => {
      this.setState({
        ten: response.data
       
      });
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  //POST METHOD
  // PostAxios() {

  //   params = {
  //       hoten: 'Fred',
  //       mssv: '999',
  //       diachi: 'Eng'
  //     }

  //   axios.get('http://webmediatest.000webhostapp.com/getdata.php')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }


//<Image style={styles.lg} source={require(base64.decode("ten"))}></Image>
  render(){

    var gt = this.props.navigation.state.params;
    
      var anh = base64.decode(this.state.ten);
      
      const { navigation } = this.props;
      return(
        <View style={styles.container}>
          
          <View style={styles.logo}>
            
          <Image style={styles.lg} source={{uri: 'data:image/png;base64,' + this.state.ten }}></Image>
                
            </View>

        </View>
      );
    

  }



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
    flexDirection: 'column',
  },

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },


  lg: {
    width: 320,
    height: 320,
    marginTop: 1,
  },


  title: {
    color: '#e5c516',
    fontWeight: "bold",
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.5,
  },


  edittext: {
    //backgroundColor: 'rgba(255,255,255,0.1)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
  },


  inputpass: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 35,
    color: "pink",
    marginBottom: 12,
  },

  button: {
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "green",
    backgroundColor: "yellow",
    paddingVertical: 10,
    marginBottom: 25,
    marginHorizontal: 20
  },

  txtSign: {
    textAlign: 'center',
    fontSize: 20
  }
})
