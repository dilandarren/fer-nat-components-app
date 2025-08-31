import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const {
    animatedOpacity,
    animatedTop, 
    fadeIn, 
    fadeOut, 
    starMovieTopPosition
  } = useAnimation();



  return (
    <ThemedView margin className='justify-center items-center flex-1'>
      <Animated.View 
        className='bg-light-secondary dark:bg-light-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop,
          }]
        }}
      />


      <ThemedButton
        onPress={() => {
          fadeIn({});
          starMovieTopPosition({
            easing: Easing.bounce,
            duration: 700
          });
        }}
        className='my-5'
      >
        FadeIn
      </ThemedButton>

      <ThemedButton
        onPress={() => fadeOut({})}
        className='my-5'
      >
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
