const routes = [
  {
    path: '/',
    children: [],
    name: 'trang chủ',
  },
  {
    path: '/about-us',
    children: [],
    name: 'về chúng tôi',
  },
  {
    path: '/services',
    children: [
      {
        path: '/services/list',
        name: 'danh mục sản phẩm',
      },
      {
        path: '/services/asset',
        name: 'quản lý tài sản',
      },
      {
        path: '/services/investment',
        name: 'ủy thác đầu tư',
      },
    ],
    name: 'sản phẩm',
  },
  {
    path: '/blog',
    children: [],
    name: 'blog',
  },
  {
    path: '/contact',
    children: [],
    name: 'liên hệ',
  },
];

export default routes;
