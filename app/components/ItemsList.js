import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';

export const ItemsList = ({items, navigation}) => {
  return (
    <View >
      <FlatList
        data={items}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainerStyle}>
              <Text style={styles.cardTextStyle}>
                {item.user.first_name} {'\n'}
                {'\n'}
                {item.alt_description ? item.alt_description : 'no description'}
              </Text>

              <TouchableHighlight
                onPress={() => {
                  navigation.push('Detail', {
                    itemId: item.id,
                    picture: item.urls.regular,
                  });
                }}>
                <Image
                  style={styles.faceImageStyle}
                  source={{uri: item.urls.small}}
                />
              </TouchableHighlight>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#093339',
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: '#4e8087',
    padding: 10,
  },
  faceImageStyle: {
    width: 65,
    height: 65,
  },
  cardTextStyle: {
    color: 'white',
    textAlign: 'left',
    width:"80%"
  },
});
