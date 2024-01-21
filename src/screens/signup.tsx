import React from "react";
import { SafeAreaView,View, TouchableOpacity,Text,Image } from "react-native";
import AppInput from "../components/appinput";
interface Props {
    navigation: {
      navigate: (screen: string) => void;
    };
  }
const Signup: React.FC<Props> = ({navigation:{navigate}}) =>{
    return(
        <>
        <SafeAreaView>
            <View style={{padding:20}}>
                <View style={{alignItems:'center'}}>
                    <Image resizeMode="contain" source={require('../../assets/Vetovet.png')}
                    style={{width:120,height:120}}
                    />
                </View>
                
		<Text style={{marginHorizontal:50 , fontSize:25 , color:'#f6880e',marginVertical:5,fontWeight:'bold',width:300}}>SignUp to Veto Vets</Text>
            </View>
	    <View style={{paddingVertical:30}}>
	    <AppInput placeholder="Name"/>
		<AppInput placeholder="Email" />
		<AppInput placeholder="Password" />
	    </View>
	    <TouchableOpacity onPress={()=>{}} style={{padding:20,marginVertical:10,borderRadius:10,backgroundColor:"#f6880e"}}>
	    	<Text style={{color:"#222",textAlign:"center",fontSize:20}}>Sign Up</Text>
	    </TouchableOpacity>
	    <TouchableOpacity onPress={()=>{navigate("Login")}} style={{padding:20,marginVertical:5,}}>
	    	<Text style={{color:'#222',fontSize:20,textAlign:'center'}}>Already have a Account</Text>
	    </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}
export default Signup;
