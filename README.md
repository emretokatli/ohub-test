# Oracle Admin Panel - Hiyerarşik Yönetim Sistemi

Bu admin panel, Oracle PMS entegrasyonu için geliştirilmiş hiyerarşik yönetim sistemidir. Üç farklı ürün (WAITERAPP, QR MENU, KIOSK) için lisans bazlı yapılandırma yönetimi sağlar.

## 🏗️ Sistem Mimarisi

### Hiyerarşik Yapı
```
Super Admin
├── Tenant Yönetimi
│   ├── Tenant Ekleme
│   ├── API Entegrasyonu
│   └── Lisans Yönetimi
└── Sistem Yönetimi
    ├── Kullanıcı Yönetimi
    ├── Rol Yönetimi
    └── Sistem Ayarları

Tenant Admin
├── Tenant > Şube > RVC Hiyerarşisi
└── Ürün Bazlı Yapılandırma
    ├── WAITERAPP (Cihaz Bazlı Lisans)
    ├── QR MENU (RVC Bazlı Lisans)
    └── KIOSK (RVC Bazlı Lisans)
```

## 🔄 İş Akışı

### 1. Super Admin İşlemleri
1. **Tenant Ekleme**: Yeni tenant ekler ve API bilgilerini yapılandırır
2. **API Entegrasyonu**: Tenant API'si kullanılarak şube ve RVC listesi çekilir
3. **Lisans Yönetimi**: Ürün bazlı lisanslar atanır

### 2. Lisans Yapısı
- **WAITERAPP**: Cihaz bazlı lisanslama (Tenant > Şube)
- **QR MENU**: RVC bazlı lisanslama (Tenant > Şube > RVC)
- **KIOSK**: RVC bazlı lisanslama (Tenant > Şube > RVC)

### 3. Yapılandırma Ayarları
Lisans sahibi ürünler için detaylı yapılandırma seçenekleri sunulur.

## 📋 Ürün Yapılandırmaları

### WAITERAPP Ayarları
1. **Ödeme Ayarları** (Location Based)
   - Opera PMS, GMU, GMP3, Simpra Link, Offer4 entegrasyonları
2. **C&P Entegrasyonu** (Location Based)
3. **Yazıcı Yapılandırma** (Location Based)
4. **RVC Bazlı Ayarlar** (RVC Based)
   - Masa Ayarları, Ürün Öneri, Favori Ürünler
   - Çoklu Para Birimi, Çoklu Sipariş Gönderme
   - Masa Planı, Bölüm Yönetimi, Yazıcı Atama

### QR MENU Ayarları
1. **QR Temel Ayarları** (RVC Based)
   - QR Görünüm, QR URL, Restoran Bilgileri
   - Görsel Yükleme, Çalışma Saatleri
2. **Masa Ayarları** (RVC Based)
3. **Menü Ayarları** (RVC Based)
   - Menü Kırılımları, Görünürlük Ayarları
4. **Çoklu RVC Gösterim Ayarları** (RVC Based)

### KIOSK Ayarları
1. **Kiosk Temel Ayarları** (RVC Based)
   - Dil Ayarı, Çalışan Bilgileri, Görsel Ayarlar
   - Menü Rengi, Zaman Aşımı, Popüler Ürünler
2. **Çoklu RVC Gösterim Ayarları** (RVC Based)

## 🎯 Özellikler

### Hiyerarşik Seviye Yönetimi
- **Super Admin**: Sistem geneli yönetim
- **Tenant**: Tenant bazlı yönetim
- **Branch**: Şube bazlı yönetim
- **RVC**: Gelir Merkezi bazlı yönetim

### Lisans Kontrolü
- Ürün bazlı lisans kontrolü
- Lisans durumu görsel göstergeleri
- Lisanssız ürünler için erişim kısıtlaması

### Dinamik Menü Sistemi
- Seviye bazlı menü filtreleme
- Ürün bazlı menü gösterimi
- Lisans bazlı erişim kontrolü

### Kapsamlı Dashboard
- Super Admin: Sistem geneli istatistikler
- Admin: Tenant bazlı istatistikler
- Lisans durumu takibi
- Hızlı erişim butonları

## 🚀 Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm start
```

## 🛠️ Teknolojiler

- **Frontend**: React 18, TypeScript, Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Next.js

## 📁 Proje Yapısı

```
├── app/
│   ├── globals.css          # Global stiller
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Ana sayfa
├── admin-panel-oracle.tsx   # Ana admin panel komponenti
├── package.json             # Proje bağımlılıkları
├── tailwind.config.js       # Tailwind yapılandırması
├── next.config.js           # Next.js yapılandırması
└── tsconfig.json            # TypeScript yapılandırması
```

## 🔐 Güvenlik

- Lisans bazlı erişim kontrolü
- Hiyerarşik yetki sistemi
- API güvenliği (API Key/Secret)
- Kullanıcı rol yönetimi

## 📊 Veri Yapısı

### Tenant
```typescript
interface Tenant {
  id: string;
  name: string;
  apiKey: string;
  apiSecret: string;
  status: 'active' | 'inactive' | 'pending';
  branches: Branch[];
  licenses: License[];
}
```

### License
```typescript
interface License {
  id: string;
  product: 'waiterapp' | 'qrmenu' | 'kiosk';
  type: 'device' | 'rvc';
  tenantId: string;
  branchId?: string;
  rvcId?: string;
  status: 'active' | 'expired' | 'pending';
  expiryDate: string;
  maxDevices?: number;
  maxRVCs?: number;
}
```

## 🎨 UI/UX Özellikleri

- Modern ve temiz tasarım
- Responsive layout
- Intuitive navigation
- Visual feedback
- Loading states
- Error handling

## 🔄 Geliştirme Notları

- TypeScript ile tip güvenliği
- Component-based architecture
- Reusable UI components
- Modular code structure
- Performance optimization

## 📞 Destek

Bu admin panel Oracle PMS entegrasyonu için özel olarak geliştirilmiştir. Sorularınız için lütfen iletişime geçin. 