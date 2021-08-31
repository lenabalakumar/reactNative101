import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { counterAtom, idAtom, userAtom } from '../CounterRecoil/counterAtom';
import { counterSelector } from '../CounterRecoil/counterAtom';

const RecoilCounterComponent = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [value, setValue] = useRecoilState(counterAtom);
  const counterOperation = useRecoilValue(counterSelector);
  const [idAtom, setIdAtom] = useRecoilState(idAtom);

  return (
    <View style={styles.recoilContainer}>
      <Text>Counter using Recoil state management</Text>
      <View style={styles.counterContainer}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setValue(value - 1)}>
          <Text style={styles.counterButton}>-</Text>
        </Pressable>
        <View style={styles.counterValueContainer}>
          <Text>{value}</Text>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setValue(value + 1)}>
          <Text style={styles.counterButton}>+</Text>
        </Pressable>
      </View>
      <View>
        <Text>Number of counter operations performed: {counterOperation}</Text>
      </View>
      <View>
        <Pressable
          onPress={() => setUser([...user, { id: 2, name: 'Ironman' }])}>
          <Text>Click me to add an user</Text>
        </Pressable>
        <View>
          {user.map(usr => (
            <View>
              <Text>id: {usr.id}</Text>
              <Text>{usr.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  counterButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterValueContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recoilContainer: {
    margin: 20,
    width: '80%',
    height: '20%',
    alignItems: 'center',
  },
});

export default RecoilCounterComponent;
