var nilai1 = parseInt(prompt("masukkan nilai 1"));
var nilai2 = parseInt(prompt("masukkan nilai 2"));
var operator = prompt("masukkan operator");

if (operator == "+") {
  alert("hasilnya = ", nilai1 + nilai2);
} else if (operator == "-") {
  alert("hasilnya = ", nilai1 - nilai2);
} else if (operator == "/") {
  alert("hasilnya = ", nilai1 / nilai2);
} else if (operator == "*") {
  alert(`hasilnya = ${nilai1 * nilai2}`);
} else {
  alert("ini kalkulator bro");
}
 