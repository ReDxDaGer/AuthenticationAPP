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
            <View>
                <Text>SignUp</Text>
            </View>
        </SafeAreaView>
        </>
    )
}
export default Signup;