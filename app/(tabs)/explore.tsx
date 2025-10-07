import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ExploreScreen() {
  const kolamData = [
    { id: 1, nama: "Kolam A", jenis: "Lele", jumlah: 1200, suhu: 29 },
    { id: 2, nama: "Kolam B", jenis: "Nila", jumlah: 950, suhu: 27 },
    { id: 3, nama: "Kolam C", jenis: "Gurame", jumlah: 500, suhu: 28 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Data Kolam</Text>
        <Text style={styles.subtitle}>
          Informasi jumlah ikan dan kondisi kolam
        </Text>
      </View>

      {kolamData.map((kolam) => (
        <View key={kolam.id} style={styles.card}>
          <Text style={styles.kolamNama}>{kolam.nama}</Text>
          <Text style={styles.info}>Jenis Ikan: {kolam.jenis}</Text>
          <Text style={styles.info}>Jumlah Ikan: {kolam.jumlah}</Text>
          <Text style={styles.info}>Suhu Air: {kolam.suhu}°C</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F0FA", // biru lembut
  },
  header: {
    backgroundColor: "#007BFF",
    paddingVertical: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#f0f0f0",
    fontSize: 14,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  kolamNama: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0056b3",
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: "#333",
  },
});
