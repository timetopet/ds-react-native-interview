import { MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';

import { Container } from '~/components/Container';

const API_URL = 'https://718f5cb7-2f4b-4c08-96d0-842cfae49a4d.mock.pstmn.io/petPhotoGallery';

type photoTypes = {
  url: string;
  pets: string[];
  createdAt: string;
};

export default function Home() {
  const [photos, setPhotos] = useState<photoTypes[]>([]);
  // seperate hook to not influence API output directly
  const [filteredPhotos, setFilteredPhotos] = useState<photoTypes[]>([]);

  // For modal
  const [selectedPhoto, setSelectedPhoto] = useState<photoTypes | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // component mount, fetch the data initially
  useEffect(() => {
    fetchData();
  }, []);

  // copying `photos` into `filteredPhotos`
  useEffect(() => {
    setFilteredPhotos(photos);
  }, [photos]);

  async function fetchData() {
    const response = await fetch(API_URL);
    const dataObj = await response.json();
    setPhotos(dataObj.photos);
  }

  function handleSearch(searchTerm: string) {
    setFilteredPhotos(
      photos.filter((photo: photoTypes) => {
        return photo.pets.some((pet) => pet.toLowerCase().includes(searchTerm.toLowerCase()));
      })
    );
  }

  function handleImagePress(photo: photoTypes) {
    setSelectedPhoto(photo);
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
    setSelectedPhoto(null);
  }

  // each image component
  const renderImage = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress(item)}>
          <Image src={item.url} style={styles.image} alt={item.pets.join(', ')} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Assignment Solution',
          headerSearchBarOptions: {
            placeholder: 'search pets...',
            onChangeText: (event) => {
              handleSearch(event.nativeEvent.text);
            },
          },
        }}
      />
      <Container>
        {/* <TextInput
          editable
          style={styles.searchInput}
          placeholder="search pets..."
          onChangeText={handleSearch}
        /> */}
        {/* to get display in rows and columns */}
        <FlatList
          data={filteredPhotos}
          renderItem={renderImage}
          numColumns={3}
          contentContainerStyle={{ padding: 10 }}
        />

        {selectedPhoto && (
          <Modal
            visible={isModalVisible}
            // transparent={true}
            animationType="fade"
            onRequestClose={closeModal}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image src={selectedPhoto.url} style={styles.fullImage} />
              <Text style={styles.modalText}>{selectedPhoto.pets.join(' & ')}</Text>
              <MaterialIcons name="close" onPress={closeModal} size={40} style={{ color: 'red' }} />
            </View>
          </Modal>
        )}
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  fullImage: {
    resizeMode: 'contain',
    marginTop: 50,
    width: '90%',
    height: '80%',
    borderRadius: 15,
  },
  modalText: {
    marginTop: 20,
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
