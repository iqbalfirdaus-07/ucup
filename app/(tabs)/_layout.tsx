import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007BFF", // biru utama
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#e0e0e0",
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pakan Ikan",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fish" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Data Kolam",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="water" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
