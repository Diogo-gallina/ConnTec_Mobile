import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native"; //importando componentes

export default function OnbordingItem({ item }) {
  //funcao dos titulo,descricao da onbording

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: 45,
  },
  title: {
    fontWeight: "200",
    fontSize: 42,
    marginBottom: 10,
    color: "#B20000",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 40,
    fontSize: 20,
  },
});
