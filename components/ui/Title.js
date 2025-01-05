import { Text, StyleSheet } from "react-native";


function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    //fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: 12,
  },
});
