// export default function Todo({ task, isDone }) {
//   console.log(task);
//   return <li>Task: {task}</li>;
// }

// export default function Todo({ task, isDone }) {
//   console.log(task);

//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }

export default function Todo({ task, isDone }) {
  console.log(task);

  if (isDone) {
    return <li>Finishe: {task}</li>;
  }
  return <li>Work on: {task}</li>;
}

// export default function Todo({ task, isDone }) {
//   // console.log(task);
//   return (
//     <li>
//       {isDone ? "finished" : "Work On"}: {task}
//     </li>
//   );
// }
