import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Layout3 = () => {
    return (
        <SafeAreaView style = {styles.wrappper}>
            <View style ={[styles.boxStyle, styles.box1]}>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_2}/>
            </View>
            <View style ={[styles.boxStyle, styles.box2]}>
            <View style ={styles.box2_1}/>
                <View style ={styles.box2_2}/>
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
        justifyContent: 'flex-end',

    },
    box2:{
       flex:2,
       justifyContent: 'flex-end'
    },

    box1_1:{
        height: 50,
        width: 50,
        marginTop:5,
        backgroundColor: "#6495ED",
        alignSelf: 'flex-end'
    },

    box1_2:{
        flex: 0.5,
        height: 40,
        marginTop:10,
        backgroundColor: "#6495ED"
       
    },

    box2_1:{
        height: 80,
        marginTop:5,
        backgroundColor: "#6495ED",

    },

    box2_2:{
        height: 40,
        marginTop:10,
        backgroundColor: '#6495ED'
       
    },

})

export default Layout3;