import { defHttp } from '/@/utils/http/axios';

export const editPassword = (params: any = {}) => {
  return defHttp.post({
    url: '/user/password',
    params,
  });
};
