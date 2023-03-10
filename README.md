# Khởi tạo dự án:

-   npx create-react-app project-tiktok-clone

-   Lưu ý với dự án bị trùng PORT:

    Tạo một file .env.local trong file PORT=3001 => Rồi chạy lại dự án

-   Fix một số lỗi github có thể xảy ra, khi mà tài khoản git được cài ở máy:

    -> Control panel -> User accounts -> Credential manager -> Windows Credentials

    remove các tài khoản github trước đó.

# Cài đặt customize-cra:

-   npm i customize-cra react-app-rewired -D

    Sau khi cài đặt tạo file root/config-overrides.js với nội dung sau:

        /* config-overrides.js */

        module.exports = function override(config, env) {
            //do stuff with the webpack config...
            return config;
        }

-   Thay đổi file package.json như sau:
    (- remove, + add)

            /* package.json */

            "scripts": {
            -   "start": "react-scripts start",
            +   "start": "react-app-rewired start",
            -   "build": "react-scripts build",
            +   "build": "react-app-rewired build",
            -   "test": "react-scripts test",
            +   "test": "react-app-rewired test",
                "eject": "react-scripts eject"
            }

        link hướng dẫn: https://github.com/timarney/react-app-rewired/

# Cài đặt babel plugin module resolver:

-   npm install --save-dev babel-plugin-module-resolver

    Sau khi cài đặt tạo file root/.babelrc với nội dung như sau:

        {
            "plugins": [
                ["module-resolver", {
                    "alias": {
                        "~": "./src",
                    }
                }]
            ]
        }

        *note: dấu ~ đại diện cho thư mục src

-   Tạo thêm một file Edit autocompletion root/jsconfig.json với nội dung như sau:

        {
            "compilerOptions": {
                "baseUrl": ".",
                "paths": {
                    "~/*": ["src/*"]
                }
            }
        }

-   Tùy chỉnh file config-overrides.js cho babel
    Copy phần example đầu tiên vào file (Example With Webpack)
    Chừa lại phần nội dung cần thiết như sau:

        const { override } = require("customize-cra");
        module.exports = override();

        link: https://github.com/arackaf/customize-cra

-   Use babelrc
    import useBabelrc vào trong file config-overrides.js:

        const { override, useBabelRc } = require("customize-cra");
        module.exports = override(
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useBabelRc()
        );

        link: https://github.com/arackaf/customize-cra/blob/master/api.md#usebabelrc

# Cấu hình Prettier:

-   Tạo file root/.prettierrc với nội dung như sau:

        {
            "arrowParens": "always",
            "bracketSameLine": false,
            "bracketSpacing": true,
            "embeddedLanguageFormatting": "auto",
            "htmlWhitespaceSensitivity": "css",
            "insertPragma": false,
            "jsxSingleQuote": false,
            "printWidth": 120,
            "proseWrap": "preserve",
            "quoteProps": "as-needed",
            "requirePragma": false,
            "semi": true,
            "singleQuote": true,
            "tabWidth": 4,
            "trailingComma": "all",
            "useTabs": false,
            "vueIndentScriptAndStyle": false
        }

-   Tiếp tục tạo thư mục root/.vscode/settings.json với nội dung như sau:

        {
            "editor.formatOnSave": true,
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        }

-   Nếu không muốn đẩy thử mục .vscode lên git:
    -> .gitignore -> # dependencies -> thêm .vscode

# Cấu hình sử dụng CSS, SASS:

1.  Create Globle styles component
    Tạo thư mục root/component/GlobleStyles:
    Trong thư mục này tạo 2 files GlobleStyles.scss và index.js
    Nội dung:

        /index.js:
        import './GlobleStyles.scss';

        function GlobleStyles({ children }) {
            return children;
        }

    export default GlobleStyles;

    => Rồi sau đó vào file index.js ở thư mục gốc, import nó vào và cho nó ôm component <App />

2.  Cài đặt thư viện:
    npm i -D sass
3.  Reset CSS:
    npm i --save normalize.css

    Sau khi cài đặt thư viện thì vào file GlobleStyles.scss import nó vào như sau:
    @import 'normalize.css';

    link: https://www.npmjs.com/package/normalize.css?activeTab=versions

4.  Default CSS: font-family, font-size, line-height

# Cấu hình Router và xây dựng cơ chế tải Layout cho dự án:

    1. Phân tích tổng quan Layout

    2. Cài đặt react-router-dom

        npm i react-router-dom
        link: https://reactrouter.com/en/main/start/tutorial

    3. Đưa cấu hình routes ra ngoài

    4. Xây dựng cơ chế tải Layout

# Other

    npm i classnames

    "@fortawesome/fontawesome-svg-core": "^1.3.0",
    "@fortawesome/free-brands-svg-icons": "^6.0.0",
    "@fortawesome/free-regular-svg-icons": "^6.0.0",
    "@fortawesome/free-solid-svg-icons": "^6.0.0",
    "@fortawesome/react-fontawesome": "^0.1.17",

    -> Thêm đoạn này vào dependencies của file package.json sau đó: npm install lại dự án

    Phím tắt nhanh:
        Ctrl + D
        Ctrl + Shift + <mũi tên ngang>
        Giữ phím Alt + <click>
        Alt + W

    Cài đặt Tippy
    link: https://www.npmjs.com/package/@tippyjs/react

    Kỹ thuật Debounce: kỹ thuật nói về các hành động diễn ra liên tục.

# Tải Axios về để config API

    - npm instal axios

    - Creating an instance

Cấu hình axios cho dự án

    Tạo các instance:
        Các cấu hình của axios được viết trong utils
            Ở thư mục src/ tạo thư mục utils/
                Trong thư mục utils/ tạo file request.js
                    Example:
                        import axios from 'axios';

                        const request = axios.create({
                            baseURL: 'https://tiktok.fullstack.edu.vn/api/',
                        });

                        // custom method get
                        export const get = async (path, options = {}) => {
                            const response = await request.get(path, options);
                            return response.data;
                        }
                        // when you call this method, it will return a promies

                        export default request;

        Các phần thực hiện gọi API được viết code riêng nằm trong thư mục services
            Trong thư mục src/ tạo thư mục services/
                Trong thư mục services/ tạo các file cấu hình phù hợp với từng chức năng.
                    Example:
                        import * as request from '~/Utils/request';

                        export const search = async (q, type = 'less') => {
                            try {
                                const res = await request.get('users/search', {
                                    params: {
                                        q,
                                        type: 'less',
                                    },
                                });
                                return res.data;
                            } catch (error) {
                                console.log(error);
                            }
                        };

        Sử dụng:

        const fetchApi = async () => {
            const result = await search(debounced);
            ...
        };

# Proptype

    PropTypes giúp dễ dàng kiểm soát các kiểu dữ liệu của các props hơn

    npm install --save prop-types

    *Với create-react-app thư viện này đã được cài sẵn.
