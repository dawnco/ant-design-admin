import { defHttp } from '/@/utils/http/axios';

export const getCategories = (params: any = {}) => {
  return defHttp.post({
    url: '/cms/category/index',
    params,
  });
};

export const getCategory = (params: any = {}) => {
  return defHttp.post({
    url: 'cms/category/detail',
    params,
  });
};

export const addCategory = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/category/add',
    params,
  });

export const updateCategory = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/category/update',
    params,
  });

export const deleteCategory = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/category/delete',
    params,
  });

export const getModules = (params: any = {}) => {
  return defHttp.post({
    url: '/cms/module/index',
    params,
  });
};

export const getModule = (params: any = {}) => {
  return defHttp.post({
    url: '/cms/module/detail',
    params,
  });
};

export const addModule = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/module/add',
    params,
  });

export const saveModule = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/module/save',
    params,
  });

export const deleteModule = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/module/delete',
    params,
  });

export const getContents = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/content/index',
    params,
  });

export const getContentDetail = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/content/detail',
    params,
  });

export const saveContent = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/content/save',
    params,
  });

export const deleteContent = (params: any = {}) =>
  defHttp.post<any>({
    url: '/cms/content/delete',
    params,
  });
