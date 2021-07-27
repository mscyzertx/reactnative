import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Layout2 = () => {
    return (
        <SafeAreaView style = {styles.wrappper}>
            <View style ={[styles.boxStyle, styles.box1]}>
                <View style ={styles.defaultContainer}></View>
            </View>
            <View style ={[styles.boxStyle, styles.box2]}>
                <View style ={styles.defaultContainer}></View>
            </View>
            <View style ={[styles.boxStyle, styles.box3]}>
                <View style ={styles.defaultContainer}></View>
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
        width: '100%', 
        height: 10,
        padding: 20
    },

    box1:{
        flex: 0.6
    },
    box2:{
       flex:3
    },
    box3:{
        flex: 0.6
    },

    defaultContainer:{
        flex:1,
        backgroundColor:"#6495ED"
    }

})

export default Layout2;