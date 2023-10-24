import { defHttp } from '/@/utils/http/axios';

export const roleList = (params: any = {}) => {
  return defHttp.post({
    url: '/role/index',
    params,
  });
};
export const adminList = (params: any = {}) => {
  return defHttp.post({
    url: '/admin/index',
    params,
  });
};

export const addAdmin = (params: any = {}) => {
  return defHttp.post({
    url: '/admin/add',
    params,
  });
};
export const editAdmin = (params: any = {}) => {
  return defHttp.post({
    url: '/admin/edit',
    params,
  });
};
export const delAdmin = (params: any = {}) => {
  return defHttp.post({
    url: '/admin/del ',
    params,
  });
};

export const editPassword = (params: any = {}) => {
  return defHttp.post({
    url: '/admin/pass',
    params,
  });
};

export const switchEnabled = (params: any = {}) => {
  return defHttp.post({
    url: '/admin/enabled',
    params,
  });
};
