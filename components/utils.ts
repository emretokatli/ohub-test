import { Tenant, License } from './types';
import { tenants } from './mockData';

export const getCurrentTenant = (selectedTenant: string) => 
  tenants.find(t => t.id === selectedTenant);

export const getCurrentBranch = (selectedTenant: string, selectedBranch: string) => 
  getCurrentTenant(selectedTenant)?.branches.find(b => b.id === selectedBranch);

export const getCurrentRVC = (selectedTenant: string, selectedBranch: string, selectedRVC: string) => 
  getCurrentBranch(selectedTenant, selectedBranch)?.rvcs.find(r => r.id === selectedRVC);

export const getCurrentLicenses = (selectedTenant: string) => 
  getCurrentTenant(selectedTenant)?.licenses || [];

export const hasLicense = (
  selectedTenant: string, 
  product: string, 
  branchId?: string, 
  rvcId?: string
) => {
  const licenses = getCurrentLicenses(selectedTenant);
  return licenses.some(license => 
    license.product === product && 
    license.status === 'active' &&
    (!branchId || license.branchId === branchId) &&
    (!rvcId || license.rvcId === rvcId)
  );
}; 