import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HoldButton from "./HoldButton";

export default function MultiTouchDemo() {
  const [value, setValue] = useState(0);
  const [holding, setHolding] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multitouch demo</Text>
      <HoldButton label="Hold with one finger" onHolding={setHolding} />
      <Text style={styles.status}>Holding: {holding ? "Yes" : "No"}</Text>

      <View style={styles.sliderRow}>
        <Slider
          style={styles.slider}
          minimumValue={-100}
          maximumValue={100}
          value={value}
          onValueChange={setValue}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#1fb28a"
        />
        <Text style={styles.value}>{Math.round(value)}</Text>
      </View>

      <Text style={styles.hint}>Use one finger to hold the button and another to slide.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  status: {
    marginBottom: 12,
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 480,
    marginTop: 8,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  value: {
    width: 48,
    textAlign: "center",
    fontWeight: "600",
  },
 
  hint: {
    marginTop: 12,
    color: "#555",
    textAlign: "center",
  },
});
