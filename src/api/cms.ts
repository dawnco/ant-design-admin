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
