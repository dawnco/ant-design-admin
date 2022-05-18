import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/app',
  name: 'category',
  component: LAYOUT,
  redirect: '/app',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'category',
      name: 'app-category',
      component: () => import('/@/views/app/category.vue'),
      meta: {
        // affix: true,
        title: '分类',
      },
    },
    {
      path: 'module',
      name: 'app-module',
      component: () => import('/@/views/app/module.vue'),
      meta: {
        title: '模型',
      },
    },
  ],
};

export default dashboard;
