const parent = React.createElement("div",{id: "parent"},
React.createElement("div" , {id : "child"} ,[
    React.createElement("h1" , {} , "Heading One"),
    React.createElement("h2" , {} , "Heading Two")
]),
React.createElement("div" , {id : "child"} ,[
    React.createElement("h1" , {} , "Heading one part2"),
    React.createElement("h2" , {} , "Heading two part2")
])
);

console.log(parent);
     
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);