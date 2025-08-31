import ThemedView from '@/presentation/shared/ThemedView';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView >

      <Link asChild href="/modal/modal-window" className='mx-4'>
        <Text
          className='text-white dark:text-dark-text my-5 text-xl text-center bg-light-primary dark:bg-dark-primary rounded-xl border'
        >
          Abrir Modal
        </Text>
      </Link>

    </ThemedView>
  );
};
export default ModalScreen;
