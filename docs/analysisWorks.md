Arsitektur MVP :

```
                    User
                      │
                      ▼
               POST /api/analyze
                      │
                      ▼
              URL Normalization
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
   Threat Intelligence       URL Analysis
          │                       │
          │                 ┌─────┴─────┐
          │                 │           │
          ▼                 ▼           ▼
     PhishTank          URL Rules   Domain Info
     URLhaus
          │                 │           │
          └───────────┬─────┴───────────┘
                      ▼
                Risk Scoring
                      │
                      ▼
               Analysis Result
                      │
                      ▼
                   Client
```


Berikut rangkuman untuk dokumentasimu:

---

## Ringkasan: Desain MVP VerifyIt (tanpa ML)

**Prinsip utama:**
Sistem menghasilkan **evidence + skor risiko**, bukan vonis langsung "SCAM"/"AMAN". Ini karena rule-based system selalu punya kemungkinan salah (false positive/negative), jadi lebih jujur kalau sistem bilang "berdasarkan sinyal X, Y, Z — risiko HIGH" daripada mengklaim kepastian.

**Komponen MVP (5 bagian):**
1. **URL Parser** — pecah URL jadi hostname, path, protocol, dll.
2. **Rule Engine** — cek sinyal-sinyal mencurigakan (IP sebagai hostname, kata "login"/"verify", punycode, subdomain berlebihan, HTTP vs HTTPS, dll).
3. **Threat Intelligence** — cek ke database luar: PhishTank (phishing) dan URLhaus (malware).
4. **Risk Scoring** — jumlahkan bobot dari semua evidence yang ketemu → hasilkan skor & level (LOW/MEDIUM/HIGH/CRITICAL).
5. **Explanation** — tampilkan alasan di balik skor (bukan cuma angka).

**3 Koreksi penting dari ide awal:**
1. **Weight/bobot jangan asal tebak.** Sinyal yang jarang salah (misal ketemu di database phishing resmi) → bobot tinggi. Sinyal yang sering false positive (misal cuma ada kata "login") → bobot rendah.
2. **Perlu caching & rate limit handling.** PhishTank/URLhaus punya limit request — cache hasil analisis per URL (misal beberapa jam) supaya tidak cepat kena limit.
3. **URL normalization perlu jelas.** `PayPal.com/Login` dan `paypal.com/login/` harus dianggap sama saat dicek/di-cache — normalisasi: lowercase host, hapus port default, handle trailing slash.

**Urutan implementasi yang disarankan:**
1. Definisikan skema evidence dulu (tipe data, severity) sebelum coding scoring
2. Bangun rule engine sebagai fungsi-fungsi kecil terpisah (mudah di-test)
3. Integrasikan API threat intelligence, dengan caching sejak awal
4. Buat fungsi scoring terpisah dari fungsi fetching data
5. Tes kasus ambigu (misal: domain baru tapi tanpa red flag lain — jangan langsung HIGH), bukan cuma kasus yang jelas

**Yang belum perlu dibuat di MVP:** Machine Learning, microservices, Redis, Kubernetes, real-time crawling kompleks.