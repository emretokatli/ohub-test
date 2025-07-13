import React from 'react';
import { Save, Image, Palette } from 'lucide-react';

interface ProductConfigProps {
  activeTab: string;
  selectedTenant: string;
  selectedBranch: string;
  selectedRVC: string;
  selectedProduct: 'waiterapp' | 'qrmenu' | 'kiosk';
  getCurrentTenant: (id: string) => any;
  getCurrentBranch: (tenantId: string, branchId: string) => any;
  getCurrentRVC: (tenantId: string, branchId: string, rvcId: string) => any;
}

const ProductConfig: React.FC<ProductConfigProps> = ({
  activeTab,
  selectedTenant,
  selectedBranch,
  selectedRVC,
  selectedProduct,
  getCurrentTenant,
  getCurrentBranch,
  getCurrentRVC
}) => {
  const renderWaiterAppPayment = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">WAITERAPP - Ödeme Ayarları</h2>
          <p className="text-sm text-gray-600">
            {getCurrentTenant(selectedTenant)?.name} {'>'} {getCurrentBranch(selectedTenant, selectedBranch)?.name} (Location Based)
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Save size={16} className="mr-2 inline" />
          Ayarları Kaydet
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Entegrasyon Ayarları</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Opera PMS</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">GMU</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">GMP3</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Simpra Link</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Offer4</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">C&P Entegrasyonu</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Endpoint</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://api.cp.com/v1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
              <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Otomatik Senkronizasyon</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQRBasicSettings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">QR MENU - QR Temel Ayarları</h2>
          <p className="text-sm text-gray-600">
            {getCurrentTenant(selectedTenant)?.name} {'>'} {getCurrentBranch(selectedTenant, selectedBranch)?.name} {'>'} {getCurrentRVC(selectedTenant, selectedBranch, selectedRVC)?.name} (RVC Based)
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Save size={16} className="mr-2 inline" />
          Ayarları Kaydet
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Temel Ayarlar</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Restoran Adı</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Restoran Adı" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Restoran Açıklaması</label>
              <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} placeholder="Restoran açıklaması..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">QR URL</label>
              <input type="url" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://qr.menu.com/..." />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Para Birimi Gösterimi</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Görsel Ayarlar</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Restoran Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Image size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Logo yüklemek için tıklayın</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kategori Görseli</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Image size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Görsel yüklemek için tıklayın</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Afiş Görseli</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Image size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Afiş yüklemek için tıklayın</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKioskBasicSettings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">KIOSK - Kiosk Temel Ayarları</h2>
          <p className="text-sm text-gray-600">
            {getCurrentTenant(selectedTenant)?.name} {'>'} {getCurrentBranch(selectedTenant, selectedBranch)?.name} {'>'} {getCurrentRVC(selectedTenant, selectedBranch, selectedRVC)?.name} (RVC Based)
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Save size={16} className="mr-2 inline" />
          Ayarları Kaydet
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Temel Ayarlar</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Varsayılan Dil</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Türkçe</option>
                <option>English</option>
                <option>Deutsch</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Çalışan ID</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="EMP001" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Çalışan Pin</label>
              <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Zaman Aşımı Süresi (dk)</label>
              <input type="number" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="30" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Görsel Ayarlar</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">İşletme Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Image size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Logo yüklemek için tıklayın</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Anasayfa Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Image size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Logo yüklemek için tıklayın</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Menü Rengi</label>
              <input type="color" className="w-full h-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTableSettings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Masa Yönetimi</h2>
          <p className="text-sm text-gray-600">
            {getCurrentTenant(selectedTenant)?.name} {'>'} {getCurrentBranch(selectedTenant, selectedBranch)?.name} {'>'} {getCurrentRVC(selectedTenant, selectedBranch, selectedRVC)?.name}
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Save size={16} className="mr-2 inline" />
          Ayarları Kaydet
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Masa Ayarları</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Masaya 1'den fazla çek açma</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Çeke isim gir</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Koltuk (Seat) Girişi</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gelir Merkezi Yazıcı</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Mutfak Yazıcısı</option>
                <option>Bar Yazıcısı</option>
                <option>Kasa Yazıcısı</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Gelir Merkezi Özellikler</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Ürün Öneri</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Favori Ürünler</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Çoklu Para Birimi</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Çoklu Sipariş Gönderme</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Otomatik Kullanıcı Çıkışı</label>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'waiterapp-payment':
      return renderWaiterAppPayment();
    case 'qr-basic-settings':
      return renderQRBasicSettings();
    case 'kiosk-basic-settings':
      return renderKioskBasicSettings();
    case 'table-settings':
      return renderTableSettings();
    default:
      return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ürün Yapılandırması</h2>
          <p className="text-gray-600">Bu sayfa henüz geliştirilme aşamasında.</p>
        </div>
      );
  }
};

export default ProductConfig; 