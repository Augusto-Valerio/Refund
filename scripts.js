const amount = document.getElementById("amount")


amount.oninput = () => {
  // Get the current value of the input and remove non-numeric characters
  let value = amount.value.replace(/\D/g, "");

  amount.value = value
}