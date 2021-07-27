import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Layout5 = () => {
    return (
        <SafeAreaView style = {styles.wrappper}>
            <View style ={[styles.boxStyle, styles.box1]}>
                <View style ={styles.box1_1}/>
                <View style ={styles.box1_2}/>
                <View style ={styles.box1_3}/>
                <View style ={styles.box1_4}/>
            </View>
            <View style ={[styles.boxStyle, styles.box2]}>
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

    boxStyle: {
        padding: 20
    },

    box1:{
        flex: 2,
        justifyContent: 'flex-end',

    },
    box2:{
       flex:1,
       justifyContent: 'flex-end'
    },

    box1_1:{
        height: 100,
        marginTop:10,
        backgroundColor: "#ededed"
    },

    box1_2:{
        height: 100,
        marginTop:10,
        backgroundColor: "#ededed"
    },

    box1_3:{

        height: 100,
        marginTop:10,
        backgroundColor: "#ededed"
    },

    box1_4:{
        height: 100,
        marginTop:10,
        backgroundColor: "#ededed"
    },

    box2_1:{
        height: 60,
        width: 60,
        backgroundColor: "#ededed",
        alignSelf: 'flex-end',

    },

})

export default Layout5;