import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routeConfig from '~/Config/routes';

// dùng cho những router không cần đăng nhập vẫn có thể xem được
const publicRoutes = [
    {
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.following,
        component: Following,
    },
    {
        path: routeConfig.profile,
        component: Profile,
    },
    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.search,
        component: Search,
        layout: null,
    },
];

// dùng cho những router cần đăng nhập mới có thể xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
