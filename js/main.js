/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

//THIS IS A PROMISE -> you can send this value around in code without waiting for it to evaluate
d3.json("data/ages.json").then (data => {
  
  data.forEach(person => {
    person.age = parseInt(person.age)
  })
  
  let svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400)

  let circles = svg.selectAll("circle")
    .data(data)

  circles.enter()
    .append("circle")
      .attr("cx", (person, index) => {
        return (index * 50) + 25;
      })
      .attr("cy", 25)
      .attr("r", (person) => {
        return person.age * 2
      })
      .attr("fill", (person) => {
        if (person.name == "Tony") {
          return "blue"
        } else if (person.age < 10) {
          return "green"
        } else {
          return "red"
        }
      })
  
}).catch(error => {
  console.log(error);
})

// d3.tsv("data/ages.tsv").then(function(data){
//     data.forEach(function(d){
//         d.age = +d.age;
//     });
// 
//     var svg = d3.select("#chart-area").append("svg")
//         .attr("width", 400)
//         .attr("height", 400);
// 
//     var circles = svg.selectAll("circle")
//         .data(data);
// 
//     circles.enter()
//         .append("circle")
//             .attr("cx", function(d, i){
//                 console.log(d);
//                 return (i * 50) + 25;
//             })
//             .attr("cy", 25)
//             .attr("r", function(d){
//                 return d.age * 2;
//             })
//             .attr("fill", function(d){
//                 if (d.name == "Tony") {
//                     return "blue";
//                 }
//                 else {
//                     return "red";
//                 }
//             });
// }).catch(function(error){
//     console.log(error);
// })
