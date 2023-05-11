import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mO = fromJS(object);

  return mO.getIn(array, undefined);
