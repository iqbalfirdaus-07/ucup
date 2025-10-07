// Import library yang diperlukan untuk tab navigation
import { Tabs } from 'expo-router'; // Komponen untuk membuat tab navigation
import React from 'react'; // Library React untuk membuat komponen
import { View } from 'react-native'; // Komponen View untuk membuat layout

// Import komponen dan hook yang dibutuhkan
import { Colors } from '@/constants/theme'; // Warna tema untuk light/dark mode
import { useColorScheme } from '@/hooks/use-color-scheme'; // Hook untuk mendeteksi tema

// Komponen Ikon Home - Membuat ikon rumah dengan bentuk segitiga dan persegi
const HomeIcon = ({ color }: { color: string }) => (
  // Container utama untuk ikon rumah - ukuran 24x24 pixel
  <View style={{ alignItems: 'center', justifyContent: 'center', width: 24, height: 24 }}>
    {/* Atap rumah - menggunakan trik border untuk membuat segitiga */}
    <View
      style={{
        width: 0, // Lebar 0 agar tidak ada background
        height: 0, // Tinggi 0 agar tidak ada background
        backgroundColor: 'transparent', // Background transparan
        borderStyle: 'solid', // Style border solid
        borderLeftWidth: 8, // Border kiri 8px (transparan)
        borderRightWidth: 8, // Border kanan 8px (transparan)
        borderBottomWidth: 6, // Border bawah 6px (berwarna)
        borderLeftColor: 'transparent', // Border kiri transparan
        borderRightColor: 'transparent', // Border kanan transparan
        borderBottomColor: color, // Border bawah menggunakan warna parameter
        marginBottom: 1, // Jarak bawah 1px dari badan rumah
      }}
    />
    {/* Badan rumah - persegi panjang dengan sudut melengkung */}
    <View
      style={{
        width: 14, // Lebar badan rumah 14px
        height: 10, // Tinggi badan rumah 10px
        backgroundColor: 'transparent', // Background transparan (hanya border)
        borderWidth: 2, // Ketebalan border 2px
        borderColor: color, // Warna border menggunakan parameter
        borderTopWidth: 0, // Border atas tidak ada (menyatu dengan atap)
        borderBottomLeftRadius: 2, // Sudut kiri bawah melengkung
        borderBottomRightRadius: 2, // Sudut kanan bawah melengkung
      }}
    />
  </View>
);

// Komponen Ikon Profile - Membuat ikon orang dengan bentuk kepala dan badan
const ProfileIcon = ({ color }: { color: string }) => (
  // Container utama untuk ikon profile - ukuran 24x24 pixel
  <View style={{ alignItems: 'center', justifyContent: 'center', width: 24, height: 24 }}>
    {/* Kepala - lingkaran kecil di bagian atas */}
    <View
      style={{
        width: 8, // Lebar kepala 8px
        height: 8, // Tinggi kepala 8px
        borderRadius: 4, // Border radius setengah dari lebar untuk membuat lingkaran
        backgroundColor: 'transparent', // Background transparan (hanya border)
        borderWidth: 2, // Ketebalan border 2px
        borderColor: color, // Warna border menggunakan parameter
        marginBottom: 2, // Jarak bawah 2px dari badan
      }}
    />
    {/* Badan - bentuk trapezoid dengan sudut melengkung */}
    <View
      style={{
        width: 12, // Lebar badan 12px
        height: 8, // Tinggi badan 8px
        backgroundColor: 'transparent', // Background transparan (hanya border)
        borderWidth: 2, // Ketebalan border 2px
        borderColor: color, // Warna border menggunakan parameter
        borderTopWidth: 0, // Border atas tidak ada (menyatu dengan kepala)
        borderBottomLeftRadius: 6, // Sudut kiri bawah sangat melengkung
        borderBottomRightRadius: 6, // Sudut kanan bawah sangat melengkung
      }}
    />
  </View>
);

// Fungsi utama untuk mengatur layout tab navigation
export default function TabLayout() {
  // Mendapatkan tema saat ini (light atau dark mode)
  const colorScheme = useColorScheme();

  // Return komponen Tabs dengan konfigurasi
  return (
    <Tabs
      screenOptions={{
        // Warna tab yang aktif mengikuti tema (light/dark mode)
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Menyembunyikan header di setiap tab
        headerShown: false,
      }}>
      
      {/* Tab pertama - Halaman Home */}
      <Tabs.Screen
        name="index" // Nama file: app/(tabs)/index.tsx
        options={{
          title: 'Home', // Nama yang muncul di tab
          // Ikon tab menggunakan komponen HomeIcon yang sudah dibuat
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      
      {/* Tab kedua - Halaman About Me */}
      <Tabs.Screen
        name="explore" // Nama file: app/(tabs)/explore.tsx
        options={{
          title: 'About Me', // Nama yang muncul di tab
          // Ikon tab menggunakan komponen ProfileIcon yang sudah dibuat
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}