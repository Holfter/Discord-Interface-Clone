function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Collapsibles/Accordion

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    var arrow = this.children[0];
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrow.classList.add("fa-chevron-right");
      arrow.classList.remove("fa-chevron-down");
    } else {
      panel.style.display = "block";
      arrow.classList.remove("fa-chevron-right");
      arrow.classList.add("fa-chevron-down");
    }
  });
}

var tab = document.getElementsByClassName("tab");
var tabActive = document.getElementsByClassName("tabActive");

function moveClass() {
  var items = document.getElementsByClassName("tab");
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
      for (var j = 0; j < items.length; j++) {
        items[j].classList.remove("tabActive");
      }
      this.classList.add("tabActive");
    };
  }
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    moveClass();
  });
}

//Get the current date
function date() {
  var data = new Date(),
    dia = data.getDate().toString().padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
    ano = data.getFullYear();
  return mes + "/" + dia + "/" + ano;
}

var message = document.getElementById("message");
var msgInput = document.getElementById("msg-input");
var newChat = document.getElementById("container-chat");

message.addEventListener("submit", (e) => {
  e.preventDefault();
  //Create elements for the new message
  if (msgInput.value !== "") {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var messageDiv = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var span = document.createElement("span");

    div.classList.add("card-chat");
    p1.classList.add("user-name");

    img.src = "images/profile.png";
    p1.innerText = "User";
    p2.innerText = msgInput.value;
    span.innerText = date();
    p1.appendChild(span);

    messageDiv.appendChild(p1);
    messageDiv.appendChild(p2);
    div.appendChild(img);
    div.appendChild(messageDiv);
    newChat.appendChild(div);

    //Keep overflow div scrolled to bottom unless user scrolls up
    window.scrollTo(0, document.querySelector(".server-chat").scrollHeight);
    newChat.scrollTop = newChat.scrollHeight;

    //Reset the form input field text to empty
    message.reset();
  }
});

//Change the mic and headphones icons color to red when clicked
var mutes = document.querySelectorAll(".mute");
for (let i = 0; i < mutes.length; i++) {
  mutes[i].addEventListener("click", function () {
    mutes[i].classList.toggle("muted");
  });
}
