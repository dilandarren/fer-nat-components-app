import { useAnimation } from '@/hooks/useAnimation';
import { useState } from 'react';
import { View, ActivityIndicator, StyleProp, Image, ImageStyle, Animated } from 'react-native'
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}


const FadeInImage = ({uri, style}: Props) => {

    const [isLoading, setIsLoading] = useState(true)
    const {animatedOpacity, fadeIn} = useAnimation();

    return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center' 
    }}
    >
        {
            isLoading && (
                <ActivityIndicator 
                    style={{position: 'absolute'}}
                    color="grey"
                    size={30}
                />
            )
        }
        <ActivityIndicator />
        <Animated.Image 
            source={{uri}}
            style={ [style, {
                opacity: animatedOpacity
            }] }
            onLoadEnd={ () => {
                fadeIn({});
                setIsLoading(false)
            }}
        />
    </View>
    )
}

export default FadeInImage