import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const image = {
  uri: 'https://images.unsplash.com/photo-1609910276259-8351a48260b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
};

interface Player {
  playerID: number;
  playerName: string;
}

interface Players {
  players: [Player] | [null];
}

const players: {[key: string]: null[]} = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GCK: [null],
};

const CardComponent = () => {
  return (
    <View>
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Hello new bugger</Text>
      </View>
      <ImageBackground
        source={image}
        resizeMode="contain"
        imageStyle={styles.imageBackgroundStyle}
        style={styles.imageBackground}
      />
      <View />
      {Object.keys(players).map(position => (
        <View style={{flexDirection: 'row'}}>
          {players[position].map(player => (
            <Text>{player}</Text>
          ))}
        </View>
      ))}
      <View style={styles.ImageViewContainer}>
        <Image
          resizeMode="center"
          source={{
            uri: 'https://images.unsplash.com/photo-1630016537018-d46c0ad5c6bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          }}
          style={styles.imageStyleO}
        />
        <View style={styles.TextContainer}>
          <Text style={styles.TextInsideContainer}>hi</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageBackground: {
    height: 100,
    width: 100,
    // overflow: 'hidden',
    backgroundColor: 'pink',
    // borderRadius: 10,
  },
  imageBackgroundStyle: {
    borderRadius: 10,
  },
  imageStyleO: {
    height: 200,
    width: 200,
    borderRadius: 20,
  },
  ImageViewContainer: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  TextContainer: {position: 'absolute', top: 20, left: 15},
  TextInsideContainer: {color: 'white', fontSize: 12},
});

export default CardComponent;
