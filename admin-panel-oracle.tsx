'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { getCurrentTenant, getCurrentBranch, getCurrentRVC, hasLicense } from './components/utils';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});
  const [selectedTenant, setSelectedTenant] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedRVC, setSelectedRVC] = useState<string>('');
  const [hierarchyLevel, setHierarchyLevel] = useState<'tenant' | 'branch' | 'rvc'>('tenant');
  const [selectedProduct, setSelectedProduct] = useState<'waiterapp' | 'qrmenu' | 'kiosk'>('waiterapp');
  const [userRole, setUserRole] = useState<'admin' | 'user'>('admin');

  const toggleMenu = (menuKey: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const hasLicenseForProduct = (product: string, branchId?: string, rvcId?: string) => {
    return hasLicense(selectedTenant, product, branchId, rvcId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        hierarchyLevel={hierarchyLevel}
        selectedTenant={selectedTenant}
        selectedBranch={selectedBranch}
        selectedRVC={selectedRVC}
        getCurrentTenant={getCurrentTenant}
        getCurrentBranch={getCurrentBranch}
        getCurrentRVC={getCurrentRVC}
        userRole={userRole}
      />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          hierarchyLevel={hierarchyLevel}
          selectedTenant={selectedTenant}
          selectedBranch={selectedBranch}
          selectedRVC={selectedRVC}
          selectedProduct={selectedProduct}
          activeTab={activeTab}
          expandedMenus={expandedMenus}
          setHierarchyLevel={setHierarchyLevel}
          setSelectedTenant={setSelectedTenant}
          setSelectedBranch={setSelectedBranch}
          setSelectedRVC={setSelectedRVC}
          setSelectedProduct={setSelectedProduct}
          setActiveTab={setActiveTab}
          toggleMenu={toggleMenu}
          hasLicense={hasLicenseForProduct}
        />

        {/* Main Content */}
        <Content
          activeTab={activeTab}
          hierarchyLevel={hierarchyLevel}
          selectedTenant={selectedTenant}
          selectedBranch={selectedBranch}
          selectedRVC={selectedRVC}
          selectedProduct={selectedProduct}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
        