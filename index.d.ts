import { GestureResponderEvent } from "react-native";

declare module 'react-native-sync-localstorage';
declare module 'rn-essentialz' {
    import * as React from "react";
    import * as ReactNative from "react-native";

    type RnViewStyleProp = ReactNative.StyleProp<ReactNative.ViewStyle>;
    type RnTextStyleProp = ReactNative.StyleProp<ReactNative.TextStyle>;
    type RnStatusBarStyleProp = ReactNative.StyleProp<ReactNative.StatusBarStyle>;

    namespace RNEssentialz {
        /**
         * Button component for React Native
         */
        interface Button extends ReactNative.TouchableOpacityProps {
			/**
             * Defines button style
             */
            style?: RnViewStyleProp | Array<RnViewStyleProp>;
			/**
             * Defines button text ttyle
             */
            textStyle?: RnTextStyleProp | Array<RnTextStyleProp>;
			/**
             * Set an icon for the button
             */
            icon?: React.ReactComponentElement<any, any>;
			/**
             * Define button as small
             */
            small?: boolean;
			/**
             * Define button as large. overrides small property.
             */
            large?: boolean;
			/**
             * Define button as full width.
             */
            fullWidth?: boolean;
			/**
             * Define button as loading state.
             */
            loading?: boolean;
        }

        /**
         * Icon component for React Native
         */
        interface Icon extends ReactNative.TextProps {
			/**
             * Defines title style
             */
            style?: RnTextStyleProp | Array<RnTextStyleProp>;
			/**
             * Sets the type of the Icon
             */
            type: "fal" | "far" | "fas" | "fab" | "fad";
            /**
             * The Icon's name
             */
            name: string;
            /**
             * The Icon's size (overrides style's size)
             */
            size?: number;
        }

        /**
         * Select component for React Native
         */
        interface Select extends ReactNative.TouchableOpacityProps {
			/**
             * Defines select style
             */
            style?: RnViewStyleProp | Array<RnViewStyleProp>;
			/**
             * Defines select text ttyle
             */
            textStyle?: RnTextStyleProp | Array<RnTextStyleProp>;
			/**
             * Set an icon for the select
             */
            icon?: React.ReactComponentElement<any, any>;
			/**
             * Define select as small
             */
            small?: boolean;
			/**
             * Define select as large. overrides small property.
             */
            large?: boolean;
			/**
             * Define select as full width.
             */
            fullWidth?: boolean;
			/**
             * Define the value of the select.
             */
            value?: any;
        }

        /**
         * Title component for React Native
         */
        interface Title extends ReactNative.TextProps {
			/**
             * Defines title style
             */
            style?: RnTextStyleProp | Array<RnTextStyleProp>;
			/**
             * Set the level of the title
             */
            level: number;
        }
    }

    /**
     * Essential Button
     * 
     * An easy-to-use button component, completely
     * customizable for any situation.
     */
    export class Button extends React.Component<RNEssentialz.Button, any> { }

    /**
     * Essential Icon
     * 
     * An easy-to-use icon component.
     * Using FontAwesome v5.14.0.
     */
    export class Icon extends React.Component<RNEssentialz.Icon, any> { }

    /**
     * Essential Select
     * 
     * An easy-to-use select component, completely
     * customizable for any situation.
     */
    export class Select extends React.Component<RNEssentialz.Select, any> { }

    /**
     * Essential Title
     * 
     * An easy-to-use title component, completely
     * customizable for any situation.
     */
    export class Title extends React.Component<RNEssentialz.Title, any> { }
}