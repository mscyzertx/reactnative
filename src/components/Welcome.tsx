import React from "react";
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { color } from "react-native-reanimated";


const Welcome= ({navigation}) => {
    return (
        <SafeAreaView style = {styles.wrappper}>
            <View style ={[styles.boxStyle, styles.box1]}>
                <Text>React Native Assignment</Text>
                <Text>Group- Debug Entity</Text>
                <Text>Members- Manish Ranabhat, Suhel Ahmed</Text>
            </View>
            <View style ={[styles.boxStyle, styles.box2]}>

            </View>
            <View style ={[styles.boxStyle, styles.box2]}>
            <TouchableOpacity onPress={() => navigation.navigate('Layout1')}><View style ={styles.box2_1}><Text>Go to Layout1</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Layout2')}><View style ={styles.box2_1}><Text>Go to Layout2</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Layout3')}><View style ={styles.box2_1}><Text>Go to Layout3</Text></View></TouchableOpacity>

            </View>

            <View style ={[styles.boxStyle, styles.box2]}>
            <TouchableOpacity onPress={() => navigation.navigate('Layout4')}><View style ={styles.box2_1}><Text>Go to Layout4</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Layout5')}><View style ={styles.box2_1}><Text>Go to Layout5</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Layout6')}><View style ={styles.box2_1}><Text>Go to Layout6</Text></View></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrappper:{
        flex:1,     
        flexDirection: 'column',
    },

    boxStyle: {
        padding: 20,
    },

    box1:{
        flex: 1,
        backgroundColor: "#6495ED",

    },

    box2:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly'
 
     },
 
     box1_1:{
         flex:1,
         marginTop:10,
         backgroundColor: "#6495ED",
     },
 
     box2_1:{
         height: 60,
         width: 60,
         backgroundColor: "#6495ED",
         
 
     },
 
     box2_2:{
         height: 60,
         width: 60,
         backgroundColor: "#6495ED",
         paddingLeft: 10,
       
 
     },
})

export default Welcome;