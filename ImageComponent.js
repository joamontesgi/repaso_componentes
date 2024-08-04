import React from 'react';
import { View, Image } from 'react-native';

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={require('./assets/favicon.png')}
      />
    </View>
  );
};

export default ImageComponent;


