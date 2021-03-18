const reduxUtils = require("./index");

const HELLO_WORLD_ACTION = "HELLO_WORLD";
const actionData = {
  helloWorld: "Hello World",
};

const initialState = {
  helloWorld: "",
};

const helloWorldReducer = {
  [HELLO_WORLD_ACTION]: (state, action) => {
    return {
      ...state,
      helloWorld: action.payload,
    };
  },
};

const actionResult = reduxUtils.actionCreator(
  HELLO_WORLD_ACTION,
  "payload"
)(actionData);

test("Redux utils function should exists", () => {
  expect(reduxUtils.reducerCreator).toBeDefined();
  expect(reduxUtils.actionCreator).toBeDefined();
});

describe("Redux Utils tests", () => {
  test("Test reducerCreator", () => {
    const reducer = reduxUtils.reducerCreator(initialState, helloWorldReducer)(
      actionResult.payload,
      actionResult
    );
    expect(reducer).toEqual({ helloWorld: { helloWorld: "Hello World" } });
  });

  test("Test reducerCreator ==> InitialState", () => {
    const reducer = reduxUtils.reducerCreator(initialState, helloWorldReducer);
    const result = reducer(initialState, {
      type: "NONE",
    });
    expect(result).toEqual({ helloWorld: "" });
  });

  test("Test actionCreator", () => {
    expect(actionResult).toEqual({
      type: "HELLO_WORLD",
      payload: { helloWorld: "Hello World" },
    });
  });
});

//TEST FUNCTION RETURNED BY FUNCTION
