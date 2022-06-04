import { defHttp } from '/@/utils/http/axios';

export const getMenuList = (params: any) =>
  defHttp.get<any>({
    url: '/menu/index',
    params,
  });

export const addMenu = (params: any) =>
  defHttp.post<any>({
    url: '/menu/add',
    params,
  });

export const updateMenu = (params: any) =>
  defHttp.post<any>({
    url: '/menu/update',
    params,
  });
