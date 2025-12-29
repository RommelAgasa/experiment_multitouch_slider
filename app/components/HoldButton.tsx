import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label?: string;
  onHolding?: (holding: boolean) => void;
};

export default function HoldButton({ label = "Press and hold", onHolding }: Props) {
  const [holding, setHolding] = useState(false);
  const touchIds = useRef<Set<number>>(new Set());

  function handleTouchStart(e: any) {
    const changed: any[] = e.nativeEvent.changedTouches || e.nativeEvent.touches || [];
    changed.forEach((t) => {
      if (typeof t.identifier === "number") touchIds.current.add(t.identifier);
    });
    if (touchIds.current.size > 0 && !holding) {
      setHolding(true);
      onHolding?.(true);
    }
  }

  function handleTouchEnd(e: any) {
    const changed: any[] = e.nativeEvent.changedTouches || [];
    changed.forEach((t) => {
      if (typeof t.identifier === "number") touchIds.current.delete(t.identifier);
    });
    if (touchIds.current.size === 0 && holding) {
      setHolding(false);
      onHolding?.(false);
    }
  }

  return (
    <View
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={[styles.button, holding && styles.holding]}
    >
      <Text style={styles.text}>{holding ? "Holding" : label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1976d2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  holding: {
    backgroundColor: "#135ba1",
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});
