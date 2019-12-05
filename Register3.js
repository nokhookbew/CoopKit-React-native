
import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
import {Cancel} from './Register.js';


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <ScrollView style={{flex: 1,flexDirection: 'column',}}>
        <View style={{marginTop:20, flex: 0.1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row',padding: 8}}>
            <View style={RegisterStyles.gap}></View>
            <View style={RegisterStyles.progressBar}></View>
            <View style={RegisterStyles.gap}></View>
            <View style={RegisterStyles.progressBar}></View>
            <View style={RegisterStyles.gap}></View>
            <View style={RegisterStyles.progressBar}></View>
            <View style={RegisterStyles.gap}></View>
            {/* <View style={RegisterStyles.progressBarInactive}></View>
            <View style={RegisterStyles.gap}></View> */}
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={RegisterStyles.gap}></View>
            <ButtonText text={"สร้างบัญชีผู้ใช้"}/>
            <View style={RegisterStyles.gap}></View>
            <ButtonText text={"ข้อมูลส่วนตัว"}/>
            <View style={RegisterStyles.gap}></View>
            <ButtonText text={"เลือกประเภทผู้ใช้"}/>
            <View style={RegisterStyles.gap}></View>
            {/* <ButtonText text={"รูปบัตรประชาชน"}/>
            <View style={RegisterStyles.gap}></View> */}
          </View> 
        </View>
        {/* <View style={{flex: 0.1, marginTop: 20,borderWidth: 1,flexDirection: 'row'}} > */}
          {/* <Text style={RegisterStyles.center}> 1. </Text> */}

        {/* </View> */}

        <View style={{marginTop: 150,flex: 0.8,flexDirection: 'column'}} >

          <NormalPeople action={ this.props } />
          <FarmerPeople action={ this.props } />
          
          <View style={{marginTop: 180,flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel navigation={this.props.navigation}/>
            <NextButton navigation={this.props.navigation}/>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}




const NormalPeople = (click) => {
  const clicked = ( {action} ) => {


  };


    return ( <TouchableOpacity onPress={clicked( {click} )} >
    <View style={RegisterStyles.peopleButton}>
    <Text >ผู้ใช้ทั่วไป</Text>
    <Text style={{fontSize: 8 ,color: 'red'}} > *ใช้ได้เฉพาะฟีเจอร์ทั่วไป ไม่สามารถสร้างห้องได้</Text>
    </View>
    </TouchableOpacity>
    );
}

const FarmerPeople = (click) => {
  const clicked = ( {action} ) => {


  };

    return ( <TouchableOpacity onPress={clicked( {click} )}  >
    <View style={RegisterStyles.peopleButton}>
    <Text >เกษตรกร</Text>
    </View>
    </TouchableOpacity>
    );
}
const ButtonText = ({text}) => {
    return (<View style={RegisterStyles.center}>
    <Text style={{fontSize:8}} >{text}</Text>
    </View>
    );
}

const NextButton = ({ navigation }) => {
  return (
    <View style={{justifyContent:'center',alignItems:'flex-end',
    marginRight:20}}>
      <Button style={{backgroundColor:'#009688'}} onPress={() => navigation.navigate('LoginPage')} >
      <Text style={{color:'white'}} >
        เสร็จสิ้น
        </Text>
      </Button>
    </View>
  );
}

const RegisterStyles = StyleSheet.create({
  center: {
    justifyContent:'center',
    alignItems:'center',
    width: '28%'
  },
  inputBar:{
    borderBottomWidth: 1,
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    height: 40
  },
  progressBar: {
   height: 20,
   width: '28%',
   backgroundColor: 'green',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
 },progressBarInactive: {
   height: 20,
   width: '28%',
   backgroundColor: 'grey',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
 },gap: {
    width: '4%'
 },peopleButton: {
   marginTop: 30,
   marginLeft: 10,
   marginRight: 10,
   flex: 1,
   borderWidth: 2,
   height: 50,
   alignItems: 'center',
   justifyContent: 'center',


 }
});

