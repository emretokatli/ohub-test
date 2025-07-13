import { Tenant } from './types';

export const tenants: Tenant[] = [
  {
    id: 'simit-sarayi',
    name: 'Simit Sarayı',
    apiKey: 'simit_api_key_123',
    apiSecret: 'simit_secret_456',
    status: 'active',
    code: 'SSR',
    licenseCount: 3,
    branches: [
      {
        id: 'merkez-sube',
        name: 'Merkez Şube',
        tenantId: 'simit-sarayi',
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
        tenantId: 'simit-sarayi',
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
        tenantId: 'simit-sarayi',
        branchId: 'merkez-sube',
        status: 'active',
        expiryDate: '2024-12-31',
        maxDevices: 50
      },
      {
        id: 'lic-2',
        product: 'qrmenu',
        type: 'rvc',
        tenantId: 'simit-sarayi',
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
        tenantId: 'simit-sarayi',
        branchId: 'merkez-sube',
        rvcId: 'ana-restoran',
        status: 'active',
        expiryDate: '2024-12-31',
        maxRVCs: 1
      }
    ]
  },
  {
    id: 'protel',
    name: 'Protel',
    apiKey: 'protel_api_key_789',
    apiSecret: 'protel_secret_012',
    status: 'active',
    code: 'PRO',
    licenseCount: 2,
    branches: [
      {
        id: 'sisli-sube',
        name: 'Şişli Şube',
        tenantId: 'protel',
        status: 'active',
        rvcs: [
          { id: 'ana-restoran-sisli', name: 'Ana Restoran', branchId: 'sisli-sube', type: 'Restaurant', status: 'active' },
          { id: 'kafe-alani-sisli', name: 'Kafe Alanı', branchId: 'sisli-sube', type: 'Cafe', status: 'active' }
        ]
      }
    ],
    licenses: []
  },
  {
    id: 'mag-hotel',
    name: 'Mag Hotel',
    apiKey: 'mag_api_key_123',
    apiSecret: 'mag_secret_456',
    status: 'active',
    code: 'MGH',
    licenseCount: 4,
    branches: [
      {
        id: 'taksim-sube',
        name: 'Taksim Şube',
        tenantId: 'mag-hotel',
        status: 'active',
        rvcs: [
          { id: 'ana-restoran', name: 'Ana Restoran', branchId: 'taksim-sube', type: 'Restaurant', status: 'active' },
          { id: 'kafe-alani', name: 'Kafe Alanı', branchId: 'taksim-sube', type: 'Cafe', status: 'active' },
          { id: 'banket-salonu', name: 'Banket Salonu', branchId: 'taksim-sube', type: 'Banquet', status: 'active' }
        ]
      },
      {
        id: 'esentep-sube',
        name: 'Esentepe Şube',
        tenantId: 'mag-hotel',
        status: 'active',
        rvcs: [
          { id: 'ana-restoran', name: 'Ana Restoran', branchId: 'esentep-sube', type: 'Restaurant', status: 'active' },
          { id: 'paket-servis', name: 'Paket Servisi', branchId: 'esentep-sube', type: 'Delivery', status: 'active' }
        ]
      }
    ],
    licenses: [
      {
        id: 'lic-1',
        product: 'waiterapp',
        type: 'device',
        tenantId: 'mag-hotel',
        branchId: 'taksim-sube',
        status: 'active',
        expiryDate: '2024-12-31',
        maxDevices: 50
      },
      {
        id: 'lic-2',
        product: 'qrmenu',
        type: 'rvc',
        tenantId: 'mag-hotel',
        branchId: 'taksim-sube',
        rvcId: 'ana-restoran',
        status: 'active',
        expiryDate: '2024-12-31',
        maxRVCs: 1
      },
      {
        id: 'lic-3',
        product: 'kiosk',
        type: 'rvc',
        tenantId: 'mag-hotel',
        branchId: 'taksim-sube',
        rvcId: 'ana-restoran',
        status: 'active',
        expiryDate: '2024-12-31',
        maxRVCs: 1
      }
    ]
  },
]; 