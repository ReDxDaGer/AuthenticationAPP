import { Text } from "@rneui/themed";
import React from "react";
import { SafeAreaView,View } from "react-native";
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
                
		<Text style={{marginHorizontal:25 , fontSize:35 , color:'#f6880e',marginVertical:5,fontWeight:'bold',width:300}}>SignUp to Veto Vets</Text>
            </View>
	    <View style={{paddingVertical:30}}>
	    	<AppInput placeholder="Name"/>
		<AppInput placeholder="Email" />
		<AppInput placeholder="Password" />
	    </View>
	    <TouchableOpacity onPress={()=>{}} style={{padding:20,marginVertical:10,borderRadius:10,backgroundcolor:"#f6880e",shadowOffset:{{width:0,height:10,shadowOpacity: 0,shadowRadius: 10,}}}}>
	    	<Text style={{color:"#222",textAlign:"center",fontSize:20}}>Sign Up</Text>
	    </TouchableOpacity>
	    <TouchableOpacity onPress={()=>{navigate("Login")}} style={{padding:20,marginVertical:30,}}>
	    	<Text style={{color:'#222',fontSize:20,textAlign:'center'}}>Already have a Account</Text>
	    </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}
export default Signup;
