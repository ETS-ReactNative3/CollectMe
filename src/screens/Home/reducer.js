const initialState = {
  isLoading: true,
  hasErrored: false,
  items: [],
  itemsHeader: [],
};
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return { ...state, hasErrored: action.hasErrored };
    case "ITEMS_IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "ITEMS_FETCH_DATA_SUCCESS":
      return { ...state, items: action.items };
      case "ITEMS_HEADER_FETCH_DATA_SUCCESS":
      return { ...state, itemsHeader: action.itemsHeader };
    default:
      return state;
  }
}
