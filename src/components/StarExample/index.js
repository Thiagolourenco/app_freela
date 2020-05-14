import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Star from '../Star';

const numStars = 5;

export default function StarExample({rating, size}) {
  let stars = [];

  for (let x = 1; x <= numStars; x++) {
    stars.push(
      <TouchableOpacity key={x} onPress={() => {}} activeOpacity={0.9}>
        <Star filled={x <= rating ? true : false} size={size} />
      </TouchableOpacity>,
    );
  }

  return <View style={styles.container}>{stars}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
