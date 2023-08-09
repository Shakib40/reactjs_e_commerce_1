
export const CRITICALITY_HIGH = 'High';
const CRITICALITY_MODERATE = 'Medium';
const CRITICALITY_LOW = 'Low';
const CRITICALITY_INFO = 'Info';
const GENDER_MALE = 'Male';
const GENDER_FEMALE = 'Female';
const CAMPAIGN_STATUS_COMPLETED = 'Completed';
const CAMPAIGN_STATUS_ACTIVE = 'Active';
const CAMPAIGN_STATUS_NOTPUBLISH = 'Not Published';
const EXP_STATUS_0 = '0-2';
const EXP_STATUS_2 = '2-5';
const EXP_STATUS_5 = '5-8';
const EXP_STATUS_8 = '8-15';
const EXP_STATUS_15 = '+15';
const SR_KYC_PENDING = 'pending';
const SR_KYC_VERIFIED = 'verified';

const getColorForCriticality = (criticality) => {
  switch (criticality) {
    case CRITICALITY_HIGH:
      return '#d81f1f';
    case CRITICALITY_MODERATE:
      return 'orange';
    case CRITICALITY_LOW:
      return 'yellow';
    case CRITICALITY_INFO:
      return 'grey';
    case GENDER_MALE:
      return '#4472c4';
    case GENDER_FEMALE:
      return '#ffa500';
    case CAMPAIGN_STATUS_COMPLETED:
      return '#ffa500';
    case CAMPAIGN_STATUS_ACTIVE:
      return '#4472c4';
    case CAMPAIGN_STATUS_NOTPUBLISH:
      return 'grey';
    case EXP_STATUS_0:
      return '#4472c4';
    case EXP_STATUS_2:
      return 'orange';
    case EXP_STATUS_5:
      return 'grey';
    case EXP_STATUS_8:
      return '#fac037';
    case EXP_STATUS_15:
      return '#5b9bd5';
    case SR_KYC_PENDING:
      return 'orange';
    case SR_KYC_VERIFIED:
      return '#4472c4';
    default:
      return null;
  }
};

const convertDataforPieChart = (data) => {
  const d = [];
  data.forEach((element) => {
    if (element.percentage !== 0) {
      const c = {
        percentage: null,
        value: null,
        fill: null,
        researcherType: '',
        criticality: element.criticality
      };
      c.percentage = `${element.percentage}%`;
      c.value = element.percentage;
      c.fill = getColorForCriticality(element.criticality);
      d.push(c);
    }
  });

  let max = 0;
  let index = 0;
  for (let i = 0; i < d.length; i += 1) {
    if (d[i].value > max) {
      max = d[i].value;
      index = i;
    }
  }
  switch (d && d[index] && d[index].criticality) {
    case CRITICALITY_HIGH:
      d[index].researcherType = 'Vulhunt Pro Hacker';
      break;
    case CRITICALITY_MODERATE:
      d[index].researcherType = 'Vulhunt Expert Hacker.';
      break;
    case CRITICALITY_LOW:
      d[index].researcherType = 'Vulhunt Beginner.';
      break;
    default:
      return null;
  }
  return d;
};

export const referralStatData = (data) => {
  const d = [];
  if (data.maleReferralCount > 0) {
    const c = {
      x: data.maleReferralCount,
      y: data.maleReferralCount,
      fill: '#d81f1f',
      type: 'Male'
    };
    d.push(c);
  }
  if (data.femaleReferralCount > 0) {
    const c = {
      x: data.femaleReferralCount,
      y: data.femaleReferralCount,
      fill: 'orange',
      type: 'Female'
    };
    d.push(c);
  }
  return d;
};

export const convertDataforsrPieChart = (data) => {
  const d = [];
  data.forEach((element) => {
    if (element.count !== 0) {
      const c = {
        name: null,
        percentage: null,
        value: null,
        fill: null,
      };
      c.name = element.gender;
      c.percentage = `${element.count}%`;
      c.value = element.count;
      c.fill = getColorForCriticality(element.gender);
      d.push(c);
    }
  });
  return d;
};

