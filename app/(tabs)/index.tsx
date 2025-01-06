import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Assignment' }} />
      <Container>
        <Text className="text-2xl font-bold mb-7">Hello World.</Text>
        <Text className="text-lg mb-7">This is a take home assignment. It is intended to be completed in 2-4 hours. Please do not take more than 4 hours on this assignment.</Text>
        <Text className="text-lg mb-3">Step 1: Display a gallery of images retrieved from an API endpoint. You can find the API information on the "About" page.</Text>
        <Text className="text-lg mb-3">Step 2: Add the ability to filter by pet name on the gallery.</Text>
        <Text className="text-lg mb-3">Step 3: Add the ability to press on an image to see a full screen version and the pet names.</Text>
        <Text className="text-lg mt-5">When you have completed the assignment, create a zip file of the project folder and send it via email. Make sure to commit your work locally.</Text>
      </Container>
    </>
  );
}