import React from 'react';
import { 
  Building2, 
  Smartphone, 
  QrCode, 
  Monitor, 
  Key,
  Users,
  Shield,
  FileText,
  Languages,
  Globe,
  Settings,
  Activity,
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';
import { MenuItem } from './types';
import { tenants } from './mockData';

interface SidebarProps {
  hierarchyLevel: 'tenant' | 'branch' | 'rvc';
  selectedTenant: string;
  selectedBranch: string;
  selectedRVC: string;
  selectedProduct: 'waiterapp' | 'qrmenu' | 'kiosk';
  activeTab: string;
  expandedMenus: { [key: string]: boolean };
  setHierarchyLevel: (level: 'tenant' | 'branch' | 'rvc') => void;
  setSelectedTenant: (tenant: string) => void;
  setSelectedBranch: (branch: string) => void;
  setSelectedRVC: (rvc: string) => void;
  setSelectedProduct: (product: 'waiterapp' | 'qrmenu' | 'kiosk') => void;
  setActiveTab: (tab: string) => void;
  toggleMenu: (menuKey: string) => void;
  hasLicense: (product: string, branchId?: string, rvcId?: string) => boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  hierarchyLevel,
  selectedTenant,
  selectedBranch,
  selectedRVC,
  selectedProduct,
  activeTab,
  expandedMenus,
  setHierarchyLevel,
  setSelectedTenant,
  setSelectedBranch,
  setSelectedRVC,
  setSelectedProduct,
  setActiveTab,
  toggleMenu,
  hasLicense
}) => {
  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus[item.key];
    const Icon = item.icon;
    
    return (
      <div key={item.key} className={`ml-${level * 4}`}>
        <div
          className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${
            activeTab === item.key 
              ? 'bg-blue-100 text-blue-700' 
              : 'hover:bg-gray-100 text-gray-700'
          }`}
          onClick={() => {
            if (hasChildren) {
              toggleMenu(item.key);
            } else {
              setActiveTab(item.key);
            }
          }}
        >
          <Icon size={18} className="mr-3" />
          <span className="flex-1 text-sm">{item.label}</span>
          {hasChildren && (
            isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-1">
            {item.children?.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const mainMenuItems: MenuItem[] = [
    {
      key: 'accounts',
      label: 'Hesaplar (Tenants)',
      icon: Building2,
      children: [
        { key: 'tenant-list', label: 'Tenant Listesi', icon: FileText }
      ]
    },
    {
      key: 'waiterapp',
      label: 'WaiterApp',
      icon: Smartphone
    },
    {
      key: 'qrmenu',
      label: 'QR Menü',
      icon: QrCode
    },
    {
      key: 'kiosk',
      label: 'Kiosk',
      icon: Monitor
    },
    {
      key: 'licenses',
      label: 'Lisanslar',
      icon: Key
    },
    {
      key: 'license-management',
      label: 'Lisans Yönetimi',
      icon: Key
    },
    {
      key: 'users',
      label: 'Kullanıcılar',
      icon: Users,
      children: [
        { key: 'user-list', label: 'Kullanıcı Listesi', icon: Users },
        { key: 'add-user', label: 'Kullanıcı Ekle', icon: Users }
      ]
    },
    {
      key: 'user-roles',
      label: 'Kullanıcı Rolleri',
      icon: Shield,
      children: [
        { key: 'role-list', label: 'Rol Listesi', icon: Shield },
        { key: 'add-role', label: 'Rol Ekle', icon: Shield }
      ]
    },
    {
      key: 'audit-log',
      label: 'Denetim Günlüğü',
      icon: Activity,
      children: [
        { key: 'audit-list', label: 'Günlük Listesi', icon: Activity },
        { key: 'audit-reports', label: 'Denetim Raporları', icon: FileText }
      ]
    },
    {
      key: 'version-notes',
      label: 'Versiyon Notları',
      icon: FileText,
      children: [
        { key: 'version-list', label: 'Versiyon Listesi', icon: FileText },
        { key: 'add-version', label: 'Versiyon Ekle', icon: FileText }
      ]
    },
    {
      key: 'languages',
      label: 'Diller',
      icon: Languages,
      children: [
        { key: 'language-list', label: 'Dil Listesi', icon: Languages },
        { key: 'add-language', label: 'Dil Ekle', icon: Languages }
      ]
    },
    {
      key: 'translations',
      label: 'Çeviriler',
      icon: Globe,
      children: [
        { key: 'translation-list', label: 'Çeviri Listesi', icon: Globe },
        { key: 'add-translation', label: 'Çeviri Ekle', icon: Globe }
      ]
    }
  ];

  return (
    <div className="w-64 bg-white shadow-sm border-r h-screen overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-6">
          {/* Tenant Selector */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Aktif Tenant
            </h3>
            <div>
              <select 
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTenant}
                onChange={(e) => {
                  setSelectedTenant(e.target.value);
                  setSelectedBranch('');
                  setSelectedRVC('');
                }}
              >
                <option value="">Tenant Seçin</option>
                {tenants.map(tenant => (
                  <option key={tenant.id} value={tenant.id}>{tenant.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Ana Menü
            </h3>
            <div className="space-y-1">
              {mainMenuItems.map(item => renderMenuItem(item))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 