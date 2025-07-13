import React from 'react';
import { 
  Building2, 
  Store, 
  MapPin, 
  Smartphone, 
  QrCode, 
  Monitor, 
  Users, 
  Settings,
  Activity,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { getCurrentTenant, getCurrentBranch, getCurrentRVC } from './utils';

interface DashboardProps {
  hierarchyLevel: 'tenant' | 'branch' | 'rvc';
  selectedTenant: string;
  selectedBranch: string;
  selectedRVC: string;
  selectedProduct: 'waiterapp' | 'qrmenu' | 'kiosk';
  setActiveTab: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  hierarchyLevel,
  selectedTenant,
  selectedBranch,
  selectedRVC,
  selectedProduct,
  setActiveTab
}) => {
  const getCurrentSelectionName = () => {
    return getCurrentTenant(selectedTenant)?.name || 'Tenant Seçilmedi';
  };

  const getQuickActions = () => {
    const actions = [];

    if (selectedTenant) {
      actions.push(
        { key: 'waiterapp', label: 'WaiterApp Ayarları', icon: Smartphone },
        { key: 'qrmenu', label: 'QR Menü Ayarları', icon: QrCode },
        { key: 'kiosk', label: 'Kiosk Ayarları', icon: Monitor }
      );
    }

    return actions;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">
              Dashboard
            </h1>
            <p className="text-neutral-600 mt-1">
              {getCurrentSelectionName()}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Building2 size={24} className="text-primary-base" />
            <div className="text-right">
              <div className="text-sm font-medium text-neutral-900">Admin Panel</div>
              <div className="text-xs text-neutral-500">Yönetim Merkezi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-neutral-25 p-6 rounded-lg shadow-sm border border-neutral-100">
          <div className="flex items-center">
            <div className="p-2 bg-primary-light rounded-lg">
              <Building2 size={20} className="text-primary-base" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-neutral-600">Toplam Tenant</p>
              <p className="text-2xl font-semibold text-neutral-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-25 p-6 rounded-lg shadow-sm border border-neutral-100">
          <div className="flex items-center">
            <div className="p-2 bg-green-light rounded-lg">
              <Store size={20} className="text-green-base" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-neutral-600">Aktif Şube</p>
              <p className="text-2xl font-semibold text-neutral-900">48</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-25 p-6 rounded-lg shadow-sm border border-neutral-100">
          <div className="flex items-center">
            <div className="p-2 bg-neutral-100 rounded-lg">
              <MapPin size={20} className="text-neutral-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-neutral-600">Gelir Merkezi</p>
              <p className="text-2xl font-semibold text-neutral-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-25 p-6 rounded-lg shadow-sm border border-neutral-100">
          <div className="flex items-center">
            <div className="p-2 bg-orange-light rounded-lg">
              <Users size={20} className="text-orange-base" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-neutral-600">Aktif Kullanıcı</p>
              <p className="text-2xl font-semibold text-neutral-900">89</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      {getQuickActions().length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Hızlı İşlemler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getQuickActions().map((action) => (
              <button
                key={action.key}
                onClick={() => setActiveTab(action.key)}
                className="flex items-center p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <action.icon size={20} className="text-neutral-600 mr-3" />
                <span className="text-sm font-medium text-neutral-900">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Son Aktiviteler</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-light rounded-full">
              <CheckCircle size={16} className="text-green-base" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900">WaiterApp yapılandırması güncellendi</p>
              <p className="text-xs text-neutral-500">2 saat önce</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-light rounded-full">
              <Activity size={16} className="text-primary-base" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900">Yeni şube eklendi</p>
              <p className="text-xs text-neutral-500">1 gün önce</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-light rounded-full">
              <AlertCircle size={16} className="text-yellow-dark" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900">Lisans süresi yaklaşıyor</p>
              <p className="text-xs text-neutral-500">3 gün önce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 