/* eslint-disable */

import superagent from 'superagent';
import { APIConfig, APP_CONFIG } from '../constants';
import IsJsonString from '@helpers/TypeCheckers';
import store from '../store';
const methods = ['get', 'post', 'put', 'patch', 'del'];
const HOSTNAME = APIConfig.hostname;
const API_HOSTNAME = APIConfig.apiHostName;
const ENDPOINTS = APIConfig.endpoints;

function Intercept() {
  const callbacks = Array.prototype.slice.call(arguments);
  return function (req) {
    const callback = req.callback;
    req.callback = (err, res) => {
      callbacks.forEach(function (e) {
        e.call(req, err, res);
      });
      callback.call(req, err, res);
    };
  };
}

const AuthIntercept = Intercept((err, res) => {
  if (res && (res.status === 401 || res.status === 10006)) {
    // route to login
    window.localStorage.clear();
    window.sessionStorage.clear();
    // window.location.pathname = `/login`;
  }
  else if(!res || res.status == 404){
    // window.location.href = `${APP_CONFIG.BASE_URL}/notfound`;
  }
});

function formatUrl(path) {
  let apiPathArray = [];
  if(path.indexOf('?') !== -1) {
    apiPathArray = path.split('?');
    path = apiPathArray[0];
    apiPathArray.shift();
  }
  let mappedEndpoint = ENDPOINTS[path];
  if (path.indexOf('/') !== -1) {
    mappedEndpoint = '';
    const splitPathArray = path.split('/');
    mappedEndpoint += ENDPOINTS[splitPathArray[0]]+'/';
    splitPathArray.shift();
    mappedEndpoint += splitPathArray.join('/')
  }
  let hostName = HOSTNAME ;
  // if (mappedEndpoint.includes('/api') || mappedEndpoint.includes('/upload') || mappedEndpoint.includes('/account') || mappedEndpoint.includes('/before')) {
  //   hostName = HOSTNAME;
  // }

  if (mappedEndpoint.includes('/before') || mappedEndpoint.includes('/registerCaptcha')) {
       hostName = HOSTNAME;
  }
  let adjustedPath = mappedEndpoint[0] !== '/' ? hostName + '/' + mappedEndpoint : hostName + mappedEndpoint;
  if(apiPathArray && apiPathArray.length > 0)
    adjustedPath = adjustedPath + '?' + apiPathArray;
  return adjustedPath;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers = {}, files, fields, progress } = {}) =>
        new Promise((resolve, reject) => {
          if (!headers.uuid && path.indexOf('getCaptcha')) {
            headers['Accept'] = 'application/json;charset=utf-8';
          } else {
            headers['Accept'] = 'application/text';
          }
          let request = superagent[method](formatUrl(path))
            .withCredentials(true)
            .use(AuthIntercept)
           .set(headers);

           if(path.indexOf('fakeapi') !== -1) {
             let fakePath = path;
             let splitPathArray = fakePath.split('/');
             splitPathArray.shift();
             let constructedURL = splitPathArray.join('/');
             request = superagent[method](`http://localhost:3004/${constructedURL}`).withCredentials();
          }

          if (params) {
            request.query(params);
          }

          if (request.url && window.localStorage.getItem('access_token') && window.localStorage.getItem('access_token') !== null && (request.url.indexOf('/before') == -1 )){
            headers['Authorization'] = `Bearer ${window.localStorage.getItem('access_token')}`;
          }

          if (headers) {
            request.set(headers);
          }

          if (this.token) {
            request.set('Authorization', `Bearer ${this.token}`);
          }

          if (files) {
            console.log('in files');
            files.forEach(file => request.attach(file.key, file.value));
            // request.send(files);
          }

          if (fields) {
            fields.forEach(item => request.field(item.key, item.value));

          }
          const requrl= request.url.split('?');
          if (requrl[0].indexOf('download') != -1) {
            request.responseType('arraybuffer');
          }
          if (data) {
            if (path.indexOf('loginAuth') !== -1) {
              headers['Content-Type'] = 'application/x-www-form-urlencoded';
            } else if(path.indexOf('setCampaignTargetDetails') === -1 && path.indexOf('addScope') === -1 && path.indexOf('addReport') === -1 && path.indexOf('addProfilePic') === -1 && path.indexOf('setDocument') === -1) {
              headers['Content-Type'] = 'application/json';
            }

            request.set(headers);
            request.send(data);
          }

          if (progress !== undefined && progress !== null) {
            request.on('progress', (e) => {
              store.dispatch({
                type: 'progressLoader/SET_PROGRESS_VALUE',
                payload: e.loaded,
                size: progress.loadSize
              })
            });
          }

          request.end((err, response = {}) => {
            console.log(err);
            if (err) {
              if (response.text != '') {
                  reject(JSON.parse(decodeURIComponent(response && response.text && response.text.replace(/\+/g, '%20'))));
              } else {
                reject(err);
              }
            } else {
              const requrl=request.url.split('?');
              if (request.url.indexOf('download') != -1 || request.url.indexOf('/captcha') > -1) {
                resolve(response);
              } else if (response.text != '') {

                if(request.url.indexOf('RecruiterAccount') > -1 || request.url.indexOf('/razorpay/get/transaction/details/') > -1 || request.url.indexOf('/onboard/get/userbank/details') > -1){
                    resolve(JSON.parse(response.text));
                } else {
                  if(request.url.indexOf('/before') > -1) {
                  if (IsJsonString(decodeURIComponent(response.text.replace(/\+/g, '%20')))) {
                    resolve(JSON.parse(decodeURIComponent(response.text.replace(/\+/g, '%20'))));
                    }
                  }
                  else {
                    // resolve(JSON.parse(decodeURIComponent(response.text.replace(/\+/g, '%20'))));
                    resolve(JSON.parse(response.text));
                  }
                }
                if (progress) {
                  store.dispatch({
                    type: 'progressLoader/SET_PROGRESS_DONE',
                  });
                }
              } else {
                resolve();
              }
            }
          });
        });
    });
  }

  empty() {}
}