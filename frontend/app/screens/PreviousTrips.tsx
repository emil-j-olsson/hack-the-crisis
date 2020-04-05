import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { AppParamProps } from '../components/AppParamList';

const { width, height } = Dimensions.get("window");

export const PreviousTrips = ({ navigation, route } : AppParamProps<'PreviousTrips'> ) => {
    return (
        <View style={previous_trips_styles.container}>
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={(y:any) => {
                    //return Animated.event([{nativeEvent:{contentOffset: { y: _scrollY }}}])(y)
                }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={previous_trips_styles.scrollViewContainer}
            >
                <View style={{}}>
                    <View style={previous_trips_styles.greeting_wrapper}>
                        <Text style={previous_trips_styles.greeting}>Your Trips</Text>
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    );
}

const previous_trips_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewContainer: {
        //alignItems: 'center',
        //flex: 1,
        justifyContent: 'center',
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    greeting_wrapper: {
        flex: 1,
        width,
        justifyContent: 'flex-start',
        marginTop: 90,
        marginBottom: 40
    },
    greeting: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 30
    }
});