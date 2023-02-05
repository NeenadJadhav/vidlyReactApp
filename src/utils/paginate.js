import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  //Convert items into a lodash wrapper so that we can chain lodash functions

  return _(items).slice(startIndex).take(pageSize).value();
}
