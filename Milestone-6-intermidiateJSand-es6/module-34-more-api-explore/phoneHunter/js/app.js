const loadPhones = async (searchText = 13, isShowAll) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  toggleLoadingSpinner(false);
  showPhones(phones, isShowAll);

  // console.log(phones);
};

// show phones function

const showPhones = (phones, isShowAll) => {
  const showPhones = document.getElementById("show-phones");
  const showAll = document.getElementById("show-all");

  showPhones.textContent = "";

  if (phones.length > 8 && !isShowAll) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  if (!isShowAll) {
    phones = phones.slice(0, 8);
  }

  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList = "card bg-base-100 shadow-xl";
    // console.log(phone);
    const { image, brand } = phone;

    div.innerHTML = ` 
    <figure>
    <img src="${image}" alt="Shoes" />
    </figure>
            <div class="card-body">
                  <h2 class="card-title">${brand}</h2>
                  
                  <div class="card-actions justify-center">
                    <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                  </div>
              
            </div>
  
    `;
    showPhones.appendChild(div);
  });
};

// handle showDetails

const handleShowDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();

  showDetails(data.data);
};

const showDetails = (phone) => {
  console.log(phone);

  const h3 = document.querySelector(".modal-box h3");
  const img = document.querySelector(".modal-box img");
  const p = document.querySelector(".modal-box p");

  img.setAttribute("src", `${phone?.image}`);

  h3.textContent = `${phone?.name}`;

  p.textContent = `${phone?.storage ? phone.storage : "No Data"}`;

  show_details.showModal();
};

// search

const handleSearch = (isShowAll) => {
  const searchField = document.getElementById("search-field");

  const searchText = searchField.value;

  toggleLoadingSpinner(true);
  loadPhones(searchText, isShowAll);
};

document.getElementById("search-field").addEventListener("keyup", (e) => {
  const searchField = document.getElementById("search-field");

  if (e.key === "Enter") {
    const searchText = searchField.value;
    loadPhones(searchText);
  }
});

// loading spinner

const toggleLoadingSpinner = (isLoading) => {
  const loadingContainer = document.getElementById("loading-spinner");

  if (isLoading) {
    loadingContainer.classList.remove("hidden");
  } else {
    loadingContainer.classList.add("hidden");
  }
};

// show all button

const handleShowAll = () => {
  console.log("click");
  handleSearch(true);
};

loadPhones();
