import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { StackRouter } from 'react-navigation';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            console.log("payload : ",action.payload);
            console.log("rojo : ",state.red);
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red : state.red + action.payload };
            break;
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green : state.green + action.payload };
            break;
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue : state.blue + action.payload };
            break;
        default:
            return state;
            break;
    }
};

const SquareReducerScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;
    console.log(state.red);


    return (
        <View>
            <Text>Set Color Aplicando Reducer</Text>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color="Rojo"
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                color="Azul"
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color="Verde"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb( ${red}, ${green}, ${blue})` }} />
        </View>
    );
};

const style = StyleSheet.create({});

export default SquareReducerScreen;