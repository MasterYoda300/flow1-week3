

function add(n1, n2) {
    return n1 + n2;
}


var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback + (n1, n2);
};

// 2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.


console.log(add(1,2));     // =3 
console.log(add);          //  [Function: add]
console.log(add(1, 2, 3)); // =3
console.log(add(1));	  // NaN
console.log(cb(3, 3, add)); // esult from the two numbers: 3+3=function add(n1, n2) {    return n1 + n2;}3
console.log(cb(4, 3, sub)); // Result from the two numbers: 4+3=function (n1, n2) {return n1 - n2;}3
console.log(cb(3, 3, add())); // Result from the two numbers: 3+3=NaN3
console.log(cb(3, "hh", add));// Result from the two numbers: 3+hh=function add(n1, n2) {return n1 + n2;}hh


// 3)  


var names = ["Lars", "Ib", "Jan", "Ian"];


  const shortNames = names.filter(name => name.length <= 3);
  
  names.forEach(function(element)
  {
      console.log(element);
  })
  
  shortNames.forEach(function(element)
  {
      console.log(element);
  })
  
  const mapOfDoom = names.map(a => a.toUpperCase());
  console.log(mapOfDoom);
  
  function htmlString(array)
  {
      const arrayMap = array.map(a=> "<li>" + a+ "</li>")
      return "<ul>" + arrayMap.join('') + "<ul>"
  }
  console.log(htmlString(names))
