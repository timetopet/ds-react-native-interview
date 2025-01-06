import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'About' }} />
      <Container>
        <View>
          <Text>About This Project</Text>
          <Text>It uses expo go</Text>
          <Text>It uses Nativewind (Tailwind for React Native). Please feel free to use the className attribute: [link]</Text>
        </View>
        <View>
          <Text>API Endpoint</Text>
          <Text>https://5883dcde-0802-46f6-a274-461dfdcb0080.mock.pstmn.io/petPhotoGallery</Text>
        </View>
      </Container>
    </>
  );
}