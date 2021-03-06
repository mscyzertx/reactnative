import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Layout1 = () => {
    return (
        <SafeAreaView style = {styles.wrappper}>
            <View style ={[styles.boxStyle, styles.box1]}>
            </View>
            <View style ={[styles.boxStyle, styles.box2]}>
            <View style ={styles.box2_1}/>
            </View>
            <View style ={[styles.boxStyle, styles.box3]}>
            <View style ={styles.box3_1}/>
                <View style ={styles.box3_2}/>
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
        padding: 20
    },

    box1:{
        flex: 1,
        backgroundColor: "#6495ED",

    },

    box2:{
        flex:1,
     },

     box2_1:{
        height: 40,
        marginTop:5,
        backgroundColor: "#6495ED",

    },

    box3:{
       flex:1,
       justifyContent: 'flex-end',
    },

    box3_1:{
        height: 40,
        marginTop:5,
        backgroundColor: "#6495ED",

    },

    box3_2:{
        height: 40,
        marginTop:10,
        backgroundColor: '#6495ED'
       
    },

})

export default Layout1;