import {FC, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import {launchImageLibrary} from 'react-native-image-picker';
import Button from '../../components/UIELements/Button';
import unit from '../../styles/unit';

type LostItemsProps = {};

const LostItems: FC<LostItemsProps> = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log('🚀 ~ selectedImage:', selectedImage);
  const options = {
    title: 'Select Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const handleChoosePhoto = async () => {
    const result = await launchImageLibrary(options, response => {});
    setSelectedImage(result?.assets?.[0]?.uri);
  };

  return (
    <Layout HeaderVisablity>
      <View style={styles.container}>
        <Button
          onPress={handleChoosePhoto}
          text="Choose Photo"
          style={styles.button}
        />

        <View style={styles.imageContainer}>
          <Image
            source={{uri: selectedImage}}
            alt="Add Image"
            defaultSource={{
              uri: 'data:image/png;base64,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',
            }}
            style={styles.selectedImage}
          />
        </View>

        <Button text="Sumbit" style={styles.button} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  choosePhotoButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },

  imageContainer: {
    marginTop: 20,
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  button: {
    marginTop: 20 * unit,
  },
});

export default LostItems;
