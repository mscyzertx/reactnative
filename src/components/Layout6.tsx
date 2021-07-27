import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Layout6 = () => {
    return (
        <SafeAreaView style = {styles.wrappper}>
            <View style ={[styles.boxStyle, styles.box1]}>
                <View style ={styles.box1_1}/>
            </View>
            <View style ={[styles.boxStyle, styles.box2]}>
            <View style ={styles.box2_1}/>
            <View style ={styles.box2_2}/>
            <View style ={styles.box2_2}/>
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
        flex: 10,
        justifyContent: 'flex-end',

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

export default Layout6;