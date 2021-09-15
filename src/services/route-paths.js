const PARAM_PREFIX = ':';

export default function pathMaker(path) {
  return function createPath(params = {}) {
    console.log(Object.entries(params));
    return Object.entries(params).reduce(
      (resultPath, [key, value]) =>
        resultPath.replace(
          new RegExp(`${PARAM_PREFIX}${key}`),
          value.toString(),
        ),
      path,
    );
  };
}

export const ROUTE_PATHS = {
  _: pathMaker('/'),
  MOVIES: {
    _: pathMaker('/movies'),
    BY_ID: {
      _: pathMaker('/movies/:movieId'),
      CAST: { _: pathMaker('/movies/:movieId/cast') },
      REVIEWS: { _: pathMaker('/movies/:movieId/reviews') },
    },
  },
};
// console.log('ROUTE_PATHS', ROUTE_PATHS);
// CONTACTS: {
//   _: pathMaker('/contacts'),
//   BY_ID: {
//     _: pathMaker('/contacts/:contactId'),
//   },
