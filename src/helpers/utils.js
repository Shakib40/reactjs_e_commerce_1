/* eslint-disable */
import pdf from '@assets/images/pdf.png';
import txt from '@assets/images/txt_icon';
import ppt from '@assets/images/ppt_icon';
import img from '@assets/images/image_icon';
import doc from '@assets/images/doc_icon';
import defaultFile from '@assets/images/default_file_icon';

export const checkPermission = (serviceName) => {
  if (window.localStorage.getItem('allowedServices') !== null && window.localStorage.getItem('allowedServices').length> 0 && window.localStorage.getItem('allowedServices').indexOf(serviceName) !== -1) {
    return true;
  }
  return false;
};

export const isUserLoggedIn = () => {
  if (window.localStorage.getItem('isUserLogin')) {
    return true;
  }
  return false;
};

export const userData = () => {
  if ('userData' in localStorage) {
    return JSON.parse(window.localStorage.getItem('userData')).userData;
  }
  return null;
};

export const checkFileType = (fileName) => {
  if (fileName.split('.').pop() === 'pdf' || fileName.split('.').pop() === 'PDF') {
    return pdf;
  }
  if (fileName.split('.').pop() === 'ppt' || fileName.split('.').pop() === 'PPT') {
    return ppt;
  }
  if (fileName.split('.').pop() === 'txt'|| fileName.split('.').pop() === 'TXT') {
    return txt;
  }
  if (fileName.split('.').pop() === 'doc' || fileName.split('.').pop() === 'docx'|| fileName.split('.').pop() === 'DOC'|| fileName.split('.').pop() === 'DOCX') {
    return doc;
  }
  if (fileName.split('.').pop() === 'jpg' || fileName.split('.').pop() === 'jpeg'|| fileName.split('.').pop() === 'JPG'|| fileName.split('.').pop() === 'JPEG' || fileName.split('.').pop() === 'png'|| fileName.split('.').pop() === 'PNG') {
    return img;
  }
  return defaultFile;
};

export async function downloadImage(dataUrl) {
  let success = false;
  const response = await fetch(
    dataUrl
  );
  if (response.status === 200) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'VULHUNT Terms-useragreement.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    success = true;
    window.URL.revokeObjectURL(url);
  }
  return success;
}

export const goToLink = (dataUrl) => {
  // const link = document.createElement('a');
  //   link.href = dataUrl;
  //   link.target = '_blank';
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // window.open(`${dataUrl}`, '_blank')
   window.open(`${dataUrl}`,"_blank","location=no,left=600,height=750,width=800,status=yes");
}

export const initDownload = (res, filename) => {
  const blob = new Blob([res.body], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('id', 'downloadRJ');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const PdfDownload = (u) => {
  const url = u;
  const a = document.createElement('a');
  a.setAttribute('id', 'downloadRJ');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = 'VULHUNT+Terms-useragreement-converted.pdf';
  a.target = '_blank';
  a.click();
  window.URL.revokeObjectURL(url);
};

export const redirectUrl = (url) => {
  const indexofHttp = url.indexOf('http');
  if (indexofHttp === 0) {
    window.open(`${url}`, '_blank')
  } else {
    window.open(`http://${url}`, '_blank')
  }
};
