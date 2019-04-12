import axios from 'axios';

const verbs = {
  CREATE: 'post',
  DELETE: 'delete',
  LOAD: 'get',
  UPDATE: 'put',
};

export const CALL_API = 'Call API';

export default () => next => action => {
  const { [CALL_API]: callAPI, reqParams } = action;
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  const { endpoint, types } = callAPI;

  const actionWith = nextAction => {
    const { [CALL_API]: del, ...finalAction } = {
      ...action,
      ...nextAction,
    };
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  const [actionType] = requestType.split('_');
  const verb = verbs[actionType];
  next(actionWith({ type: requestType }));

  return axios[verb](`/api/${endpoint}`, reqParams).then(
    ({ data }) =>
      next(
        actionWith({
          data,
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
