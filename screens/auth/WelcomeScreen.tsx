import { Alert, Image, Text, View } from 'react-native'
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import CustomButton from '../../components/Button'


const WelcomeScreen = ({ navigation }: any) => {

    return (
        <>
            <AuthHeader />
            <Text className='text-center w-full justify-center items-center text-2xl font-black text-primary'>Welcome</Text>
            <Text className='text-center m-auto w-[71%] leading-6 tracking-wide	 text-[16px] text-primary'>
                It’s a pleasure to meet you. We are excited that you’re here so let’s get started!
            </Text>
            <CustomButton
                title="Get Started"
                className="m-auto w-[90%] bg-[#EEA734] text-center p-4 rounded grayscale-0 bg-gradient-to-br"
                onPress={() => navigation.navigate('Crousel', { name: 'Jane' })}
            />
        </>
    )
}

export default WelcomeScreen