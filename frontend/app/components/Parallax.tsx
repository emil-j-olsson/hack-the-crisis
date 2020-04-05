import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image } from 'react-native';
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
            outputRange: ['rgba(103,114,229,1)', 'rgba(215,138,203, 1)', 'rgba(163,175,86, 1)'],
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
                    <Animated.Image style={[parallax_styles.square, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, 150],
                            extrapolate: 'clamp'
                        })},
                        {translateY: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, -50],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: ['0deg', '5deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [1, 0.8],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/square.png')}></Animated.Image>
                    <Animated.Image style={[parallax_styles.corona, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, -150],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: ['0deg', '5deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [1, 0.8],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/corona.png')}></Animated.Image>
                    <Animated.Image style={[parallax_styles.corona2, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, -150],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: ['0deg', '5deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [1, 0.8],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/corona.png')}></Animated.Image>
                    <Animated.Image style={[parallax_styles.coronaBlue, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, 170],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: ['0deg', '5deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [1, 1.1],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/corona-blue.png')}></Animated.Image>
                    <Animated.Image style={[parallax_styles.coronaBlue2, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, 70],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: ['0deg', '5deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [1, 1.2],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/corona-blue.png')}></Animated.Image>
                    <Animated.Image style={[parallax_styles.squareGreen, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, 20],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width*2],
                            outputRange: ['0deg', '100deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [1, 1.3],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/square-green.png')}></Animated.Image>
                    <Animated.Image style={[parallax_styles.corona3, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, 20],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width*2],
                            outputRange: ['0deg', '100deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [1, 1.3],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/corona.png')}></Animated.Image>
                    <Animated.Image style={[parallax_styles.corona4, {transform: [
                        {translateX: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0, 20],
                            extrapolate: 'clamp'
                        })},
                        {rotate: this._scrollX.interpolate({
                            inputRange: [0, width*2],
                            outputRange: ['0deg', '100deg'],
                            extrapolate: 'clamp'
                        })},
                        {scale: this._scrollX.interpolate({
                            inputRange: [0, width],
                            outputRange: [0.5, 1],
                            extrapolate: 'clamp'
                        })},
                    ]}]} source={require('../assets/corona.png')}></Animated.Image>
                    <Image style={parallax_styles.line} source={require('../assets/line.png')}></Image>
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
        padding: 15,
        marginTop: 180
    },
    font: {
        //fontFamily: 'Menlo'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 2
    },
    title: {
        fontSize: 45,
        fontWeight: '900',
        marginBottom: 5
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
        bottom: 200
    },
    bullet: {
        height: 10, 
        width: 10, 
        backgroundColor: '#fff', 
        margin: 8, 
        borderRadius: 5
    },
    line: {
        top: -250,
        left: 70,
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'contain'
    },
    square: {
        position: 'absolute',
        width: 450,
        height: 440,
        left: -100,
        top: -150,
        resizeMode: 'contain'
    },
    corona: {
        position: 'absolute',
        width: 100,
        height: 100,
        left: width - 70,
        top: 0,
        resizeMode: 'contain'
    },
    corona2: {
        position: 'absolute',
        width: 80,
        height: 80,
        left: -40,
        top: 300,
        resizeMode: 'contain'
    },
    coronaBlue: {
        position: 'absolute',
        width: 250,
        height: 300,
        left: 90,
        top: 160,
        resizeMode: 'contain',
        zIndex: 8
    },
    coronaBlue2: {
        position: 'absolute',
        width: 100,
        height: 100,
        left: width*2 - 200,
        top: 160,
        resizeMode: 'contain',
        zIndex: 8
    },
    squareGreen: {
        width: 100,
        height: 100,
        position: 'absolute',
        left: width*2 - 200,
        top: 350,
        resizeMode: 'contain',
        zIndex: 8
    },
    corona3: {
        position: 'absolute',
        width: 80,
        height: 80,
        left: width*3 - 60,
        top: 300,
        resizeMode: 'contain'
    },
    corona4: {
        position: 'absolute',
        width: 200,
        height: 200,
        left: width*2 + 20,
        top: 150,
        resizeMode: 'contain'
    }
});