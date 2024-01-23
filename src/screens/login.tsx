import { Image, Text } from "@rneui/themed";
import React from "react";
import { SafeAreaView,View } from "react-native";
import AppInput from '../components/appinput'
import {TouchableOpacity} from "react-native"

interface Props {
    navigation: {
      navigate: (screen: string) => void;
    };
  }

const Login: React.FC<Props> = ({navigation:{navigate}}) =>{
    return(
        <>
        <SafeAreaView>
            <View style={{padding:20}}>
                <View style={{alignItems:'center'}}>
                    <Image resizeMode="contain" source={require('../../assets/Vetovet.png')}
                    style={{width:120,height:120}}
                    />
                </View>
                
		<Text style={{marginHorizontal:25 , fontSize:35 , color:'#f6880e',marginVertical:5,fontWeight:'bold',width:300}}>Login to Veto Vets</Text>
            </View>
	    <View style={{paddingVertical:30}}>
		<AppInput placeholder="Email" />
		<AppInput placeholder="Password" />
	    </View>
	    <View style={{paddingHorizontal: 20,}}>
	    	<TouchableOpacity onPress={()=>{}} style={{padding:20,marginVertical:10,borderRadius:10,backgroundColor:"#f6880e",}}>
	    	<Text style={{color:"#222",textAlign:"center",fontSize:20}}>Sign In</Text>

		</TouchableOpacity>
	     </View>
	    <TouchableOpacity onPress={()=>{navigate("SignUp")}} style={{padding:20,marginVertical:10,}}>
	    	<Text style={{color:'#222',fontSize:20,textAlign:'center'}}>Create a New Account</Text>
	    </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}
export default Login;
