declare module 'rn-essentialz' {
    import * as React from "react";
    import * as ReactNative from "react-native";

    type RnViewStyleProp = ReactNative.StyleProp<ReactNative.ViewStyle>;
    type RnTextStyleProp = ReactNative.StyleProp<ReactNative.TextStyle>;
    type RnStatusBarStyleProp = ReactNative.StyleProp<ReactNative.StatusBarStyle>;

    namespace RNEssentials {
        /**
         * Button component for React Native
         */
        interface Button extends ReactNative.TouchableOpacityProps {
			/**
             * Defines button style
             */
            style?: RnViewStyleProp | Array<RnViewStyleProp>;
        }
    }
}