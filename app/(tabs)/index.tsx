import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function IndexScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pakan Ikan</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informasi Pakan</Text>
        <Text style={styles.cardText}>
          Pantau penggunaan pakan harian dan stok pakan untuk setiap kolam ikan.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Statistik Penggunaan</Text>
        <Text style={styles.cardText}>
          Grafik dan data konsumsi pakan akan muncul di sini.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F0FA", // biru muda lembut
  },
  header: {
    backgroundColor: "#007BFF", // biru utama
    paddingVertical: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0056b3", // biru gelap
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
});
