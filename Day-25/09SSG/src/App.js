import React from "react";

export default function App({ teas }) {
  return React.createElement("div", { style: { padding: "2rem" } }, [
    React.createElement("h1", { key: "title" }, "Chai Code Teas"),
    React.createElement(
      "ul",
      { key: "list" },
      teas.map((tea) =>
        React.createElement("li", { key: tea.id }, [
          React.createElement("h3", { key: "name" }, tea.name),
          React.createElement("p", { key: "desc" }, tea.description),
        ])
      )
    ),
  ]);
}
