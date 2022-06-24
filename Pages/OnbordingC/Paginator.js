import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from "react-native"; //importando componentes

export default function Paginator({ data, scrollX }) {
  //funcao passar paginas

  const { width } = useWindowDimensions;

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {
        return (
          <Animated.View
            style={[styles.dot, { width: 10 }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 6,
    backgroundColor: "#B20000",
    marginHorizontal: 8,
    marginTop: 50,
  },
});
