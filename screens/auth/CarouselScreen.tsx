import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from '../../components/Carousel'
import CustomButton from '../../components/Button'



const CarouselScreen = ({ navigation }: any) => {
    const logo = require("../../assets/images/logo.png")

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 60 }}></View>
            <View className='flex-row  pl-5 gap-5 mb-9'>
                <Image source={logo} style={{ width: 65, height: 65, objectFit: "contain" }} />
                <Text className="text-3xl text-gap tracking-wider text-center break-all w-1/2 text-black font-poppins-ebold-italic font-black scale-125" >Tamang FoodService</Text>
            </View>
            <Carousel />
            <CustomButton title="Get Started" className="rounded border-spacing-1 p-4" onPress={() => navigation.navigate("Login")} />
        </View>
    )
}


const styles = StyleSheet.create({

})
export default CarouselScreen
