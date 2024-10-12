// export function NameFunc(props) {
//   return (
//     <h1>
//       {props.name} {props.age}
//     </h1>
//   );
// }

// export function NameFunc({ name, age = 30, isProgramer }) {
//   return (
//     console.log(isProgramer),
//     (
//       <h1>
//         {name} {age}
//       </h1>
//     )
//   );
// }

export function NameFunc({ children }) {
  return <h1>{children}</h1>;
}
