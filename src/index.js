const reducerCreator = (initialState, reducers) => {
  return (state = initialState, action) => {
    if (reducers.hasOwnProperty(action.type)) {
      return reducers[action.type](state, action);
    }
    return state;
  };
};

const actionCreator = (type, ...argNames) => {
  return (...values) => {
    if (argNames.length === values.length) {
      let action = { type };
      if (argNames.length && values.length) {
        argNames.forEach((arg, index) => {
          action[argNames[index]] = values[index];
        });
      }
      return action;
    }
  };
};

export function actionThunkCreator(fn) {
  return (value) => {
    return (dispatch, getState) => {
      fn(value, dispatch, getState);
    }
  }
}

module.exports = {
  reducerCreator,
  actionCreator,
  actionThunkCreator
};
