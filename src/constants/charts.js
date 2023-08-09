
export default {
  toolTipOrientation: 'top',
  toolTipPointerWidth: 10,
  toolTipPointerLenght: 10,
  toolTipCornerRadius: 0,
  toolTipStyle: {
    fontSize: 12,
    padding: 4,
    borderColor: 'orange',
    fontFamily: 'Helvetica',
  },
  toolTipFlyOutStyle: {
    fill: 'white',
    opacity: 0.6,
    stroke: 'orange',
    zindex: 1
  },
  High: 'High Vulnerabilities',
  Medium: 'Medium Vulnerabilities',
  Low: 'Low Vulnerabilities',
  LegendData: [
    { name: 'High', symbol: { fill: '#d81f1f' } },
    { name: 'Medium', symbol: { fill: 'orange' } },
    { name: 'Low', symbol: { fill: 'Yellow' } }
  ],
  LegendX: 370,
  LegendY: 10,
  LegendGutter: 20,
  LegendOrientation: 'horizontal',
  xAxisStyle: {
    tickLabels: {
      fill: 'grey',
      fontSize: 12,
      textAnchor: 'middle',
    },
    axis: { stroke: 'grey', strokeWidth: 0.5 }
  },
  xAxisTickFormat: (tick) => {
    if (typeof tick === 'string') {
      const tickArray = tick.match(/.{1,20}/g);
      return tickArray.join('-\n');
    }
    return tick;
  },
  YAxisStyle: {
    axis: {
      stroke: 'transparent'
    },
    tickLabels: {
      fill: ({ tick }) => {
        const value = tick - Math.floor(tick);
        if (value !== 0) {
          return 'white';
        }
        return 'grey';
      },
      fontSize: 12,
    },
    grid: {
      fill: 'grey',
      stroke: 'grey',
      pointerEvents: 'painted',
      strokeWidth: 0.5
    }
  },
  ColorHigh: '#d81f1f',
  ColorMedium: 'orange',
  ColorLow: 'yellow',
  BarWidth: 20,
  CertBarWidth: 60,
  pieChartX: 'percentage',
  pieChartY: 'value',
  pieInnerRadius: 80,
  pieLabelRadius: 0,
  pieOrigin: { x: 300, y: 230 },
  adminpieOrigin: { x: 300, y: 180 },
  pieLegendOrientation: 'vertical',
  pieLegendData: [
    { name: 'High', symbol: { fill: '#d81f1f', type: 'square' } },
    { name: 'Medium', symbol: { fill: 'orange', type: 'square' } },
    { name: 'Low', symbol: { fill: 'Yellow', type: 'square' } },
  ],
  srpieLegendData: [
    { name: 'Male', symbol: { fill: '#4472c4', type: 'square' } },
    { name: 'Female', symbol: { fill: 'orange', type: 'square' } },
  ],
  referalJoinedpieLegendData: [
    { name: 'Males', symbol: { fill: '#4472c4', type: 'square' } },
    { name: 'Females', symbol: { fill: 'orange', type: 'square' } },
  ],
  campaignpieLegendData: [
    { name: 'Completed Campaigns', symbol: { fill: 'orange', type: 'square' } },
    { name: 'Active Campaigns', symbol: { fill: '#4472c4', type: 'square' } },
    { name: 'Not Published', symbol: { fill: 'grey', type: 'square' } },
  ],
  srExpepieLegendData: [
    { name: '0-2 Years', symbol: { fill: '#4472c4', type: 'square' } },
    { name: '2-5 Years', symbol: { fill: 'orange', type: 'square' } },
    { name: '5-8 Years', symbol: { fill: 'grey', type: 'square' } },
    { name: '8-15 Years', symbol: { fill: '#fac037', type: 'square' } },
    { name: '15+ Years', symbol: { fill: '#5b9bd5', type: 'square' } },
  ],
  srStatuspieLegendData: [
    { name: 'Identity Verification Pending', symbol: { fill: 'orange', type: 'square' } },
    { name: 'Identity Verified', symbol: { fill: '#4472c4', type: 'square' } },
  ],
  CertificateLegendData: [
    { name: 'Certifications Stats', symbol: { fill: '#4472c4', type: 'square' } },
  ],
  CampaignLegendData: [
    { name: 'Payment Paid', symbol: { fill: '#4472c4', type: 'square' } },
  ],
  CampaigndueLegendData: [
    { name: 'Payment Due', symbol: { fill: '#4472c4', type: 'square' } },
  ],
  realStatusLegendData: [
    { name: 'Vul. Reported', symbol: { fill: '#4472c4', type: 'square' } },
    { name: 'Vul. Reviewed', symbol: { fill: 'orange', type: 'square' } },
    { name: 'Vul. Pending Review', symbol: { fill: 'grey', type: 'square' } },
  ],
  reportedLegendData: [
    { name: 'Total Vulnerability', symbol: { fill: '#4472c4', type: 'square' } },
    { name: 'Duplicates', symbol: { fill: 'orange', type: 'square' } },
    { name: 'Unique Vulnerability', symbol: { fill: 'grey', type: 'square' } },
  ],
  PaymentRewardLegendData: [
    { name: 'Winners', symbol: { fill: '#4472c4', type: 'square' } },
    { name: '1st Runner-Up', symbol: { fill: 'orange', type: 'square' } },
    { name: '2nd  Runner-Up', symbol: { fill: 'grey', type: 'square' } },
  ],
  reviewedLegendData: [
    { name: 'Vulnerability Reviewed', symbol: { fill: '#4472c4', type: 'square' } },
    { name: 'Vulnerability SLA', symbol: { fill: 'orange', type: 'square' } },
  ],
  QueuedLegendData: [
    { name: 'Vulnerability Queued', symbol: { fill: '#4472c4', type: 'square' } },
    { name: 'Vulnerability SLA', symbol: { fill: 'orange', type: 'square' } },
  ],
  vLegendData: [
    { name: 'Vulnerability', symbol: { fill: '#4472c4', type: 'square' } },
  ],
  vulnReviewed: 'Vulnerability Reviewed',
  vulnQue: 'Vulnerability Queued',
  vulnSLA: 'Vulnerability SLA',
  VulReportedCount: 'Vul. Reported',
  VulReviewedCount: 'Vul. Reviewed',
  VulPendingCount: 'Vul. Pending Review',
  TotalCount: 'Total Vul. Reported Graph',
  Duplicates: 'Duplicates',
  UniqueCount: 'Unique Vul. Reported',
  PaidWinnerCount: 'Vul. Paid Winners',
  Paidrunner1Count: 'First Runner-Up',
  Paidrunner2Count: 'Second Runner-Up',
  PaymentWinnerCount: 'Vul. Payment Pending for Winners',
  Paymentrunner1Count: 'Pending Payment for 1st Runner-Up',
  Paymentrunner2Count: 'Pending Payment for 2nd  Runner-Up',
  pieLegendX: 400,
  pieLegendY: 250,
  stackedBarWidth: 40,
  VulnerabilitiesCount: 'Vulnerability Count',
  CertificatesCount: 'Certificate Count',
  Payment_done: 'Payment Done',
  Payment_due: 'Payment Due',
  srxAxisStyle: {
    tickLabels: {
      fill: 'grey',
      fontSize: 20,
      textAnchor: 'middle',
    },
    axis: { stroke: 'grey', strokeWidth: 0.5 }
  },
  srYAxisStyle: {
    axis: {
      stroke: 'transparent'
    },
    tickLabels: {
      fill: ({ tick }) => {
        const value = tick - Math.floor(tick);
        if (value !== 0) {
          return 'white';
        }
        return 'grey';
      },
      fontSize: 20,
    },
    grid: {
      fill: 'grey',
      stroke: 'grey',
      pointerEvents: 'painted',
      strokeWidth: 0.5
    }
  },
  srtoolTipStyle: {
    fontSize: 18,
    padding: 4,
    borderColor: 'orange',
    fontFamily: 'Helvetica'
  },
  referralLegendData: [
    { name: 'Male', symbol: { fill: '#d81f1f', type: 'square' } },
    { name: 'Female', symbol: { fill: 'orange', type: 'square' } }
  ],
};
