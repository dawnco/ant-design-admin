import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from '/@/api/sys/model/menuModel';

export const getAppMenus = (params: any) => {
  return defHttp.post<getMenuListResultModel>({
    url: '/user/menu',
    params,
  });
};

export const getUserMenu = (params: any) => {
  return defHttp.post<getMenuListResultModel>({
    url: '/user/menu',
    params,
  });
};

export const getRoutes = (params: any) => {
  return defHttp.post<getMenuListResultModel>({
    url: '/routes/index',
    params,
  });
};

export const addRoute = (params: any) =>
  defHttp.post<any>({
    url: '/routes/add',
    params,
  });

export const updateRoute = (params: any) =>
  defHttp.post<any>({
    url: '/routes/update',
    params,
  });

export const deleteRoute = (params: any) =>
  defHttp.post<any>({
    url: '/routes/delete',
    params,
  });
