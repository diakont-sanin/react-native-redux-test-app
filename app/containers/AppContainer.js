import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {ItemsList} from '../components/ItemsList';
import {fetchItems} from '../redux/actions/itemActions';
import {connect} from 'react-redux';

const AppContainer = ({navigation, fetchItems, allItems}) => {
  const {items, isFetching} = allItems;

  useEffect(() => {
    fetchItems();
  }, []);

  if (isFetching) {
    <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.container}>
      <ItemsList items={items} navigation={navigation} />
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
});

const mapStateToProps = state => {
  return {
    allItems: state,
  };
};

export default connect(
  mapStateToProps,
  {fetchItems},
)(AppContainer);
