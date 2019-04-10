import { CALL_API } from '../middleware/api';

// GET: LOAD
export const LOAD_WIDGETS_REQUEST = 'LOAD_WIDGETS_REQUEST';
export const LOAD_WIDGETS_SUCCESS = 'LOAD_WIDGETS_SUCCESS';
export const LOAD_WIDGETS_FAILURE = 'LOAD_WIDGETS_FAILURE';

const fetchWidgets = () => ({
  [CALL_API]: {
    endpoint: 'widgets',
    types: [LOAD_WIDGETS_REQUEST, LOAD_WIDGETS_SUCCESS, LOAD_WIDGETS_FAILURE],
  },
});

export const loadWidgetsRequest = () => dispatch => dispatch(fetchWidgets());

// POST: CREATE
export const CREATE_WIDGET_REQUEST = 'CREATE_WIDGET_REQUEST';
export const CREATE_WIDGET_SUCCESS = 'CREATE_WIDGET_SUCCESS';
export const CREATE_WIDGET_FAILURE = 'CREATE_WIDGET_FAILURE';

const createWidget = reqParams => ({
  [CALL_API]: {
    endpoint: 'widgets',
    reqParams,
    types: [
      CREATE_WIDGET_REQUEST,
      CREATE_WIDGET_SUCCESS,
      CREATE_WIDGET_FAILURE,
    ],
  },
});
export const createWidgetRequest = values => dispatch =>
  dispatch(createWidget(values));

// PUT: UPDATE
export const UPDATE_WIDGET_REQUEST = 'UPDATE_WIDGET_REQUEST';
export const UPDATE_WIDGET_SUCCESS = 'UPDATE_WIDGET_SUCCESS';
export const UPDATE_WIDGET_FAILURE = 'UPDATE_WIDGET_FAILURE';

const updateWidget = reqParams => ({
  [CALL_API]: {
    endpoint: `widgets/${reqParams.id}`,
    reqParams,
    types: [
      UPDATE_WIDGET_REQUEST,
      UPDATE_WIDGET_SUCCESS,
      UPDATE_WIDGET_FAILURE,
    ],
  },
});
export const updateWidgetRequest = values => dispatch =>
  dispatch(updateWidget(values));

// DELETE
export const DELETE_WIDGET_REQUEST = 'DELETE_WIDGET_REQUEST';
export const DELETE_WIDGET_SUCCESS = 'DELETE_WIDGET_SUCCESS';
export const DELETE_WIDGET_FAILURE = 'DELETE_WIDGET_FAILURE';

const deleteWidget = id => ({
  [CALL_API]: {
    endpoint: `widgets/${id}`,
    id,
    types: [
      DELETE_WIDGET_REQUEST,
      DELETE_WIDGET_SUCCESS,
      DELETE_WIDGET_FAILURE,
    ],
  },
});
export const deleteWidgetRequest = id => dispatch => dispatch(deleteWidget(id));
