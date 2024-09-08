import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'


const AuthHeader = () => {
    const logo = require("../../assets/images/logo.png")
    const bk_image = require("../../assets/images/circle-background.png");

    return (
        <View className='h-[70%]'>
            <ImageBackground source={bk_image} resizeMode="cover" className='h-[410px] w-[98%]'>
                <View className='flex-row pt-[70px] pl-5 gap-5'>
                    <Image source={logo} style={{ width: 65, height: 65 }} />
                    <Text className="text-3xl text-gap tracking-wider text-center break-all w-1/2 text-black font-poppins-ebold-italic font-black scale-125" >Tamang FoodService</Text>
                </View>
                <View className='w-full items-center justify-center'>
                    <Image
                        source={require("../../assets/images/Illustration.png")}
                        style={{ width: 300, height: 350 }}
                        className='w-full contain mt-[50px] ml-[5]'
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default AuthHeader