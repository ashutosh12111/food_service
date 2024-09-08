import React, { useRef, useState } from 'react';
import { View, Text, Image, Animated, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const data = [
    {
        image: require("../../assets/images/dish_spoon.png"),
        heading: 'All your favorites',
        paragraph: 'Order from the best local restaurants with easy, on-demand delivery..',
    },
    {
        image: require("../../assets/images/dish_drive.png"),
        heading: 'Free delivery offers',
        paragraph: 'Free delivery for new customers via Apple Pay and others payment methods.',
    },
    {
        image: require("../../assets/images/dish_pizza.png"),
        heading: 'Choose your food',
        paragraph: 'Easily find your type of food craving and you’ll get delivery in wide range..',
    },
];

const Carousel = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        setCurrentIndex(Math.round(offsetX / width));
    };

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false, listener: handleScroll }
                )}
                scrollEventThrottle={16}
            >
                {data.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.heading}>{item.heading}</Text>
                        <Text style={styles.paragraph}>{item.paragraph}</Text>
                    </View>
                ))}
            </Animated.ScrollView>
            <View style={styles.pagination}>
                {data.map((_, index) => {
                    const opacity = scrollX.interpolate({
                        inputRange: [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width,
                        ],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View
                            className={`w-[8px] h-[5px] `}
                            key={index}
                            style={[styles.dot, { opacity }]}
                        />
                    );
                })}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: width,
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 383,
        borderRadius: 10,
        marginBottom: 10,
        objectFit: "contain"
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        marginVertical: 5,
        color: "black",
        marginTop: 40
    },
    paragraph: {
        fontSize: 14,
        textAlign: 'center',
    },
    pagination: {
        flexDirection: 'row',
    },
    dot: {
        borderRadius: 5,
        backgroundColor: '#22A45D',
        marginHorizontal: 5,
    },
});

export default Carousel;
