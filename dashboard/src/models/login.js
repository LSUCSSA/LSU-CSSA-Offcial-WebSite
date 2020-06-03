import { stringify } from 'querystring';
import { notification } from 'antd';
import { router } from 'umi';
import { AccountLogin } from '@/services/login';
import { setAuthority, getAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(AccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully
      // console.log(response);

      if (response.response.statusText === 'OK') {
        if (!response.data.user.confirmed) {
          notification.error({
            message: `请求错误`,
            description: '你的账户还未激活, 请确认你的邮箱',
          });
          return;
        }
        setAuthority(response.data.user.role.type, response.data.jwt);
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }

        router.replace(redirect || '/');
      } else {
        setAuthority('guest');
      }
    },

    logout() {
      const { redirect } = getPageQuery(); // Note: There may be security issues, please note

      if (window.location.pathname !== '/user/login' && !redirect) {
        localStorage.clear();
        router.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload, type }) {
      return { ...state, status: payload.response.statusText, type };
    },
  },
};
export default Model;
