import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import Animated, { Easing } from 'react-native-reanimated';
import { loop, mix } from 'react-native-redash';
import {Dimensions, StyleSheet, View} from "react-native";
const { set, useCode, Value } = Animated;
export default function BlinkingDot () {
    let arr = []
    for (let i = 0; i < 2; i++) {
        arr.push(i)
    }

    let animatedValue = []
    arr.forEach((value) => {
        animatedValue[value] = new Value(0)
    })

    const styles = StyleSheet.create({
        exampleContainer: {
            height: 30,
            width: 30
        }
    });

    const animation0 = new Value(0);
    const animation1 = new Value(0);

    arr.forEach((value) => {
        useCode(
            () =>
                set(
                    animatedValue[value],
                    loop({
                        duration: 800*(0.5*value + 0.5),
                        easing: Easing.inOut(Easing.ease),
                        // the animation goes from 0 to 1 and then
                        // from 1 to 0 in the next cycle
                        boomerang: true,
                        autoStart: true,
                    })
                ),
            [animatedValue[value]]
        );
    })

    useCode(
        () =>
            set(
                animation0,
                loop({
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    // the animation goes from 0 to 1 and then
                    // from 1 to 0 in the next cycle
                    boomerang: true,
                    autoStart: true,
                })
            ),
        [animation0]
    );

    useCode(
        () =>
            set(
                animation1,
                loop({
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    // the animation goes from 0 to 1 and then
                    // from 1 to 0 in the next cycle
                    boomerang: true,
                    autoStart: true,
                })
            ),
        [animation1]
    );
    // Interpolate the node from 0 to 1 without clamping
    const opacity = mix(animation0, 0.1, 1);

    const animations = arr.map((a, i) => {
        let p2 = 0.4;
        let p3 = 0.2;
        let radius = 10;
        let position = "relative";
        let fillColor = "rgb(255,213,0)";
        let marginTop = "-10px"
        if (i === 1) {
            p2 = 0.2;
            p3 = 0.6;
            radius = 5;
            position = "absolute";
            fillColor = "rgb(255,191,0)";
            marginTop = "0px";
            return <Animated.View key={i} style={{opacity: mix(animatedValue[a], p2, p3), position: "relative", top: -29.5}} >
                <Svg viewBox="0 0 20 20">
                    <Circle cx="10" cy="10" r={radius} fill={fillColor} fillOpacity="1" />
                </Svg>
            </Animated.View>
        }


        return <Animated.View key={i} style={{opacity: mix(animatedValue[a], p2, p3), top: 0}} >
            <Svg viewBox="0 0 20 20">
                <Circle cx="10" cy="10" r={radius} fill={fillColor} fillOpacity="1" />
            </Svg>
        </Animated.View>
    })

    return (
        <View style={styles.exampleContainer}>
            {animations}
        </View>
    );
}