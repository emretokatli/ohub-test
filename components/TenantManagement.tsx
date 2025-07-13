import React, { useState } from 'react';
import { Building2, Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import { tenants } from './mockData';

interface TenantManagementProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TenantManagement: React.FC<TenantManagementProps> = ({
  activeTab,
  setActiveTab
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredTenants = tenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || tenant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const renderAddTenant = () => (
    <div className="space-y-6">
      <div className="bg-neutral-25 p-6 rounded-lg shadow-sm border border-neutral-100">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Yeni Tenant Ekle</h2>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Tenant Adı *
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Tenant adını girin"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                API Key *
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="API Key girin"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                API Secret *
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="API Secret girin"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Durum
              </label>
              <select className="input-field">
                <option value="active">Aktif</option>
                <option value="inactive">Pasif</option>
                <option value="pending">Beklemede</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-neutral-700 bg-neutral-100 rounded-md hover:bg-neutral-200 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Tenant Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderTenantList = () => (
    <div className="space-y-6">
      <div className="bg-neutral-25 p-6 rounded-lg shadow-sm border border-neutral-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-neutral-900">Tenant Listesi</h2>
          <button
            onClick={() => setActiveTab('add-tenant')}
            className="flex items-center btn-primary"
          >
            <Plus size={16} className="mr-2" />
            Yeni Tenant
          </button>
        </div>
        
        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Tenant ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 pr-4"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={16} className="text-neutral-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'inactive')}
              className="input-field"
            >
              <option value="all">Tümü</option>
              <option value="active">Aktif</option>
              <option value="inactive">Pasif</option>
            </select>
          </div>
        </div>
        
        {/* Tenant Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Tenant Adı</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Şube Sayısı</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">Durum</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredTenants.map((tenant) => (
                <tr key={tenant.id} className="border-b border-neutral-50 hover:bg-neutral-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <Building2 size={16} className="text-neutral-400 mr-2" />
                      <span className="font-medium text-neutral-900">{tenant.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-neutral-600">
                    {tenant.branches.length} şube
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      tenant.status === 'active' 
                        ? 'bg-green-light text-green-dark' 
                        : tenant.status === 'inactive'
                        ? 'bg-red-light text-red-dark'
                        : 'bg-yellow-light text-yellow-dark'
                    }`}>
                      {tenant.status === 'active' ? 'Aktif' : 
                       tenant.status === 'inactive' ? 'Pasif' : 'Beklemede'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-primary-base hover:bg-primary-light rounded">
                        <Edit size={14} />
                      </button>
                      <button className="p-1 text-red-base hover:bg-red-light rounded">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredTenants.length === 0 && (
          <div className="text-center py-8">
            <Building2 size={48} className="text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500">Tenant bulunamadı</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {activeTab === 'add-tenant' ? renderAddTenant() : renderTenantList()}
    </div>
  );
};

export default TenantManagement; 