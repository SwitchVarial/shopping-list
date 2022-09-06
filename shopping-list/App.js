import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([...list, { key: item }]);
    setItem("");
    Keyboard.dismiss();
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.control}>
        <TextInput
          style={styles.input}
          onChangeText={(item) => setItem(item)}
          value={item}
        />
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={addItem}>
            <Text style={styles.buttontext}>Add</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={clearList}>
            <Text style={styles.buttontext}>Clear</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.listTitle}>
        <Text style={styles.title}>Shopping List</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          style={styles.text}
          data={list}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={styles.text}>{item.key}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
  listTitle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  control: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 60,
  },
  list: {
    marginTop: 5,
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "80%",
  },
  input: {
    marginTop: 30,
    marginBottom: 5,
    width: "80%",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "steelblue",
  },
  buttontext: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "steelblue",
  },
  text: {
    fontSize: 20,
    color: "steelblue",
    textAlign: "center",
  },
});
