const heading = React.createElement("div",{id:'parent'},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag")]),
React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am h1fghgfh tag"),
React.createElement("h2",{},"I am h2fghgfh tag")])]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);