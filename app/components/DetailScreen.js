import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export const DetailScreen = ({route}) => {
  const {picture} = route.params;

  return (
    <View>
      <Image style={styles.faceImageStyle} source={{uri: picture}} />
    </View>
  );
};

const styles = StyleSheet.create({
  faceImageStyle: {
    width: '100%',
    height: '100%',
    
  },
});
