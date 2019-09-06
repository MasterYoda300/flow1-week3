  /* 
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */

  /* global fetch */

  console.log("Death before mild inconvinience!");
  const persons = ["Lars", "Destroyer of Worlds", "Warløkke", "PutinFangirl"];
  const root = document.getElementById("root");
  const btn1 = document.getElementById("btn1");
  const url = "https://goinghamdev.com/Shitty_IMDB";
  const api = "/api/movie/all";
  btn1.onclick = function ()
  {
     
      fetch(url + api)
              .then(function (response)
              {
                  return response.json();
              })
              .then(function (data)
              {
                  const tblContent = data.map(el => "<tr><td>" + el.name + "</td><td>" + el.year + "</td></tr>").join();
                  root.innerHTML = "<table><tr><th>Name</th><th>Year</th></tr>" + tblContent + "</table>";
              });
  };