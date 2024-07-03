import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Message" />
      <Stack.Screen name="Signup" />
    </Stack>
  );
}
