import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  key: string;
  label: string;
  icon: any;
  level?: 'tenant' | 'branch' | 'rvc' | 'all';
  product?: 'waiterapp' | 'qrmenu' | 'kiosk' | 'all';
  scope?: 'location' | 'rvc';
  requiresLicense?: boolean;
  children?: MenuItem[];
}

export interface Tenant {
  id: string;
  name: string;
  apiKey: string;
  apiSecret: string;
  licenseCount: number;
  status: 'active' | 'inactive' | 'pending';
  code: string;
  branches: Branch[];
  licenses: License[];
}

export interface Branch {
  id: string;
  name: string;
  tenantId: string;
  status: 'active' | 'inactive';
  rvcs: RVC[];
}

export interface RVC {
  id: string;
  name: string;
  branchId: string;
  type: string;
  status: 'active' | 'inactive';
}

export interface License {
  id: string;
  product: 'waiterapp' | 'qrmenu' | 'kiosk';
  type: 'device' | 'rvc';
  tenantId: string;
  branchId?: string;
  rvcId?: string;
  status: 'active' | 'expired' | 'pending';
  expiryDate: string;
  maxDevices?: number;
  maxRVCs?: number;
} 