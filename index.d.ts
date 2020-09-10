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
         * Col component for React Native
         */
        interface Col extends ReactNative.ViewProps {
			/**
             * Defines col style
             */
            style?: RnViewStyleProp | Array<RnViewStyleProp>;
			/**
             * Set the size of the column
             */
            size: number;
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
         * Row component for React Native
         */
        interface Row extends ReactNative.ViewProps {
			/**
             * Defines row style
             */
            style?: RnViewStyleProp | Array<RnViewStyleProp>;
			/**
             * Set the spacing between columns
             */
            spacing?: number;
            /**
             * Set children cols centered
             */
            centered?: boolean;
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
            /**
             * Set the weight of the title
             */
            light?: boolean;
            /**
             * Set title centered
             */
            centered?: boolean;
        }

        /**
         * Animations
         */

        /**
         * Spin Animation component for React Native
         */
        interface SpinAnimation extends ReactNative.ViewProps {
            /**
             * time of full animation. the time that animation
             * takes to finish, or to repeate once if its looped.
             */
            time: number;
        }
        /**
         * Fade Animation component for React Native
         */
        interface FadeAnimation extends ReactNative.ViewProps {
            /**
             * time of full animation. the time that animation
             * takes to finish, or to repeate once if its looped.
             */
            time: number;
            /**
             * defines animation delay
             */
            delay: number;
            /**
             * defines fade in or fade out
             */
            type: "in" | "out";
        }
        /**
         * Slide Animation component for React Native
         */
        interface SlideAnimation extends ReactNative.ViewProps {
            /**
             * time of full animation. the time that animation
             * takes to finish, or to repeate once if its looped.
             */
            time: number;
            /**
             * defines animation delay
             */
            delay: number;
            /**
             * defines initial value for animation
             */
            fromValue: number;
            /**
             * defines end value for animation
             */
            toValue: number;
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
     * Essential Col
     * 
     * An easy-to-use row component, completely
     * customizable for any situation.
     */
    export class Col extends React.Component<RNEssentialz.Col, any> { }

    /**
     * Essential Icon
     * 
     * An easy-to-use icon component.
     * Using FontAwesome v5.14.0.
     */
    export class Icon extends React.Component<RNEssentialz.Icon, any> { }

    /**
     * Essential Row
     * 
     * An easy-to-use row component, completely
     * customizable for any situation.
     */
    export class Row extends React.Component<RNEssentialz.Row, any> { }

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

    /**
     * Essential With Messages
     * 
     * Used to render an app interface with messages component.
     * Use this to enroll your main app component to use
     * messages anywhere.
     */
    export class WithMessages extends React.Component<any, any> { }


    export type Position = "top" | "bottom" | "center" | { top?: number, left?: number, bottom?: number, right?: number };
    export type MessageType = "none" | "default" | "info" | "success" | "danger" | "warning";
    export interface MessageOptions {
        animated?: boolean;
        animationDuration?: number;
        backgroundColor?: string;
        autoHide?: boolean;
        color?: string;
        description?: string;
        duration?: number;
        floating?: boolean;
        hideOnPress?: boolean;
        hideStatusBar?: boolean;
        icon?: Icon;
        message: string;
        position?: Position;
        textStyle?: RnTextStyleProp;
        titleStyle?: RnTextStyleProp;
        type?: MessageType;
        onPress?(): void;
        onLongPress?(): void;
    }
    /**
     * Essential Notification Message
     * 
     * Use to notify the app with text or even
     * images. 
     */
    export const showNotification: (options: MessageOptions) => void;
    /**
     * Essential Notification Message
     *
     * Use to hide notification message in the
     * app.
     */
    export const hideNotification: () => void;



    /**
     * Essential Animations
     */
    export class SpinAnimation extends React.Component<RNEssentialz.SpinAnimation, any> { }
    export class FadeAnimation extends React.Component<RNEssentialz.FadeAnimation, any> { }
    export class SlideAnimation extends React.Component<RNEssentialz.SlideAnimation, any> { }
}