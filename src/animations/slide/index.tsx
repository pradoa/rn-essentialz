import React from 'react';
import { Animated, Easing } from 'react-native';

interface IProps {
    time?: number;
    fromValue: number;
    toValue: number;
    delay?: number;
}

interface IState {
    animateValue: Animated.Value;
}

export default class SlideAnimation extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            animateValue: new Animated.Value(props.fromValue ? props.fromValue : 0)
        }
    }

    doAnimate(cb?: any) {
        let { toValue, time, delay } = this.props;
        const { animateValue } = this.state;
        Animated.timing(animateValue, {
            useNativeDriver: true,
            toValue: toValue ? toValue : 0,
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
            <Animated.View style={{ marginTop: animateValue }}>
                {this.props.children}
            </Animated.View>
        );
    }
}