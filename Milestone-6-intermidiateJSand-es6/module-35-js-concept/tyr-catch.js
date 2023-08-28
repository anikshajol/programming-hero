const checkAge = () => {
  const ageField = document.getElementById("age");
  const ageValue = ageField.value;

  const errorField = document.getElementById("error");
  errorField.style.color = "red";

  try {
    const age = parseInt(ageValue);

    if (isNaN(age)) {
      throw "Please enter a number";
    } else if (age < 18) {
      throw "Age can not below 18";
    } else if (age > 30) {
      throw "murobbi aishen na";
    }
    errorField.innerHTML = "";
  } catch (err) {
    console.error("Error:", err);
    errorField.innerHTML = "Error " + err;
  } finally {
    console.log("All done");
  }
};
