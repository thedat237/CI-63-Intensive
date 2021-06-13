// sử dụng khi là 1 function vd: function deleter; function add
// function myModule() {
//     return "new module";
// }
// export { myModule };

// or
// export function myModule() {
//   return "new module";
// }


// sử dụng khi nó chỉ thực hiện duy nhất 1 chức năng (class cha)
function myModule() {
  return "new module";
}
export default myModule ;



