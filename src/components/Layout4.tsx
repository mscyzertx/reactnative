import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Layout4 = () => {
    return (
        <SafeAreaView style = {styles.wrappper}>
            <View style ={[styles.boxStyle1, styles.box1]}>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_1}/>
            </View>
            <View style ={[styles.boxStyle1, styles.box1]}>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_1}/>
            </View>
            <View style ={[styles.boxStyle1, styles.box1]}>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_1}/>
            </View>
            <View style ={styles.box2}>
            <View style ={styles.box2_1}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrappper:{
        flex:1,     
        flexDirection: 'column',
    },

    boxStyle1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    box1:{
        marginTop:50

    },
    box2:{
       flex:1,
       padding: 20,
       justifyContent: 'flex-end'
    },

    box1_1:{
        height: 100,
        width: 100,
        marginTop:5,
        backgroundColor: "#ededed",
    },


    box2_1:{
        height: 60,
        width: 60,
        marginTop:5,
        backgroundColor: "#ededed",
        alignSelf: 'flex-end'

    },
   

})

export default Layout4;