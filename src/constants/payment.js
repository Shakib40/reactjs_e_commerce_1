import VulhuntIcon from '@assets/images/VulhuntIcon/vulhunt-logo.png';

export default {
  key: 'rzp_test_Yt52KsPCZ28xfg', // Enter the Key ID generated from the Dashboard
  amount: '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: 'INR',
  name: 'Vulhunt Corp',
  description: 'Test Transaction',
  image: VulhuntIcon,
  order_id: '', // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  handler: '',
  prefill: {
    name: '',
    email: '',
    contact: ''
  },
  notes: {
    address: 'Vulhunt Corporate Office'
  },
  theme: {
    color: '#2c89b9'
  }
};
