import React from 'react';
import { Animated, Easing } from 'react-native';

interface IProps {
    type: "in" | "out";
    time?: number;
    delay?: number;
}

interface IState {
    animateValue: Animated.Value;
}

export default class FadeAnimation extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            animateValue: new Animated.Value(props.type === "in" ? 0 : 1)
        }
    }

    doAnimate(cb?: any) {
        let { type, time, delay } = this.props;
        const { animateValue } = this.state;
        Animated.timing(animateValue, {
            useNativeDriver: true,
            toValue: type === "in" ? 1 : 0,
            duration: time ? time : 2000,
            easing: Easing.inOut(Easing.quad)
        }).start();

        if (cb) {
            if (!delay)
                delay = 0;

            setTimeout(() => {
                cb();
            }, time ? (time + delay) : 2000 + delay)
        }
    }

    render() {
        const { animateValue } = this.state;

        return (
            <Animated.View style={{ opacity: animateValue }}>
                {this.props.children}
            </Animated.View>
        );
    }
}