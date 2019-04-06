import axios from 'axios';

const verbs = {
  CREATE: 'post',
  DELETE: 'delete',
  LOAD: 'get',
  UPDATE: 'put',
};

export const CALL_API = 'Call API';

export default () => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  const { endpoint, reqParams, types } = callAPI;

  const actionWith = nextAction => {
    const { [CALL_API]: del, ...finalAction } = { ...action, ...nextAction };
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  const verb = verbs[requestType.split('_').shift()];
  next(actionWith({ type: requestType }));

  return axios[verb](`/api/${endpoint}`, reqParams).then(
    ({ data }) =>
      next(
        actionWith({
          results: data,
          type: successType,
        }),
      ),
    error =>
      next(
        actionWith({
          error: error.message,
          type: failureType,
        }),
      ),
  );
};
