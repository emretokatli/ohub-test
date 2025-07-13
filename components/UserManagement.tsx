import React from 'react';
import { Plus, Search, User, Bell } from 'lucide-react';

const UserManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-yellow-600 mr-2" />
          <span className="text-sm font-medium text-yellow-800">
            Bu bölüm global yapılandırma alanıdır - tüm tenant'lar için geçerlidir
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Kullanıcı Yönetimi</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus size={16} className="mr-2" />
          Yeni Kullanıcı
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Kullanıcı ara..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Tüm Tenant'lar</option>
              <option>ACME Corporation</option>
              <option>XYZ Group</option>
            </select>
          </div>
        </div>
        
        <div className="p-6">
          <div className="text-center py-8">
            <User size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Kullanıcı yönetimi tablosu burada görüntülenecek</p>
            <p className="text-sm text-gray-500 mt-1">
              Tenant bazlı kullanıcı filtreleme ve rol atama işlemleri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement; 