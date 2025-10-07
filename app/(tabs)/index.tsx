// Import library dan komponen yang dibutuhkan
import { ThemedText } from '@/components/themed-text'; // Komponen teks yang mendukung tema (dark/light mode)
import { ThemedView } from '@/components/themed-view'; // Komponen view yang mendukung tema (dark/light mode)
import { StyleSheet } from 'react-native'; // StyleSheet untuk membuat styling CSS-like

// Fungsi komponen utama untuk halaman Home
export default function HomeScreen() {
  // Return JSX - struktur tampilan yang akan ditampilkan
  return (
    // ThemedView = container utama yang mendukung tema
    // style={styles.container} = menerapkan styling dari StyleSheet di bawah
    <ThemedView style={styles.container}>
      {/* ThemedView kedua = container untuk konten di tengah */}
      <ThemedView style={styles.content}>
        {/* ThemedText untuk judul utama */}
        {/* type="title" = memberikan styling default untuk judul */}
        {/* style={styles.title} = menambahkan styling custom */}
        <ThemedText type="title" style={styles.title}>
          Profil Mahasiswa
        </ThemedText>
        
        {/* ThemedText untuk nama */}
        <ThemedText style={styles.subtitle}>
          Nama: Muhamad Iqbal Firdaus
        </ThemedText>
        
        {/* ThemedText untuk NIM */}
        <ThemedText style={styles.nim}>
          NIM: 1123031004
        </ThemedText>
        
        {/* ThemedText untuk program studi */}
        <ThemedText style={styles.programStudi}>
          Program Studi: Teknik Informatika
        </ThemedText>
        
        {/* ThemedText untuk deskripsi */}
        <ThemedText style={styles.description}>
          Selamat datang di aplikasi Expo pertama saya! 🎉
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

// StyleSheet untuk styling komponen (seperti CSS tapi untuk React Native)
const styles = StyleSheet.create({
  // Style untuk container utama
  container: {
    flex: 1, // Menggunakan seluruh ruang yang tersedia
    justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
    alignItems: 'center', // Menempatkan konten di tengah secara horizontal
    padding: 20, // Jarak dari tepi layar
  },
  // Style untuk container konten
  content: {
    alignItems: 'center', // Menempatkan semua item di tengah
    maxWidth: 300, // Lebar maksimal konten
  },
  // Style untuk judul utama
  title: {
    fontSize: 32, // Ukuran font besar
    fontWeight: 'bold', // Font tebal
    marginBottom: 14, // Jarak bawah dari elemen berikutnya
    textAlign: 'center', // Teks di tengah
  },
  // Style untuk nama
  subtitle: {
    fontSize: 20, // Ukuran font sedang-besar
    marginBottom: 8, // Jarak bawah
    textAlign: 'center', // Teks di tengah
    fontWeight: '600', // Font semi-bold
    opacity: 0.9, // Transparansi 90%
  },
  // Style untuk NIM
  nim: {
    fontSize: 18, // Ukuran font sedang
    marginBottom: 8, // Jarak bawah
    textAlign: 'center', // Teks di tengah
    fontWeight: '500', // Font medium
    opacity: 0.8, // Transparansi 80%
  },
  // Style untuk Program Studi
  programStudi: {
    fontSize: 16, // Ukuran font normal
    marginBottom: 16, // Jarak bawah
    textAlign: 'center', // Teks di tengah
    fontWeight: '500', // Font medium
    opacity: 0.8, // Transparansi 80%
  },
  // Style untuk deskripsi
  description: {
    fontSize: 16, // Ukuran font normal
    textAlign: 'center', // Teks di tengah
    lineHeight: 24, // Jarak antar baris
    opacity: 0.7, // Transparansi 70%
    marginTop: 20, // Jarak atas dari elemen sebelumnya
  },
});