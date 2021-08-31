import React from 'react';
import {
  Pressable,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
  incrementTenCounter,
} from './ReduxImplementation/Counter/counterSlice';
import {RootState} from './ReduxImplementation/Counter/counterSlice';
import RecoilCounterComponent from './Components/RecoilCounterComponent';

const App = () => {
  // const [aVariable, setaVariable] = useState(0);
  const {tenValue} = useSelector((state: RootState) => state.counterTen);
  const {value} = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Counter using React-redux toolkit</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.pressableStyle}
          onPress={() => dispatch(decrementCounter())}>
          <Text style={styles.textStyle}>-</Text>
        </Pressable>
        <Text style={styles.textStyle}>{value}</Text>
        <Pressable
          style={styles.pressableStyle}
          onPress={() => dispatch(incrementCounter())}>
          <Text style={styles.textStyle}>+</Text>
        </Pressable>
        {/* <CardComponent /> */}
      </View>
      <View>
        <Button
          onPress={() => dispatch(incrementTenCounter())}
          title="press me"
        />
        <Text>{tenValue}</Text>
      </View>
      <RecoilCounterComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableStyle: {
    margin: 10,
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default App;
