function sayHello() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("nameInput").value = ""
    if (name == "")
      alert("Please, write your name")
    else
      alert("Hello, " + name + "!");
  }
  
  fetch("t1.txt")
    .then(response => response.text())
    .then(data => {
      var textBlock1 = document.getElementById("textBlock1");
      textBlock1.innerText = data;
    });
  
  fetch("t2.txt")
    .then(response => response.text())
    .then(data => {
      var textBlock2 = document.getElementById("textBlock2");
      textBlock2.innerText = data;
    });
  