import { 
  Home, Building2, Key, Settings, Users, Shield, FileText, Languages, Globe, Settings2,
  Smartphone, CreditCard, Database, Wifi, Printer, MapPin, Layout, Star, Heart, DollarSign,
  FileText as FileTextIcon, User, Send, LogOut, Grid, Edit, QrCode, Eye, Link, Building,
  ShoppingCart, Lock, Image, Clock, Share2, Calendar, List, Monitor, Palette, Zap
} from 'lucide-react';
import { MenuItem } from './types';

// Product Configuration Menu (for Admin/User level)
export const productConfigMenuItems: MenuItem[] = [
  // WAITERAPP
  {
    key: 'waiterapp-config',
    label: 'WAITERAPP Yapılandırması',
    icon: Smartphone,
    level: 'tenant',
    product: 'waiterapp',
    requiresLicense: true,
    children: [
      {
        key: 'waiterapp-payment',
        label: '1. Ödeme Ayarları',
        icon: CreditCard,
        level: 'branch',
        product: 'waiterapp',
        scope: 'location',
        children: [
          { key: 'opera-pms', label: 'Opera PMS', icon: Database },
          { key: 'gmu', label: 'GMU', icon: Database },
          { key: 'gmp3', label: 'GMP3', icon: Database },
          { key: 'simpra-link', label: 'Simpra Link', icon: Wifi },
          { key: 'offer4', label: 'Offer4', icon: Database }
        ]
      },
      {
        key: 'waiterapp-cp',
        label: '2. C&P Entegrasyonu',
        icon: Database,
        level: 'branch',
        product: 'waiterapp',
        scope: 'location'
      },
      {
        key: 'waiterapp-printer',
        label: '3. Yazıcı Yapılandırma',
        icon: Printer,
        level: 'branch',
        product: 'waiterapp',
        scope: 'location'
      },
      {
        key: 'waiterapp-rvc',
        label: '4. RVC Bazlı Ayarlar',
        icon: MapPin,
        level: 'rvc',
        product: 'waiterapp',
        scope: 'rvc',
        children: [
          { key: 'table-settings', label: 'Masa Ayarları', icon: Layout },
          { key: 'product-suggestions', label: 'Ürün Öneri', icon: Star },
          { key: 'favorite-products', label: 'Favori Ürünler', icon: Heart },
          { key: 'multi-currency', label: 'Çoklu Para Birimi', icon: DollarSign },
          { key: 'multiple-checks', label: 'Masaya 1\'den Fazla Çek Açma', icon: FileTextIcon },
          { key: 'seat-input', label: 'Koltuk (Seat) Girişi', icon: User },
          { key: 'multi-order', label: 'Çoklu Sipariş Gönderme', icon: Send },
          { key: 'auto-logout', label: 'Otomatik Kullanıcı Çıkışı', icon: LogOut },
          { key: 'table-plan', label: 'Masa Planı', icon: Grid },
          { key: 'check-name', label: 'Çeke İsim Gir', icon: Edit },
          { key: 'revenue-printer', label: 'Gelir Merkezi Yazıcı Atama', icon: Printer },
          { key: 'section-assignment', label: 'Bölüm Atama', icon: MapPin },
          { key: 'section-create', label: 'Bölüm Oluştur', icon: Building },
          { key: 'section-printer', label: 'Bölüme Yazıcı Ata', icon: Printer }
        ]
      }
    ]
  },

  // QR MENU
  {
    key: 'qrmenu-config',
    label: 'QR MENU Yapılandırması',
    icon: QrCode,
    level: 'tenant',
    product: 'qrmenu',
    requiresLicense: true,
    children: [
      {
        key: 'qr-basic-settings',
        label: '1. QR Temel Ayarları',
        icon: QrCode,
        level: 'rvc',
        product: 'qrmenu',
        scope: 'rvc',
        children: [
          { key: 'qr-appearance', label: 'QR Görünüm', icon: Eye },
          { key: 'qr-url', label: 'QR URL', icon: Link },
          { key: 'restaurant-name', label: 'Restoran Adı', icon: Building },
          { key: 'restaurant-description', label: 'Restoran Açıklaması', icon: FileText },
          { key: 'restaurant-logo', label: 'Restoran Logo', icon: Image },
          { key: 'order-module', label: 'Sipariş Modülü Seçenekleri', icon: ShoppingCart },
          { key: 'mandatory-payment', label: 'Zorunlu Ödeme', icon: Lock },
          { key: 'employee-id', label: 'Employee ID', icon: User },
          { key: 'currency-display', label: 'Para Birimi Gösterimi', icon: DollarSign },
          { key: 'category-image', label: 'Kategori Görseli', icon: Image },
          { key: 'poster-image', label: 'Afiş Görseli', icon: Image },
          { key: 'working-hours', label: 'Çalışma Günleri/Saatleri', icon: Clock },
          { key: 'social-media', label: 'Sosyal Medya Bağlantıları', icon: Share2 }
        ]
      },
      {
        key: 'table-settings-qr',
        label: '2. Masa Ayarları',
        icon: Layout,
        level: 'rvc',
        product: 'qrmenu',
        scope: 'rvc'
      },
      {
        key: 'menu-settings-qr',
        label: '3. Menü Ayarları',
        icon: FileText,
        level: 'rvc',
        product: 'qrmenu',
        scope: 'rvc',
        children: [
          { key: 'menu-breakdown', label: 'Menü Kırılımları', icon: List },
          { key: 'qr-menu-name', label: 'QR Menü Adı', icon: Edit },
          { key: 'kiosk-name', label: 'Kiosk Adı', icon: Edit },
          { key: 'qr-visibility', label: 'QR Görünürlüğü', icon: Eye },
          { key: 'kiosk-visibility', label: 'Kiosk Görünürlüğü', icon: Eye },
          { key: 'date-range', label: 'Tarih Aralığı', icon: Calendar }
        ]
      },
      {
        key: 'multi-rvc-qr',
        label: '4. Çoklu RVC Gösterim Ayarları',
        icon: Grid,
        level: 'rvc',
        product: 'qrmenu',
        scope: 'rvc',
        children: [
          { key: 'rvc-assignment-qr', label: 'RVC Atama', icon: MapPin },
          { key: 'qr-appearance-multi', label: 'QR Görünüm', icon: Eye },
          { key: 'qr-url-multi', label: 'QR URL', icon: Link }
        ]
      }
    ]
  },

  // KIOSK
  {
    key: 'kiosk-config',
    label: 'KIOSK Yapılandırması',
    icon: Monitor,
    level: 'tenant',
    product: 'kiosk',
    requiresLicense: true,
    children: [
      {
        key: 'kiosk-basic-settings',
        label: '1. Kiosk Temel Ayarları',
        icon: Settings,
        level: 'rvc',
        product: 'kiosk',
        scope: 'rvc',
        children: [
          { key: 'default-language', label: 'Varsayılan Dil Ayarı', icon: Languages },
          { key: 'employee-id-kiosk', label: 'Çalışan ID', icon: User },
          { key: 'employee-pin', label: 'Çalışan Pin', icon: Lock },
          { key: 'order-types', label: 'Sipariş Tipleri', icon: List },
          { key: 'payment-options', label: 'Ödeme Seçenekleri', icon: CreditCard },
          { key: 'business-logo', label: 'İşletme Logo', icon: Image },
          { key: 'homepage-logo', label: 'Anasayfa Logo', icon: Image },
          { key: 'login-media', label: 'Giriş Sayfa Medya', icon: Image },
          { key: 'top-banner', label: 'Üst Afiş', icon: Image },
          { key: 'bottom-banner', label: 'Alt Afiş', icon: Image },
          { key: 'menu-color', label: 'Menü Rengi', icon: Palette },
          { key: 'kiosk-menu-view', label: 'Kiosk Menü Görünümü', icon: Grid },
          { key: 'popular-products', label: 'Popüler Ürünler', icon: Star },
          { key: 'recommended-products', label: 'Önerilen Ürünler', icon: Zap },
          { key: 'timeout-duration', label: 'Zaman Aşımı Süresi', icon: Clock },
          { key: 'menu-breakdown-kiosk', label: 'Menü Kırılımları', icon: List },
          { key: 'kiosk-name-settings', label: 'Kiosk Adı', icon: Edit },
          { key: 'kiosk-visibility-settings', label: 'Kiosk Görünürlüğü', icon: Eye }
        ]
      },
      {
        key: 'multi-rvc-kiosk',
        label: '2. Çoklu RVC Gösterim Ayarları',
        icon: Grid,
        level: 'rvc',
        product: 'kiosk',
        scope: 'rvc',
        children: [
          { key: 'rvc-assignment-kiosk', label: 'RVC Atama', icon: MapPin }
        ]
      }
    ]
  }
]; 