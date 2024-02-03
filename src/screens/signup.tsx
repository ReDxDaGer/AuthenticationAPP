import { Image, Text } from "@rneui/themed";
import React from "react";
import { SafeAreaView,View } from "react-native";
import AppInput from '../components/appinput'
import {TouchableOpacity} from "react-native"
import {useState} from 'react'

interface Props {
    navigation: {
      navigate: (screen: string) => void;
    };
  }

const Signup: React.FC<Props> = ({navigation:{navigate}}) =>{
const [Values,setValues] = useState({name:'',email:'',password:''})
    return(
        <>
        <SafeAreaView>
            <View style={{padding:20}}>
                <View style={{alignItems:'center'}}>
                    <Image resizeMode="contain" source={require('../../assets/Vetovet.png')}
                    style={{width:120,height:120}}
                    />
                </View>
                
		<Text style={{marginHorizontal:50 , fontSize:25 , color:'#f6880e',marginVertical:5,fontWeight:'bold',width:300}}>Sign Up to Veto Vets</Text>
            </View>
	    <View style={{paddingVertical:30}}>
	    	<AppInput placeholder="Name" name="name"/>
		<AppInput placeholder="Email" name="email"/>
		<AppInput placeholder="Password"name="password"/>
	    </View>
	    <View style={{paddingHorizontal: 20,}}>
	    	<TouchableOpacity onPress={()=>{}} style={{padding:20,marginVertical:5,borderRadius:10,backgroundColor:"#f6880e",}}>
	    	<Text style={{color:"#222",textAlign:"center",fontSize:20}}>Sign Up</Text>

		</TouchableOpacity>
	     </View>
	    <TouchableOpacity onPress={()=>{navigate("Login")}} style={{padding:20,marginVertical:1,}}>
	    	<Text style={{color:'#222',fontSize:20,textAlign:'center'}}>Already have a Account</Text>
	    </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}
export default Signup;
