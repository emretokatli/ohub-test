import React from 'react';
import { Plus, Search, User, Bell } from 'lucide-react';

const UserManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-light border border-yellow-base rounded-lg p-4">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-yellow-dark mr-2" />
          <span className="text-sm font-medium text-yellow-dark">
            Bu bölüm global yapılandırma alanıdır - tüm tenant'lar için geçerlidir
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Kullanıcı Yönetimi</h2>
        <button className="btn-primary flex items-center">
          <Plus size={16} className="mr-2" />
          Yeni Kullanıcı
        </button>
      </div>
      
      <div className="bg-neutral-25 rounded-lg shadow-sm border border-neutral-100">
        <div className="p-6 border-b border-neutral-100">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
              <input
                type="text"
                placeholder="Kullanıcı ara..."
                className="input-field pl-10 pr-4"
              />
            </div>
            <select className="input-field">
              <option>Tüm Tenant'lar</option>
              <option>Simpra Software GmbH</option>
              <option>Protel</option>
            </select>
          </div>
        </div>
        
        <div className="p-6">
          <div className="text-center py-8">
            <User size={48} className="mx-auto text-neutral-400 mb-4" />
            <p className="text-neutral-600">Kullanıcı yönetimi tablosu burada görüntülenecek</p>
            <p className="text-sm text-neutral-500 mt-1">
              Tenant bazlı kullanıcı filtreleme ve rol atama işlemleri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement; 