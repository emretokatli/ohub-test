import { Tenant } from './types';

export const tenants: Tenant[] = [
  {
    id: 'acme-corp',
    name: 'ACME Corporation',
    apiKey: 'acme_api_key_123',
    apiSecret: 'acme_secret_456',
    status: 'active',
    branches: [
      {
        id: 'merkez-sube',
        name: 'Merkez Şube',
        tenantId: 'acme-corp',
        status: 'active',
        rvcs: [
          { id: 'ana-restoran', name: 'Ana Restoran', branchId: 'merkez-sube', type: 'Restaurant', status: 'active' },
          { id: 'kafe-alani', name: 'Kafe Alanı', branchId: 'merkez-sube', type: 'Cafe', status: 'active' },
          { id: 'banket-salonu', name: 'Banket Salonu', branchId: 'merkez-sube', type: 'Banquet', status: 'active' }
        ]
      },
      {
        id: 'kadikoy-sube',
        name: 'Kadıköy Şube',
        tenantId: 'acme-corp',
        status: 'active',
        rvcs: [
          { id: 'ana-restoran-kadikoy', name: 'Ana Restoran', branchId: 'kadikoy-sube', type: 'Restaurant', status: 'active' },
          { id: 'terras', name: 'Terras', branchId: 'kadikoy-sube', type: 'Terrace', status: 'active' }
        ]
      }
    ],
    licenses: [
      {
        id: 'lic-1',
        product: 'waiterapp',
        type: 'device',
        tenantId: 'acme-corp',
        branchId: 'merkez-sube',
        status: 'active',
        expiryDate: '2024-12-31',
        maxDevices: 50
      },
      {
        id: 'lic-2',
        product: 'qrmenu',
        type: 'rvc',
        tenantId: 'acme-corp',
        branchId: 'merkez-sube',
        rvcId: 'ana-restoran',
        status: 'active',
        expiryDate: '2024-12-31',
        maxRVCs: 1
      },
      {
        id: 'lic-3',
        product: 'kiosk',
        type: 'rvc',
        tenantId: 'acme-corp',
        branchId: 'merkez-sube',
        rvcId: 'ana-restoran',
        status: 'active',
        expiryDate: '2024-12-31',
        maxRVCs: 1
      }
    ]
  },
  {
    id: 'xyz-group',
    name: 'XYZ Group',
    apiKey: 'xyz_api_key_789',
    apiSecret: 'xyz_secret_012',
    status: 'active',
    branches: [
      {
        id: 'sisli-sube',
        name: 'Şişli Şube',
        tenantId: 'xyz-group',
        status: 'active',
        rvcs: [
          { id: 'ana-restoran-sisli', name: 'Ana Restoran', branchId: 'sisli-sube', type: 'Restaurant', status: 'active' },
          { id: 'kafe-alani-sisli', name: 'Kafe Alanı', branchId: 'sisli-sube', type: 'Cafe', status: 'active' }
        ]
      }
    ],
    licenses: []
  }
]; 