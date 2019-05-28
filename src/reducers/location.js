export default function locationReducer(state = "Seattle, WA", action) {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
// A reducer takes in Old State, an action object and returns new state.
// Pure Function: Can be called many times and return same result.
// Sample Test:
// test("locationReducer", () => {
//   exportAllDeclaration(
//     locationReducer("Seattle, WA", {
//       type: "SET_LOCATION",
//       payload: "San Francisco, CA"
//     })
//   ).toBe("San Francisco");
// });
