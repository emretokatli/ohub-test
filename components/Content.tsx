import React, { useState } from 'react';
import Dashboard from './Dashboard';
import TenantManagement from './TenantManagement';
import ProductConfig from './ProductConfig';
import UserManagement from './UserManagement';
import { getCurrentTenant, getCurrentBranch, getCurrentRVC } from './utils';
import { ArrowRight } from 'lucide-react';
import RightSidePanel from './ui/RightSidePanel';

interface ContentProps {
  activeTab: string;
  hierarchyLevel: 'tenant' | 'branch' | 'rvc';
  selectedTenant: string;
  selectedBranch: string;
  selectedRVC: string;
  selectedProduct: 'waiterapp' | 'qrmenu' | 'kiosk';
  setActiveTab: (tab: string) => void;
}

const Content: React.FC<ContentProps> = ({
  activeTab,
  hierarchyLevel,
  selectedTenant,
  selectedBranch,
  selectedRVC,
  selectedProduct,
  setActiveTab
}) => {
  const [activeProductTab, setActiveProductTab] = useState<string>('branch-settings');
  const [selectedBranchForSettings, setSelectedBranchForSettings] = useState<string>('');
  const [selectedRVCForSettings, setSelectedRVCForSettings] = useState<string>('');

  // Right panel state
  const [rightPanel, setRightPanel] = useState<null | { title: string; content: React.ReactNode }>(null);

  // Helper to open the panel
  const openPanel = (title: string, content?: React.ReactNode) => {
    setRightPanel({
      title,
      content: content || <div className="text-gray-600">Bu bölümün ayarları burada görünecek.</div>
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard
            hierarchyLevel={hierarchyLevel}
            selectedTenant={selectedTenant}
            selectedBranch={selectedBranch}
            selectedRVC={selectedRVC}
            selectedProduct={selectedProduct}
            setActiveTab={setActiveTab}
          />
        );

      case 'add-tenant':
      case 'tenant-list':
        return (
          <TenantManagement
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );

      case 'users':
      case 'user-list':
      case 'add-user':
        return (
          <UserManagement />
        );

      // WaiterApp - 2 sekmeli pencere
      case 'waiterapp':
        return (
          <div className="bg-neutral-25 rounded-lg shadow-sm border border-neutral-100">
            <div className="p-6 border-b border-neutral-100">
              <h2 className="text-xl font-semibold text-neutral-900">WaiterApp Yapılandırması</h2>
              <p className="text-neutral-600 mt-1">Tenant: {getCurrentTenant(selectedTenant)?.name}</p>
            </div>
            <div className="p-6">
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-neutral-100 p-1 rounded-lg">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeProductTab === 'branch-settings'
                      ? 'bg-neutral-25 text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  onClick={() => setActiveProductTab('branch-settings')}
                >
                  Şube Ayarları
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeProductTab === 'rvc-settings'
                      ? 'bg-neutral-25 text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  onClick={() => setActiveProductTab('rvc-settings')}
                >
                  RVC Ayarları
                </button>
              </div>

              {/* Tab Content */}
              {activeProductTab === 'branch-settings' && (
                <div className="space-y-6">
                  {/* Branch Selection */}
                  <div className="p-4 border border-neutral-100 rounded-lg">
                    <h3 className="font-medium text-neutral-900 mb-3">Şube Seçimi</h3>
                    <select 
                      className="input-field"
                      value={selectedBranchForSettings}
                      onChange={(e) => setSelectedBranchForSettings(e.target.value)}
                    >
                      <option value="">Şube Seçin</option>
                      {getCurrentTenant(selectedTenant)?.branches.map((branch: any) => (
                        <option key={branch.id} value={branch.id}>{branch.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Branch Settings */}
                  {selectedBranchForSettings && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <button
                          className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors group"
                          onClick={() => openPanel('Ödeme Ayarları')}
                        >
                          <span className="font-medium text-neutral-900">Ödeme Ayarları</span>
                          <ArrowRight size={20} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                        </button>
                        <button
                          className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors group"
                          onClick={() => openPanel('C&P Entegrasyonu')}
                        >
                          <span className="font-medium text-neutral-900">C&P Entegrasyonu</span>
                          <ArrowRight size={20} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                        </button>
                        <button
                          className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors group"
                          onClick={() => openPanel('Yazıcı Yapılandırma')}
                        >
                          <span className="font-medium text-neutral-900">Yazıcı Yapılandırma</span>
                          <ArrowRight size={20} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeProductTab === 'rvc-settings' && (
                <div className="space-y-6">
                  {/* RVC Selection */}
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">RVC Seçimi</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Şube</label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={selectedBranchForSettings}
                          onChange={(e) => {
                            setSelectedBranchForSettings(e.target.value);
                            setSelectedRVCForSettings('');
                          }}
                        >
                          <option value="">Şube Seçin</option>
                          {getCurrentTenant(selectedTenant)?.branches.map((branch: any) => (
                            <option key={branch.id} value={branch.id}>{branch.name}</option>
                          ))}
                        </select>
                      </div>
                      {selectedBranchForSettings && (
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Gelir Merkezi</label>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedRVCForSettings}
                            onChange={(e) => setSelectedRVCForSettings(e.target.value)}
                          >
                            <option value="">Gelir Merkezi Seçin</option>
                            {getCurrentBranch(selectedTenant, selectedBranchForSettings)?.rvcs.map((rvc: any) => (
                              <option key={rvc.id} value={rvc.id}>{rvc.name}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* RVC Settings */}
                  {selectedRVCForSettings && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <button
                          className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors group"
                          onClick={() => openPanel('Genel Ayarlar')}
                        >
                          <span className="font-medium text-neutral-900">Genel Ayarlar</span>
                          <ArrowRight size={20} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                        </button>
                        <button
                          className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors group"
                          onClick={() => openPanel('Masalar')}
                        >
                          <span className="font-medium text-neutral-900">Masalar</span>
                          <ArrowRight size={20} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                        </button>
                        <button
                          className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors group"
                          onClick={() => openPanel('Masa Planı')}
                        >
                          <span className="font-medium text-neutral-900">Masa Planı</span>
                          <ArrowRight size={20} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );

      // QR Menü - Only RVC Ayarları tab, but keep Branch and RVC selection
      case 'qrmenu':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">QR Menü Yapılandırması</h2>
              <p className="text-gray-600 mt-1">Tenant: {getCurrentTenant(selectedTenant)?.name}</p>
            </div>
            <div className="p-6">
              {/* Branch and RVC Selection */}
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3">Şube Seçimi</h3>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedBranchForSettings}
                    onChange={(e) => {
                      setSelectedBranchForSettings(e.target.value);
                      setSelectedRVCForSettings('');
                    }}
                  >
                    <option value="">Şube Seçin</option>
                    {getCurrentTenant(selectedTenant)?.branches.map((branch: any) => (
                      <option key={branch.id} value={branch.id}>{branch.name}</option>
                    ))}
                  </select>
                </div>
                {selectedBranchForSettings && (
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">RVC Seçimi</h3>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedRVCForSettings}
                      onChange={(e) => setSelectedRVCForSettings(e.target.value)}
                    >
                      <option value="">Gelir Merkezi Seçin</option>
                      {getCurrentBranch(selectedTenant, selectedBranchForSettings)?.rvcs.map((rvc: any) => (
                        <option key={rvc.id} value={rvc.id}>{rvc.name}</option>
                      ))}
                    </select>
                  </div>
                )}
                {/* RVC Settings */}
                {selectedRVCForSettings && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <button
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => openPanel('QR Menü Temel Ayarları')}
                      >
                        <span className="font-medium text-gray-900">QR Menü Temel Ayarları</span>
                            <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </button>
                      <button
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => openPanel('Masalar')}
                      >
                        <span className="font-medium text-gray-900">Masalar</span>
                          <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </button>
                        <button
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => openPanel('Menü Ayarları')}
                      >
                        <span className="font-medium text-gray-900">Menü Ayarları</span>
                          <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      // Kiosk - Only RVC Ayarları tab, but keep Branch and RVC selection
      case 'kiosk':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Kiosk Yapılandırması</h2>
              <p className="text-gray-600 mt-1">Tenant: {getCurrentTenant(selectedTenant)?.name}</p>
            </div>
            <div className="p-6">
              {/* Branch and RVC Selection */}
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3">Şube Seçimi</h3>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedBranchForSettings}
                    onChange={(e) => {
                      setSelectedBranchForSettings(e.target.value);
                      setSelectedRVCForSettings('');
                    }}
                  >
                    <option value="">Şube Seçin</option>
                    {getCurrentTenant(selectedTenant)?.branches.map((branch: any) => (
                      <option key={branch.id} value={branch.id}>{branch.name}</option>
                    ))}
                  </select>
                </div>
                {selectedBranchForSettings && (
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">RVC Seçimi</h3>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedRVCForSettings}
                      onChange={(e) => setSelectedRVCForSettings(e.target.value)}
                    >
                      <option value="">Gelir Merkezi Seçin</option>
                      {getCurrentBranch(selectedTenant, selectedBranchForSettings)?.rvcs.map((rvc: any) => (
                        <option key={rvc.id} value={rvc.id}>{rvc.name}</option>
                      ))}
                    </select>
                  </div>
                )}
                {/* RVC Settings */}
                {selectedRVCForSettings && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <button
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => openPanel('Kiosk Temel Ayarları')}
                      >
                        <span className="font-medium text-gray-900">Kiosk Temel Ayarları</span>
                            <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sayfa Bulunamadı
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">
                  Bu sayfa henüz geliştirilme aşamasında. Seçtiğiniz modül için konfigürasyon arayüzü yakında eklenecektir.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Mevcut Bağlam:</h3>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>Tenant: {getCurrentTenant(selectedTenant)?.name}</div>
                  <div>Şube: {getCurrentBranch(selectedTenant, selectedBranch)?.name}</div>
                  <div>RVC: {getCurrentRVC(selectedTenant, selectedBranch, selectedRVC)?.name}</div>
                  <div>Seviye: {hierarchyLevel}</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 p-6">
      {renderContent()}
      <RightSidePanel
        isOpen={!!rightPanel}
        onClose={() => setRightPanel(null)}
        title={rightPanel?.title}
      >
        {rightPanel?.content}
      </RightSidePanel>
    </div>
  );
};

export default Content; 