import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

// import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  const [newMsg, setNewMsg] = useState("");
  const onSend = () => {
    console.warn("Sending a new message ....", newMsg);
    setNewMsg("");
  };
  return (
    <View style={styles.container}>
      {/* <AntDesign name="plus" size={24} color="royalblue" /> */}
      <TextInput
        value={newMsg}
        onChangeText={setNewMsg}
        style={styles.input}
        placeholder="type your message"
      />
      {/* <MaterialIcons name="send" size={24} color="white" /> */}
      <Button title="Send" onPress={onSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default InputBox;
