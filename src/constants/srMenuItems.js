export default {
  menuItems: [
    {
      itemId: 1,
      label: 'Account',
      icon: '',
      data: true
    },
    {
      itemId: 2,
      label: 'Professional',
      icon: '',
      data: false
    },
    {
      itemId: 3,
      label: 'Social Media',
      icon: '',
      data: false,
    },
    {
      itemId: 4,
      label: 'KYC Verification',
      icon: '',
      data: false,
    },
    {
      itemId: 5,
      label: 'Bank Details',
      icon: '',
      data: false
    }
  ],
  menuItemsClient: [
    {
      itemId: 1,
      label: 'Company Details',
      icon: '',
      data: true
    },
    {
      itemId: 2,
      label: 'Upload Documents',
      icon: '',
      data: false
    },
    {
      itemId: 3,
      label: 'Contact Details',
      icon: '',
      data: false,
    },
    {
      itemId: 4,
      label: 'Bank Details',
      icon: '',
      data: false,
    },
    {
      itemId: 5,
      label: 'Payment',
      icon: '',
      data: false
    }
  ],
  campaignMenuItems: [
    {
      itemId: 1,
      label: 'Campaign Details',
      icon: '',
      data: false
    },
    {
      itemId: 2,
      label: 'Scope',
      icon: '',
      data: false
    },
    {
      itemId: 3,
      label: 'Target',
      icon: '',
      data: false,
    },
    {
      itemId: 4,
      label: 'Target Details',
      icon: '',
      data: false
    },
    {
      itemId: 5,
      label: 'Rewards',
      icon: '',
      data: false,
    },
    {
      itemId: 6,
      label: 'Invite',
      icon: '',
      data: false
    }
  ],
  targetsInScope: [
    { name: 'Yes', id: 1 },
    { name: 'No', id: 2 }
  ],
  scrollItem: [
    {
      itemId: 1,
      label: 'Dashboard',
      icon: '',
      service: 'dashboard-menu',
    },
    {
      itemId: 2,
      label: 'Campaigns',
      icon: '',
      service: 'campaigns-menu',
    },
    {
      itemId: 3,
      label: 'Researchers',
      icon: '',
      service: 'researchers-menu',
    },
    {
      itemId: 4,
      label: 'Social',
      icon: '',
      service: 'social-menu',
    },
    {
      itemId: 5,
      label: 'Transactions',
      icon: '',
      service: 'transaction-menu',
    },
    {
      itemId: 6,
      label: 'Organizations',
      icon: '',
      service: 'organization-menu',
    },
    {
      itemId: 7,
      label: 'Companies',
      icon: '',
      service: 'company-menu',
    },
    {
      itemId: 8,
      label: 'Admin',
      icon: '',
      service: 'manage-admin',
    },
  ],
  vulnerabilityMenu: [
    {
      itemId: 1,
      label: 'Details',
      icon: '',
      service: 'vul-details',
    },
    {
      itemId: 2,
      label: 'Files',
      icon: '',
      service: 'vul-files',
    },
    {
      itemId: 3,
      label: 'Comments',
      icon: '',
      service: 'vul-comments',
    }
  ],
  commentSortBy: [
    {
      id: 1,
      name: 'Latest'
    },
    {
      id: 2,
      name: 'Older'
    }
  ],
  campaignViewItems: [
    {
      itemId: 1,
      label: 'Scope',
      service: 'scope-tab',
    },
    {
      itemId: 2,
      label: 'Target',
      service: 'target-tab',
    },
    {
      itemId: 3,
      label: 'Rewards',
      service: 'reward-tab',
    },
    {
      itemId: 4,
      label: 'Vulnerabilities',
      service: 'vulnarabilities-tab',
    },
    {
      itemId: 5,
      label: 'Participants',
      service: 'participants-tab',
    },
  ],
  typeOption: [
    { name: 'Public Program', id: 'Public Program' },
    { name: 'Exclusive Program', id: 'Exclusive Program' },
    { name: 'Privileged Program', id: 'Privileged Program' }
  ],
  statusOption: [
    { name: 'Draft', id: '0' },
    { name: 'Published', id: '1' },
  ],
  statusOptionForVulnerability: [
    { name: 'Accepted', id: '1' },
    { name: 'Pending Review', id: '0' },
    { name: 'Reviewed', id: '3' },
    { name: 'Rejected', id: '2' },
    { name: 'Duplicate', id: '5' }
  ],
  statusOptionForTransaction: [
    { name: 'In-Progress', id: '1' },
    { name: 'Payment Success', id: '2' },
    { name: 'Payment Failed', id: '3' }
  ],
  paymentTypeOptionForTransaction: [
    { name: 'Credit', id: '1' },
    { name: 'Debit', id: '2' }
  ],
  ResearcherViewItems: [
    {
      itemId: 1,
      label: 'Summary',
      service: 'researcher-summary',
    },
    {
      itemId: 2,
      label: 'Campaigns',
      service: 'researcher-campaigns',
    },
    {
      itemId: 3,
      label: 'Vulnerabilities',
      service: 'researcher-vulnerabilities',
    },
  ],
  CompanyViewItems: [
    {
      itemId: 1,
      label: 'Summary',
      service: 'client-summary',
    },
    {
      itemId: 2,
      label: 'Campaigns',
      service: 'client-campaigns',
    },
    {
      itemId: 3,
      label: 'Vulnerabilities',
      service: 'client-vulnerabilities',
    },
  ],
  AdminViewItems: [
    {
      itemId: 1,
      label: 'Manage Roles',
      service: 'manage-roles',
    },
    {
      itemId: 2,
      label: 'Manage Users',
      service: 'manage-vulhunt-users',
    },
    {
      itemId: 3,
      label: 'Manage Clients',
      service: 'manage-clients',
    },
    {
      itemId: 4,
      label: 'Manage Security Researcher',
      service: 'manage-security-researchers',
    },
  ],
  Level: [
    { name: 'Level1', id: 'Level1' },
    { name: 'Level2', id: 'Level2' },
  ],
  ParticipantsFilter: [
    { name: 'Approved', id: 1 },
    { name: 'Pending', id: 2 }
  ],
  FinanceManage: [
    { label: 'Vulhunt team', value: '1' },
  ],
  statusOptionForOrganization: [
    { name: 'Verified', id: '1' },
    { name: 'Not Verified', id: '0' },
  ],
  roleOptionForOrganization: [
    { name: 'Vulhunt User', id: '1' },
    { name: 'Client', id: '4' },
  ]
};
