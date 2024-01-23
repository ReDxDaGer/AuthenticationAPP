import {TextInputProps} from 'react-native/types'
import React, { useState } from 'react'
import { TextInput,View } from 'react-native'


const AppInput = ({...otherProps,updateInputval}) => {
    const[Focused,setFocused] = useState<boolean>(false)
    return(
        <>
	<View style={{paddingHorizontal:20,}}>
             <TextInput 
        	onFocus={()=>{setFocused(true)}}
        	onBlur={()=>{setFocused(true)}}
		onChangeText = {()=>updateInputval()}
        	placeholderTextColor={'#626262'}
        	style={[{
            	fontSize:14,
            	padding:20,
            	backgroundColor:'#f1f4ff',
            	borderRadius:10,
        	marginVertical:10,
          	borderColor:'#c2c2c2',
            	borderWidth:3
        	},
        	Focused && {
            	borderColor:'#fdcc2d',
            	borderWidth:3,
            	shadowColor:'#fdcc2d',
        	shadowOffset:{width:4,height:10},
            	shadowOpacity:2,
            	shadowRadius:10
        	}
    	]}
    	{...otherProps}
          />
	</View>
        </>
    )
}
export default AppInput;
