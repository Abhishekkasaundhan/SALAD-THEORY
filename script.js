// Smooth scroll
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Toggle dropdown open/close
function toggleDropdown() {
  document.getElementById("saladDropdown").classList.toggle("show");
}

// Update price and selected list
function updateTotal() {
  let total = 0;
  let list = document.getElementById("saladList");
  list.innerHTML = "";

  document.querySelectorAll("#saladDropdown input[type='checkbox']").forEach(cb => {
    let label = cb.parentElement;
    if (cb.checked) {
      label.classList.add("selected");
      let price = cb.value.match(/₹(\d+)/)[1];
      total += parseInt(price);

      let li = document.createElement("li");
      li.textContent = cb.value;
      list.appendChild(li);
    } else {
      label.classList.remove("selected");
    }
  });

  document.getElementById("totalPrice").innerText = "Total: ₹" + total;
}

// Add event listeners for checkboxes
document.querySelectorAll("#saladDropdown input[type='checkbox']").forEach(cb => {
  cb.addEventListener("change", updateTotal);
});

// Close dropdown if clicked outside
window.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.getElementById("saladDropdown").classList.remove("show");
  }
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let selectedSalads = Array.from(document.querySelectorAll("#saladDropdown input[type='checkbox']:checked"))
    .map(cb => cb.value)
    .join(", ");
  let address = document.getElementById("address").value;
  let message = document.getElementById("message").value;
  let price = document.getElementById("totalPrice").innerText;

  let phoneNumber = "918318353125"; 
  let whatsappURL = `https://wa.me/${phoneNumber}?text=Hello, my name is ${name}. I want to order ${selectedSalads}. Address: ${address}. Message: ${message}. ${price}`;


  window.open(whatsappURL, "_blank");
  window.location.href = gmailURL;
});
