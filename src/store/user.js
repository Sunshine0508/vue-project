import {getInfo, getToken} from '../api/main'
const user = {
  state: {
    token: getToken(),
    menus: undefined,
    elements: undefined,
  },
  mutations: {
    SRT_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
    SET_ELEMENTS: (state, elements) => {
      state.elements = elements;
    },
  },
  actions: {
    // 获取信息
    GetInfo({
              commit,
              state
            }) {
      return new Promise(((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data;
          const menus = {};
          data.menus.forEach(item => {
            menus[item.code] = true;
          })
          commit('SET_MENUS', menus);
          const elements = {};
          data.element.forEach(item => {
            elements[item.code] = true;
          })
          commit('SET_ELEMENTS', elements);
          resolve(response);
        }).catch(error => {
          reject(error);
        })
      }))
    }
  }
}
export default user
