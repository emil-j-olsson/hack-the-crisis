import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { ONBOARDING_DATA } from '../data/onboarding-data'; 

const { width, height } = Dimensions.get("window");

interface ParallaxProps {
    navigation: any
}

export class Parallax extends React.Component<ParallaxProps> {

    _scrollX = new Animated.Value(0);

    render() {
        const interpolatedColor = this._scrollX.interpolate({
            inputRange: [0, width, width*2],
            outputRange: ['rgba(243,217,50,1)', 'rgba(215,138,203, 1)', 'rgba(163,175,86, 1)'],
            extrapolate: 'clamp'
        });
        let position = Animated.divide(this._scrollX, width);

        return (
            <View style={parallax_styles.container}>
                <Animated.ScrollView
                    pagingEnabled
                    scrollEventThrottle={16}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={(x:any) => {
                        return Animated.event([{nativeEvent:{contentOffset: { x: this._scrollX }}}])(x)
                    }}
                    contentContainerStyle={parallax_styles.scrollViewContainer}
                >
                    {ONBOARDING_DATA.map((item, i) => this._renderItem(item, i))}
                    <Animated.View style={[parallax_styles.background, {backgroundColor: interpolatedColor}]}></Animated.View>
                </Animated.ScrollView>
                <View style={parallax_styles.bullets}>
                    {ONBOARDING_DATA.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1], 
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Animated.View
                                key={i}
                                style={[parallax_styles.bullet, {opacity: opacity}]}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }

    _renderItem = (item:any, i:any) => {
        return (
            <View key={item.id} style={[parallax_styles.container, parallax_styles.item]}>
                <View style={parallax_styles.metaContainer}>
                    <Text style={[parallax_styles.font, parallax_styles.subtitle]}>{item.subtitle}</Text>
                    <Text style={[parallax_styles.font, parallax_styles.title]}>{item.title}</Text>
                    <Text style={[parallax_styles.font, parallax_styles.description]}>{item.description}</Text>
                </View>
            </View>
        );
    }
}

const parallax_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    item:  {
        width,
        height,
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    metaContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        padding: 15
    },
    font: {
        //fontFamily: 'Menlo'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    },
    title: {
        fontSize: 45,
        fontWeight: '900'
    },
    description: {
        fontSize: 15,
        fontWeight: '400'
    },
    background: {
        backgroundColor: '#333',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: -1
    },
    bullets: {
        flexDirection: 'row',
        position: 'absolute',
        left: 8,
        bottom: 350
    },
    bullet: {
        height: 10, 
        width: 10, 
        backgroundColor: '#fff', 
        margin: 8, 
        borderRadius: 5
    }
});