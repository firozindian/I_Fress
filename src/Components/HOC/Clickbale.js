import { Animated, Easing, TouchableOpacity } from 'react-native';
import React from 'react';
const TouchAnimation = Animated.createAnimatedComponent(TouchableOpacity);

const Clickable = ({
    onPress = () => { },
    children,
    style = {},
    disable = false,
    scaleSize = 0.98,
    onLongPress = () => { },
}) => {
    const AnimationButton = React.useRef(new Animated.Value(0)).current;
    const animateButton = (toValue, cb = () => { }) => {
        Animated.timing(AnimationButton, {
            useNativeDriver: true,
            toValue,
            duration: 80,
            easing: Easing.bounce,
        }).start(cb);
    };
    const scale = AnimationButton.interpolate({
        inputRange: [0, 1],
        outputRange: [1, scaleSize],
    });
    const onPressInHandler = () => {
        animateButton(1, () => { });
    };
    const onPressOut = () => {
        animateButton(0, () => { });
    };
    const onPressHandler = () => {
        animateButton(0, () => {
            onPress();
        });
    };
    return (
        <TouchAnimation
            onLongPress={onLongPress}
            delayLongPress={1000}
            activeOpacity={1}
            disabled={disable}
            style={[
                {
                    transform: [{ scale }],
                },
                style,
            ]}
            onPressIn={onPressInHandler}
            onPressOut={onPressOut}
            onPress={onPressHandler}>
            {children}
        </TouchAnimation>
    );
};

export default Clickable;