# HOW TO USE IT?

First of all, we need to install the module with

```
npm i template-redux-helpers
```

---

After we install our package, we can use our redux creator. We just to send two parameters to actionCreator function which are the type of action and the payload arg.

For the inner function, we need to send the value associated to the payload.

The function should return the action emitted.
For eg:

```javascript
import { actionCreator } from "template-redux-helpers";

export const actionTest = () => {
  return (dispatch) => {
    dispatch(actionCreator(ANY_ACTION_TYPE, "payload")("hello world"));
  };
};

OR 

export const actionTest = actionCreator(types.ANY_ACTION_TYPE, "payload");
// and inside of the react component actionTest("hello world");
```

---

# How can we create our reducers?

To create any reducer we need to send two parameters to the reducerCreator function. The first parameter should be the initialState, and the second parameter should be our reducers.

```javascript
import { reducerCreator } from "template-redux-helpers";

const initialState = {
    helloWorld: ""
}

// DEFINING OUR REDUCERS
const reducers = {
    [HELLO_WORLD_ACTION_TYPE]: (state, action) => {
        ...state,
        helloWorld: action.payload
    }
}

export default reducerCreator(initialState, reducers);

```
# How can we create our Thunk Actions?

To create any Action Thunk we need to set a callback that will receive three parameters from the actionThunkCreator function. A first parameter is an object with the parameters to be used inside the thunk context. The second is the dispatch function to invoke other async actions inside of our thunk context, and the third is the getState function to get the full redux store.

```javascript
import { actionCreator, actionThunkCreator } from "template-redux-helpers";


const getDoctorByIdStart = actionCreator(types.DOCTOR_FETCH_ID_INIT);
const getDoctorByIdComplete = actionCreator(types.DOCTOR_FETCH_ID_COMPLETE, 'data')
const getDoctorByIdError = actionCreator(types.DOCTOR_FETCH_ID_ERROR, 'payload');


export const getDoctorById = actionThunkCreator((id, dispatch) => {
  dispatch(getDoctorByIdStart());

  DoctorService
    .getById(id)
    .then(data => {
      dispatch(getDoctorByIdComplete(data));
    }).catch((err) => {
        dispatch(getDoctorByIdError(err));
      });
});


```
