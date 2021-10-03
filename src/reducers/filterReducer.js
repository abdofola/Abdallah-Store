export function filterReducer(state, action) {
  switch (action.type) {
    case "all":
      return {
        ...state,
        showAll: !state.showAll,
        showHeater: false,
        showBicycle: false,
      };
    case "bicycles":
      return {
        ...state,
        showAll: false,
        showHeater: false,
        showBicycle: true,
      };
    case "heaters":
      return {
        ...state,
        showAll: false,
        showBicycle: false,
        showHeater: true,
      };
    default:
      return state;
  }
}
