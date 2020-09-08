import React from 'react';
import { Animated, Easing } from 'react-native';
export default class FadeAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animateValue: new Animated.Value(props.type === "in" ? 0 : 1)
        };
    }
    doAnimate(cb) {
        let { type, time, delay } = this.props;
        const { animateValue } = this.state;
        Animated.timing(animateValue, {
            toValue: type === "in" ? 1 : 0,
            duration: time ? time : 2000,
            easing: Easing.inOut(Easing.quad)
        }).start();
        if (cb) {
            if (!delay)
                delay = 0;
            setTimeout(() => {
                cb();
            }, time ? (time + delay) : 2000 + delay);
        }
    }
    render() {
        const { animateValue } = this.state;
        return (React.createElement(Animated.View, { style: { opacity: animateValue } }, this.props.children));
    }
}