export const convertDataforCampaignsPieChart = (data) => {
  const d = [];
  data.forEach((element) => {
    if (element.count !== 0) {
      const c = {
        percentage: null,
        value: null,
        fill: null,
        campaignType: ''
      };
      c.percentage = `${element.count}%`;
      c.value = element.count;
      c.fill = getColorForCriticality(element.campaignStatus);
      c.campaignType = element.campaignStatus;
      d.push(c);
    }
  });

  let max = 0;
  let index = 0;
  for (let i = 0; i < d.length; i += 1) {
    if (d[i].value > max) {
      max = d[i].value;
      index = i;
    }
  }
  switch (d && d[index] && d[index].campaignType) {
    case CAMPAIGN_STATUS_COMPLETED:
      d[index].campaignType = 'Completed Campaigns';
      break;
    case CAMPAIGN_STATUS_ACTIVE:
      d[index].campaignType = 'Active Campaigns';
      break;
    case CAMPAIGN_STATUS_NOTPUBLISH:
      d[index].campaignType = 'Not Published';
      break;
    default:
      return null;
  }

  return d;
};

export const convertDataforSrExpPieChart = (data) => {
  const d = [];
  data.forEach((element) => {
    if (element.count !== 0) {
      const c = {
        name: null,
        percentage: null,
        value: null,
        fill: null,
        experience: ''
      };
      c.name = element.expInterval;
      c.percentage = `${element.count}`;
      c.value = element.count;
      c.experience = element.expInterval;
      c.fill = getColorForCriticality(element.expInterval);
      d.push(c);
    }
  });

  let max = 0;
  let index = 0;
  for (let i = 0; i < d.length; i += 1) {
    if (d[i].value > max) {
      max = d[i].value;
      index = i;
    }
  }
  switch (d && d[index] && d[index].experience) {
    case EXP_STATUS_0:
      d[index].experience = '0-2 Years';
      break;
    case EXP_STATUS_2:
      d[index].experience = '2-5 Years';
      break;
    case EXP_STATUS_5:
      d[index].experience = '5-8 Years';
      break;
    case EXP_STATUS_8:
      d[index].experience = '8-15 Years';
      break;
    case EXP_STATUS_15:
      d[index].experience = '+15 Years';
      break;
    default:
      return null;
  }
  return d;
};

export const convertDataforSrKycPieChart = (data) => {
  const d = [];
  data.forEach((element) => {
    if (element.count !== 0) {
      const c = {
        name: null,
        percentage: null,
        value: null,
        fill: null,
        verificationStatus: ''
      };
      c.name = element.verificationStatus;
      c.percentage = `${element.count}`;
      c.value = element.count;
      c.verificationStatus = element.verificationStatus;
      c.fill = getColorForCriticality(element.verificationStatus);
      d.push(c);
    }
  });

  let max = 0;
  let index = 0;
  for (let i = 0; i < d.length; i += 1) {
    if (d[i].value > max) {
      max = d[i].value;
      index = i;
    }
  }
  switch (d[index].verificationStatus) {
    case SR_KYC_PENDING:
      d[index].verificationStatus = 'Identity Verification Pending';
      break;
    case SR_KYC_VERIFIED:
      d[index].verificationStatus = 'Identity Verified';
      break;
    default:
      return null;
  }
  return d;
};

export const convertDataforRefJoinPieChart = (data) => {
  const d = [];
  data.forEach((element) => {
    if (element.count !== 0) {
      const c = {
        name: null,
        percentage: null,
        value: null,
        fill: null,
        joinedReferrals: ''
      };
      c.name = element.gender;
      c.percentage = `${element.count}`;
      c.value = element.count;
      c.joinedReferrals = element.gender;
      c.fill = getColorForCriticality(element.gender);
      d.push(c);
    }
  });

  return d;
};

export const convertlegendChart = (data) => {
  const d = [];

  data.forEach((element) => {
    const c = {
      name: null,
      symbol: {
        fill: '',
        type: ''
      }
    };
    c.name = element.x;
    c.symbol.fill = '#4472c4';
    c.symbol.type = 'square';
    d.push(c);
  });
  return d;
};

export default convertDataforPieChart;
