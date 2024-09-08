import React from 'react';
import { Pressable, Text } from 'react-native';
import { Alert } from 'react-native';

// Reusable Button Component
const CustomButton = ({ title, onPress, variant = 'primary', className = '' }: any) => {
    // Define base and variant-specific classes
    const baseClasses = 'w-[90%] p-4 rounded items-center m-auto';
    const primaryClasses = 'bg-[#EEA734] text-white';
    const secondaryClasses = 'bg-white text-[#EEA734] border border-[#EEA734]';

    const combinedClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;

    return (
        <Pressable
            onPress={onPress}
            className={combinedClasses}
            style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
        >
            <Text className="text-center text-[16px] text-white">{title}</Text>
        </Pressable>
    );
};

export default CustomButton