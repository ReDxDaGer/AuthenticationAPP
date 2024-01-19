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
                    <Image resizeMode="contain" source={require('../../assets/firebase2.png')}
                    style={{width:120,height:120}}
                    />
                </View>
                <Text style={{marginHorizontal:78,fontSize:30,color:'#f6880e',marginVertical:25,fontWeight:'bold',width:300}}>Login Here</Text>
            </View>
	    <View style={{paddingVertical:30}}>
		<AppInput placeholder="Email" />
		<AppInput placeholder="Password" />
	    </View>
	    <TouchableOpacity style={{alignItems: 'center',}}>
	    	<Text>Sign Up</Text>
	    </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}
export default Login;
