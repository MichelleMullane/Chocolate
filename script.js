function buy() {
  let name = prompt("Please enter your name below:");
  let email = prompt("Please enter your email address below:");
  let emoji = prompt("What is your favorite emoji?");

  if (name.length > 0 && email.length > 0) {
    alert(
      "Thank you, " +
        name +
        "!  We'll be in touch with the email address you provided.  Meanwhile, eat lots of dark chocolate! " +
        emoji
    );
  } else {
    alert(
      "Sorry, we cannot process your order without a name and email address.  Have a great day! " +
        emoji
    );
  }
}

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
