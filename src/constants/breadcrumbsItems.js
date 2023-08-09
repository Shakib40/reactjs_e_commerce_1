import { APP_CONFIG } from '@constants';

const roleId = 2;
// type: 1 - root , 2 - next to root , 3 - nth level
export default {
  DASHBOARD: {
    title: 'Dashboard',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 1
  },
  ONBOARD: {
    title: 'Edit Profile',
    link: roleId === 'client' ? `${APP_CONFIG.BASE_URL}/onboardAdmin` : `${APP_CONFIG.BASE_URL}/onboard`,
    type: 2,
  },
  CAMPAIGN: {
    title: 'Campaigns',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 2
  },
  RESEARCHERS: {
    title: 'Researchers',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 3
  },
  SOCIAL: {
    title: 'Social',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 4
  },
  TRANSACTION: {
    title: 'Transactions',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 5
  },
  ORGANIZATIONS: {
    title: 'Organizations',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 6
  },
  COMPANIES: {
    title: 'Companies',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 7
  },
  ADMIN: {
    title: 'Admin',
    link: `${APP_CONFIG.BASE_URL}/dashboard`,
    type: 1,
    tab: 8
  },
  CREATE_CAMPAIGN: {
    title: 'Create Campaign',
    link: `${APP_CONFIG.BASE_URL}/campaign`,
    type: 3
  },
  CAMPAIGN_DETAILS: {
    title: 'Campaign Details',
    link: `${APP_CONFIG.BASE_URL}/campaigndetails`,
    type: 3
  },
  REPORT_VULNERABILITY: {
    title: 'Report Vulnerability',
    link: `${APP_CONFIG.BASE_URL}/report`,
    type: 3
  },
  VULNERABILITY_DETAILS: {
    title: 'Vulnerability Details',
    link: `${APP_CONFIG.BASE_URL}/vuldetails`,
    type: 3
  },
  RESEARCHER_DETAILS: {
    title: 'Researcher Details',
    link: `${APP_CONFIG.BASE_URL}/researcherdetails`,
    type: 3
  },
  COMPANY_DETAILS: {
    title: 'Company Details',
    link: `${APP_CONFIG.BASE_URL}/companydetails`,
    type: 3
  },
  TRANSACTION_DETAILS: {
    title: 'Transaction Details',
    link: `${APP_CONFIG.BASE_URL}/transactiondetails`,
    type: 3
  },
  CREATE_ORGANIZATION: {
    title: 'Create Organization',
    link: `${APP_CONFIG.BASE_URL}/organization`,
    type: 3
  },
  REMOVE: {
    title: 'Create Organization',
    link: `${APP_CONFIG.BASE_URL}/organization`,
    type: 4
  },
  ROCET_CHAT: {
    title: 'Hangout',
    link: `${APP_CONFIG.BASE_URL}/hangout`,
    type: 3,
  },
};
