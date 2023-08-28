const loadPhone = async (searchText = "a") => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;

  phoneDisplay(phones);
};

const phoneDisplay = (phones) => {
  const phonesContainer = document.getElementById("phone-container");

  const showBtn = document.getElementById("show-all-btn");
  if (phones.length > 6) {
    showBtn.classList.remove("hidden");
  } else {
    showBtn.classList.add("hidden");
  }

  phonesContainer.textContent = "";

  phones = phones.slice(0, 6);

  phones.forEach((phone) => {
    const div = document.createElement("div");

    div.classList = `card bg-gray-300 p-4 shadow-xl`;

    div.innerHTML = `
   
  <figure class=""><img src=${phone.image} alt="phone" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p> </p>
    <div class="card-actions justify-center">
      <button onclick="showDetails('${phone.slug}') " class="btn btn-primary">Details</button>
    </div>
  </div>

    
    `;

    // div.innerHTML = "";
    phonesContainer.appendChild(div);
  });
  toggleLoadingSpinner(false);
};

// show details

const showDetails = async (id) => {
  console.log(id);

  //   load single data.

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();

  //   console.log(data.data);
  showPhoneDetails(data.data);
};

function showPhoneDetails(phone) {
  console.log(phone);

  const showDetailModal = document.getElementById("show_details_modal");

  showDetailModal.textContent = "";

  const div = document.createElement("div");

  div.innerHTML = `
  <form method="dialog" class="modal-box">
  <h3 class="font-bold text-lg"> ${phone.name}  </h3>
  <img src="${phone.image}" alt="" />
  <p class="py-4"> ${phone.brand} </p>
  <div class="modal-action">
    <!-- if there is a button in form, it will close the modal -->
    <button class="btn">Close</button>
  </div>
</form>
  
  `;

  showDetailModal.appendChild(div);

  show_details_modal.showModal();
}

// handle search button

const handleSearchBtn = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");

  const searchText = searchField.value;

  loadPhone(searchText);
  searchField.value = "";
};

// showPhone();

// another search field recap

/* document.getElementById("search-btn").addEventListener("click", () => {
  const searchFiled = document.getElementById("search-field2").value;

  toggleLoadingSpinner(true);

  loadPhone(searchFiled);
}); */

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

loadPhone();
