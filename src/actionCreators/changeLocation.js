export default function changeLocation(location) {
  return { type: "SET_LOCATION", payload: location };
}
// Snapshot test
// expect(changeLocation("Seattle, WA")).toEqual({
//   type: "SET_LOCATION",
//   payload: "Seattle, WA"
// });
// // or
// expect(changeLocation("Seattle, WA")).toEqualSnapshot();
