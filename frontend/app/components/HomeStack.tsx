import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Animated, StyleSheet, Text, Dimensions, Button, Image } from 'react-native';
import { HomeParamList, HomeStackNavProps } from './HomeParamList';
import { AuthContext } from './AuthProvider';
import { FEED_DATA } from '../data/feed-data';
import { TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Polygon } from 'react-native-maps';
import { GOOGLE_DATA } from '../data/google-maps-data';
import { POLYGON_DATA } from '../data/polygon-data';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();
const _scrollY = new Animated.Value(0);
const { width, height } = Dimensions.get("window");

function Feed({navigation} : HomeStackNavProps<'Feed'>) {
    const { user, logout } = useContext(AuthContext);
    
    return (
        <View style={home_stack_styles.container}>
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={(y:any) => {
                    return Animated.event([{nativeEvent:{contentOffset: { y: _scrollY }}}])(y)
                }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={home_stack_styles.scrollViewContainer}
            >
                <View>
                    <View style={home_stack_styles.greeting_wrapper}>
                        <Text style={home_stack_styles.greeting}>Hey, {user?.name}</Text>
                    </View>
                    {FEED_DATA.map((item, i) => _renderItem(item, i, navigation))}
                </View>
                <TouchableWithoutFeedback style={{bottom:5, zIndex: 10, width: 20, height: 50, backgroundColor: '#000'}} onPress={() => {logout();}}></TouchableWithoutFeedback>
            </Animated.ScrollView>
        </View>
    );
}

const GetUserLocation = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
}

function Map() {
    const [userPosition, setUserPosition] = useState<any>();
    GetUserLocation().then((position: PositionCallback | any) => {
        setUserPosition(position['coords']);
    });

    return (
        <View style={map_styles.map_wrapper}>
            {userPosition && <MapView 
                style={map_styles.map}
                provider={PROVIDER_GOOGLE}
                customMapStyle={GOOGLE_DATA}
                showsUserLocation
                followsUserLocation={true}
                initialRegion={{ 
                    latitude: userPosition['latitude'], 
                    longitude: userPosition['longitude'], 
                    latitudeDelta: 0.1877, 
                    longitudeDelta: 0.1701 
                }}
                showsTraffic={true}
                onRegionChangeComplete={region => console.log(region)}
            >   
                {POLYGON_DATA.map((pol, i) => {
                    <Polygon 
                        key={pol.id}
                        coordinates={pol.coordinates}
                        strokeColor={pol.strokeColor}
                        fillColor={pol.fillColor}
                        strokeWidth={pol.strokeWidth}
                        style={{zIndex: 8}}
                    />
                })}
            </MapView> }
        </View>
    );
}

function Navigation() {
    const [destination, setDestination] = useState('Destination');
    const [from, setFrom] = useState('Current Location');
    const [inputting, setInputting] = useState<boolean>(false);
    return (
        <View style={navigation_styles.navigation_wrapper}>
            <Text style={navigation_styles.intro}>To: </Text>
            <TextInput 
                style={[navigation_styles.text_input]} 
                keyboardAppearance={'dark'}
                value={destination}
                onChangeText={text => setDestination(text)}
                onFocus={e => {
                    setDestination('');
                    setInputting(true);
                }}
            />
            {inputting && 
                <View>
                    <Text style={navigation_styles.intro_from}>From: </Text>
                    <TextInput 
                        style={[navigation_styles.text_input]} 
                        keyboardAppearance={'dark'}
                        value={from}
                        onChangeText={text => setFrom(text)}
                        onFocus={e => {
                            setFrom('');
                        }}
                    />
                </View>
            }
        </View>
    );
}

function Card({route} : HomeStackNavProps<'Card'>) {
    return (
        <View style={{backgroundColor:'#00'}}>
            {route.params.id === 0 ? 
                <View style={map_styles.container}>
                    <Navigation />
                    <Map />
                </View>
            : route.params.id === 1 ?
                <Text>{route.params.title}</Text>
            :
                <Text>{route.params.title}</Text>
            }
        </View>
    );
}

const _renderItem = (item:any, i:any, navigation:any) => {
    return (
        <View key={item.id} style={[home_stack_styles.item, { height: item.height }]}>
            <TouchableWithoutFeedback style={[home_stack_styles.metaContainer, {backgroundColor: item.back}]} onPress={() => {
                navigation.navigate('Card', {
                    id: item.id,
                    title: item.title,
                    height: item.height
                });
            }}>
                <Text style={[home_stack_styles.font, home_stack_styles.title]}>{item.title}</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null,
            cardStyle: {backgroundColor: '#000'}
        }}>
            <Stack.Screen name='Feed' component={Feed} />
            <Stack.Screen name='Card' component={Card} />
        </Stack.Navigator>
    )
}

const home_stack_styles = StyleSheet.create({
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
    },
    item: {
        width,
        alignItems: 'center',
        marginBottom: 40
    },
    metaContainer: {
        width: width - 50,
        height: '100%',
        backgroundColor: 'gray',
        borderRadius: 13
    },
    font: {
        color: '#fff'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: 20,
        marginLeft: 20
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    }
});

const map_styles = StyleSheet.create({
    map_wrapper: {
        width,
        height,
        backgroundColor: '#000'
    },
    map: {
        width: '100%',
        height: '110%',
        backgroundColor: '#000'
    },
    container: {
        width,
        height,
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#000'
    }
});

const navigation_styles = StyleSheet.create({
    navigation_wrapper: {
        position: 'absolute',
        top: 70,
        width,
        paddingStart: 30,
        paddingEnd: 30,
        zIndex: 5
    },
    text_input: {
        width: '100%',
        height: 50,
        backgroundColor: '#171717',
        borderRadius: 15,
        paddingStart: 70,
        color: '#fff',
        fontSize: 17,
        marginBottom: 8
    },
    intro: {
        position: 'absolute',
        color: 'grey',
        fontSize: 17,
        zIndex: 8,
        left: 45,
        top: 14
    },
    intro_from: {
        position: 'absolute',
        color: 'grey',
        fontSize: 17,
        zIndex: 8,
        left: 15,
        top: 14
    }
});