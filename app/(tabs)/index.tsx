import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Assignment' }} />
      <Container>
        <Text className="text-xl font-bold mb-4">Hello World.</Text>
        <Text className="mb-3">This is a take home assignment. It is intended to be completed in 2-4 hours. Please do not take more than 4 hours on this assignment.</Text>
        <Text className="mb-3">The task is simple. Display a gallery of images retreived from an API endpoint. You can find the API information on the "About" page. </Text>
        <Text className="mb-3">If you have additional time, add the ability to do one of the following:</Text>
        <Text className="mb-3">- Sort by oldest / newest</Text>
        <Text className="mb-5">- Filter by pet</Text>

        <Text className="mb-2">When you are done, open a pull request with your changes here: "[url]"</Text>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
