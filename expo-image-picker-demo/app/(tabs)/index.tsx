import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, useWindowDimensions, Alert, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Define the structure of an image item
interface ImageItem {
  uri: string;
}

export default function HomeScreen() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const { width } = useWindowDimensions();

  // Function to pick multiple images from the gallery
  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newImages = result.assets.map((asset) => ({ uri: asset.uri }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  // Function to take a photo using the camera
  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert(
        "Camera Permission Required",
        "To use the camera feature, you must allow the app to access the camera.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => Linking.openSettings() }
        ]
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, { uri: result.assets[0].uri }]);
    }
  };

  // Render function for carousel items
  const renderCarouselItem = ({ item }: { item: ImageItem }) => (
    <View style={styles.carouselItemContainer}>
      <Image source={{ uri: item.uri }} style={styles.carouselImage} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Image Gallery</Text>
        
        {images.length > 0 ? (
          <Carousel
            loop
            width={width}
            height={width * 0.75}
            autoPlay={true}
            data={images}
            scrollAnimationDuration={5000}
            renderItem={renderCarouselItem}
            style={styles.carousel}
          />
        ) : (
          <View style={styles.placeholderContainer}>
            <Ionicons name="images-outline" size={64} color="#ccc" />
            <Text style={styles.noImagesText}>No images selected</Text>
          </View>
        )}
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={pickImages}>
            <Ionicons name="images" size={24} color="#fff" />
            <Text style={styles.buttonText}>Pick Images</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Ionicons name="camera" size={24} color="#fff" />
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4a90e2',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  carouselItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImagesText: {
    fontSize: 18,
    color: '#999',
    marginTop: 10,
  },
  carousel: {
    width: '100%',
    aspectRatio: 4 / 3,
    marginBottom: 20,
  },
});