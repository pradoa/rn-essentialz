import React from 'react';
import { Animated, Easing, View } from 'react-native';

interface IProps {
    time?: number;
}

interface IState {
    animateValue: Animated.Value;
}

export default class SpinAnimation extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            animateValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        const { animateValue } = this.state;
        Animated.loop(Animated.timing(animateValue, {
            useNativeDriver: true,
            toValue: 2,
            duration: this.props.time ? this.props.time : 2000,
            easing: Easing.linear
        }), {
            iterations: -1,
        }).start();
    }

    render() {
        let loadingAnimVal = this.state.animateValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ["0deg", "180deg", "360deg"]  // 0 : 150, 0.5 : 75, 1 : 0
        });

        return (
            <Animated.View style={{ transform: [{ "rotate": loadingAnimVal }] }}>
                {this.props.children}
            </Animated.View>
        );
    }
}