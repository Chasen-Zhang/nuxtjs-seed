import service from './service';

// post请求
export function requestPost(url, data) {
  return service.post(url, data);
}
// get请求
export function requestGet(url, data) {
  return service.get(url, {
    params: data,
  });
}
