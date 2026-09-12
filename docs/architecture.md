### URL Analysis

Saat ini, VerifyIt menggunakan pendekatan berbasis **rule-based URL analysis** untuk melakukan pemeriksaan awal terhadap sebuah URL. Pendekatan ini dipilih karena relatif sederhana, ringan, dan efisien untuk tahap pengembangan awal.

Pemeriksaan saat ini berfokus pada beberapa karakteristik dasar URL, seperti:

* **Protocol** - memeriksa jenis protocol yang digunakan oleh URL.
* **Domain** - memeriksa karakteristik dan tipe domain pada URL.

Pendekatan ini digunakan sebagai baseline untuk sistem analisis VerifyIt. Namun, tingkat efektivitas dan kemampuan pendekatan tersebut dalam mendeteksi URL berbahaya masih perlu dievaluasi menggunakan data dan pengujian yang lebih komprehensif.

### Future Development

Pada tahap pengembangan berikutnya, VerifyIt direncanakan menggunakan pendekatan **Machine Learning** untuk meningkatkan kemampuan analisis URL.

Salah satu metode yang dipertimbangkan adalah **Character N-grams**, yaitu metode yang merepresentasikan URL berdasarkan pola karakter yang terdapat di dalamnya. Representasi tersebut kemudian dapat digunakan sebagai fitur (*features*) untuk model Machine Learning dalam membedakan URL yang aman dan berbahaya.

Dengan demikian, arsitektur analisis URL VerifyIt direncanakan berkembang secara bertahap:

**Rule-based Analysis → Feature Extraction (Character N-grams) → Machine Learning Model**

Pendekatan rule-based akan tetap menjadi baseline yang berguna untuk membandingkan performa pendekatan Machine Learning pada tahap pengembangan selanjutnya.
