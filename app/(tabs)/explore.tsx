// Import library dan komponen yang dibutuhkan
import { ThemedText } from '@/components/themed-text'; // Komponen teks yang mendukung tema (dark/light mode)
import { ThemedView } from '@/components/themed-view'; // Komponen view yang mendukung tema (dark/light mode)
import { StyleSheet } from 'react-native'; // StyleSheet untuk membuat styling CSS-like

// Fungsi komponen utama untuk halaman About Me
export default function AboutMeScreen() {
  // Return JSX - struktur tampilan yang akan ditampilkan
  return (
    // Container utama dengan padding 20px dari semua sisi
    <ThemedView style={styles.container}>
      {/* Container untuk konten di dalam */}
      <ThemedView style={styles.content}>
        
        {/* Header section - berisi ikon dan judul */}
        <ThemedView style={styles.header}>
          {/* Emoji ikon profil besar di bagian atas */}
          <ThemedText style={styles.emojiIcon}>👤</ThemedText>
          {/* Judul utama halaman */}
          <ThemedText type="title" style={styles.title}>
            About Me
          </ThemedText>
        </ThemedView>

        {/* Section informasi pribadi */}
        <ThemedView style={styles.section}>
          {/* Judul section informasi pribadi */}
          <ThemedText style={styles.sectionTitle}>Personal Information</ThemedText>
          
          {/* Baris informasi nama */}
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.emojiSmall}>👤</ThemedText>
            <ThemedText style={styles.infoText}>Muhamad Iqbal Firdaus</ThemedText>
          </ThemedView>
          
          {/* Baris informasi NIM */}
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.emojiSmall}>🔢</ThemedText>
            <ThemedText style={styles.infoText}>1123031004</ThemedText>
          </ThemedView>
          
          {/* Baris informasi program studi */}
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.emojiSmall}>🎓</ThemedText>
            <ThemedText style={styles.infoText}>Teknik Informatika</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Section hobi dan minat */}
        <ThemedView style={styles.section}>
          {/* Judul section hobi */}
          <ThemedText style={styles.sectionTitle}>Hobbies & Interests</ThemedText>
          
          {/* Container untuk menampilkan hobi dalam bentuk horizontal */}
          <ThemedView style={styles.hobbyContainer}>
            {/* Item hobi Programming */}
            <ThemedView style={styles.hobbyItem}>
              <ThemedText style={styles.emojiHobby}>💻</ThemedText>
              <ThemedText style={styles.hobbyText}>Programming</ThemedText>
            </ThemedView>
            
            {/* Item hobi Gaming */}
            <ThemedView style={styles.hobbyItem}>
              <ThemedText style={styles.emojiHobby}>🎮</ThemedText>
              <ThemedText style={styles.hobbyText}>Gaming</ThemedText>
            </ThemedView>
            
            {/* Item hobi Music */}
            <ThemedView style={styles.hobbyItem}>
              <ThemedText style={styles.emojiHobby}>🎵</ThemedText>
              <ThemedText style={styles.hobbyText}>Music</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Section skills/keahlian */}
        <ThemedView style={styles.section}>
          {/* Judul section skills */}
          <ThemedText style={styles.sectionTitle}>Skills</ThemedText>
          
          {/* Container untuk daftar skills */}
          <ThemedView style={styles.skillContainer}>
            {/* Daftar skills dengan bullet point */}
            <ThemedText style={styles.skillItem}>• React Native</ThemedText>
            <ThemedText style={styles.skillItem}>• JavaScript</ThemedText>
            <ThemedText style={styles.skillItem}>• Mobile Development</ThemedText>
            <ThemedText style={styles.skillItem}>• Problem Solving</ThemedText>
          </ThemedView>
        </ThemedView>
        
      </ThemedView>
    </ThemedView>
  );
}

// StyleSheet untuk styling komponen (seperti CSS tapi untuk React Native)
const styles = StyleSheet.create({
  // Style untuk container utama - menggunakan seluruh layar
  container: {
    flex: 1, // Menggunakan seluruh ruang yang tersedia
    padding: 20, // Jarak dari tepi layar 20px
  },
  
  // Style untuk container konten
  content: {
    flex: 1, // Menggunakan seluruh ruang yang tersedia dalam container
  },
  
  // Style untuk header (ikon + judul)
  header: {
    alignItems: 'center', // Menempatkan semua item di tengah secara horizontal
    marginBottom: 30, // Jarak bawah 30px dari section berikutnya
  },
  
  // Style untuk emoji ikon besar di header
  emojiIcon: {
    fontSize: 60, // Ukuran emoji 60px (besar)
    marginBottom: 10, // Jarak bawah 10px dari judul
  },
  
  // Style untuk judul utama
  title: {
    fontSize: 28, // Ukuran font 28px
    fontWeight: 'bold', // Font tebal
    marginTop: 10, // Jarak atas 10px dari emoji
  },
  
  // Style untuk setiap section (informasi pribadi, hobi, skills)
  section: {
    marginBottom: 25, // Jarak bawah 25px antar section
  },
  
  // Style untuk judul section (Personal Information, Hobbies, dll)
  sectionTitle: {
    fontSize: 20, // Ukuran font 20px
    fontWeight: '600', // Font semi-bold
    marginBottom: 15, // Jarak bawah 15px dari konten
    color: '#007AFF', // Warna biru iOS untuk judul
  },
  
  // Style untuk baris informasi (nama, NIM, program studi)
  infoRow: {
    flexDirection: 'row', // Menempatkan emoji dan teks secara horizontal
    alignItems: 'center', // Menempatkan item di tengah secara vertikal
    marginBottom: 10, // Jarak bawah 10px antar baris
    paddingLeft: 10, // Jarak kiri 10px dari tepi
  },
  
  // Style untuk emoji kecil di baris informasi
  emojiSmall: {
    fontSize: 20, // Ukuran emoji 20px
    marginRight: 10, // Jarak kanan 10px dari teks
  },
  
  // Style untuk teks informasi
  infoText: {
    fontSize: 16, // Ukuran font 16px
    marginLeft: 10, // Jarak kiri 10px dari emoji
  },
  
  // Style untuk container hobi (menampilkan 3 hobi secara horizontal)
  hobbyContainer: {
    flexDirection: 'row', // Menempatkan hobi secara horizontal
    justifyContent: 'space-around', // Membagi ruang secara merata
    marginTop: 10, // Jarak atas 10px dari judul section
  },
  
  // Style untuk setiap item hobi
  hobbyItem: {
    alignItems: 'center', // Menempatkan emoji dan teks di tengah
    flex: 1, // Menggunakan ruang yang sama untuk setiap item
  },
  
  // Style untuk emoji hobi (ukuran sedang)
  emojiHobby: {
    fontSize: 30, // Ukuran emoji 30px
    marginBottom: 5, // Jarak bawah 5px dari teks
  },
  
  // Style untuk teks hobi
  hobbyText: {
    fontSize: 14, // Ukuran font 14px
    marginTop: 8, // Jarak atas 8px dari emoji
    textAlign: 'center', // Teks di tengah
  },
  
  // Style untuk container skills
  skillContainer: {
    marginTop: 10, // Jarak atas 10px dari judul section
  },
  
  // Style untuk setiap item skill
  skillItem: {
    fontSize: 16, // Ukuran font 16px
    marginBottom: 8, // Jarak bawah 8px antar item
    paddingLeft: 10, // Jarak kiri 10px untuk indentasi
  },
});