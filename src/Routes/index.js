import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import config from '~/config';

// dùng cho những router không cần đăng nhập vẫn có thể xem được
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];

// dùng cho những router cần đăng nhập mới có thể xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
