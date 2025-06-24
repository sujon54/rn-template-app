import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ToolBar({onBackPress, title}){
    return(
        <View style={[ styles.toolBar]}>
            {
                onBackPress ?
                    <Pressable 
                      onPress={onBackPress} 
                      style={({pressed}) =>[
                        {
                          backgroundColor: pressed? "rgba(0, 0, 0, 0.07)": null,
                          borderRadius: 50
                        },
                        styles.btn
                      ]} 
                    > 
                      <Icon name="arrow-left" color={'#000'} size={20}/>
                    </Pressable> 
                : null
            }
            
            <Text  style={[styles.toolBarText, {marginEnd: onBackPress? 45: 0}]} numberOfLines={1} > {title} </Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    toolBar: {
        height: 56,
        backgroundColor: "#F6F6F6",
        borderBottomColor: "#EEEEEE",
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btn: {
        height: 56,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toolBarText: {
        fontSize: 17,
        fontWeight: '700',
        color: 'black',
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    },
});
