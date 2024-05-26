import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';

const styles = StyleSheet.create({
    title1: {
        top: -75,
        left: 100,
        fontSize: 24,
    },
    title2: {
        top: -70,
        left: 100,
        fontSize: 24,
    },
    image: {
        height: 100,
        backgroundColor: 'transparent',
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 5,
        color: 'red',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 5,
    },
    finalText: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    editIcon: {
        color: '#26a6e4',
    },
    sections: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        width: 100,
    },
    deleteIcon: {
        color: '#e9e69a',
    },
    editDeleteArea: {
        flexDirection: 'row',
        paddingBottom: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(211,211,211,0.3)',
        marginBottom: 10,
        marginTop: 20
    },
    actionImage: {
        width: 100,
        height: 100,
    }
})

class UpdatePerson extends Component {
    render() {
        return (
            <View></View>
        )
    }
}

export default UpdatePerson;
