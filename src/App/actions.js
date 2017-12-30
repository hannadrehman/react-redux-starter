export const appActionNames = {
  APP_LOGIN: 'APP_LOGIN',
  APP_LOGOUT: 'APP_LOGOUT',
};

export const appActions = {
  login(modalData) {
    return {
      type: appActionNames.APP_LOGIN,
      payload: modalData,
    };
  },
  logout() {
    return {
      type: appActionNames.APP_LOGOUT,
      payload: false,
    };
  },
};
