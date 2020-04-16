import React from "react";
import ReactDOM from "react-dom";
const Todo = React.lazy(() => import("./todo"));
const App = () => {
  React.useEffect(() => {
    import("./util").then(({ addtest }) => {
      console.log("add:", addtest(1, 2));
    });
  });
  return (
    <React.Suspense fallback={() => <div>loading...</div>}>
      <div>
        hello world goodl test goodl morning
        <Todo />
      </div>
    </React.Suspense>
  );
};
let root = document.getElementById("root");
if (!root) {
  root = document.createElement("div");
  document.body.appendChild(root);
}
ReactDOM.render(<App />, root);
