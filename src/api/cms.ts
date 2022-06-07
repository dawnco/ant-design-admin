import { defHttp } from '/@/utils/http/axios';

export const getCategories = (params: any) => {
  return defHttp.post({
    url: '/cms/category/index',
    params,
  });
};

export const addCategory = (params: any) =>
  defHttp.post<any>({
    url: '/cms/category/add',
    params,
  });

export const updateCategory = (params: any) =>
  defHttp.post<any>({
    url: '/cms/category/update',
    params,
  });

export const deleteCategory = (params: any) =>
  defHttp.post<any>({
    url: '/cms/category/delete',
    params,
  });

export const getModules = (params: any) => {
  return defHttp.post({
    url: '/cms/module/index',
    params,
  });
};

export const getModule = (params: any) => {
  return defHttp.post({
    url: '/cms/module/detail',
    params,
  });
};

export const addModule = (params: any) =>
  defHttp.post<any>({
    url: '/cms/module/add',
    params,
  });

export const updateModule = (params: any) =>
  defHttp.post<any>({
    url: '/cms/module/update',
    params,
  });

export const deleteModule = (params: any) =>
  defHttp.post<any>({
    url: '/cms/module/delete',
    params,
  });
