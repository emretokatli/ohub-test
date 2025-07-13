import React from 'react';
import { Building2, User, Settings } from 'lucide-react';

interface HeaderProps {
  hierarchyLevel: 'tenant' | 'branch' | 'rvc';
  selectedTenant: string;
  selectedBranch: string;
  selectedRVC: string;
  getCurrentTenant: (tenantId: string) => any;
  getCurrentBranch: (tenantId: string, branchId: string) => any;
  getCurrentRVC: (tenantId: string, branchId: string, rvcId: string) => any;
  userRole: 'admin' | 'user';
}

const Header: React.FC<HeaderProps> = ({
  hierarchyLevel,
  selectedTenant,
  selectedBranch,
  selectedRVC,
  getCurrentTenant,
  getCurrentBranch,
  getCurrentRVC,
  userRole
}) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Building2 size={20} />
              <h1 className="text-xl font-semibold text-gray-900">
                Admin Panel
              </h1>
            </div>
            
            {selectedTenant && (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Tenant:</span>
                <span className="font-medium text-gray-900">
                  {getCurrentTenant(selectedTenant)?.name || 'Tenant Seçilmedi'}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User size={16} />
              <span className="capitalize">{userRole}</span>
            </div>
            
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 