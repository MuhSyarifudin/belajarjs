let btn = document.getElementsByTagName("input");
let lampu = document.getElementsByTagName("img");

btn[0].addEventListener("click", function () {
  lampu[0].src = btn[0].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[1].addEventListener("click", function () {
  lampu[1].src = btn[1].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[2].addEventListener("click", function () {
  lampu[2].src = btn[2].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[3].addEventListener("click", function () {
  if (btn[3].checked) {
    lampu[0].src = "pic_bulbon.gif";
    lampu[1].src = "pic_bulbon.gif";
    lampu[2].src = "pic_bulbon.gif";
  } else if (!btn[3].checked) {
    lampu[0].src = "pic_bulboff.gif";
    lampu[1].src = "pic_bulboff.gif";
    lampu[2].src = "pic_bulboff.gif";
  }
});
btn[4].addEventListener("click", function () {
  lampu[3].src = btn[4].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[5].addEventListener("click", function () {
  lampu[4].src = btn[5].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[6].addEventListener("click", function () {
  lampu[5].src = btn[6].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[7].addEventListener("click", function () {
  if (btn[7].checked) {
    lampu[4].src = "pic_bulbon.gif";
    lampu[5].src = "pic_bulbon.gif";
  } else if (!btn[7].checked) {
    lampu[4].src = "pic_bulboff.gif";
    lampu[5].src = "pic_bulboff.gif";
  }
});
btn[8].addEventListener("click", function () {
  lampu[6].src = btn[8].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[9].addEventListener("click", function () {
  lampu[7].src = btn[9].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[10].addEventListener("click", function () {
  lampu[8].src = btn[10].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[11].addEventListener("click", function () {
  lampu[9].src = btn[11].checked ? "pic_bulbon.gif" : "pic_bulboff.gif";
});
btn[12].addEventListener("click", function () {
  if (btn[12].checked) {
    lampu[6].src = "pic_bulbon.gif";
    lampu[7].src = "pic_bulbon.gif";
    lampu[8].src = "pic_bulbon.gif";
    lampu[9].src = "pic_bulbon.gif";
  } else if (!btn[12].checked) {
    lampu[6].src = "pic_bulboff.gif";
    lampu[7].src = "pic_bulboff.gif";
    lampu[8].src = "pic_bulboff.gif";
    lampu[9].src = "pic_bulboff.gif";
  }
});
