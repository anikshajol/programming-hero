const loadQuote = async () => {
  try {
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json();
    //   console.log(data);
    displayQuote(data);
  } catch (err) {
    console.error(err);
  }
};

const displayQuote = (data) => {
  const { quote } = data;
  const displayField = document.getElementById("quote");

  displayField.innerText = `${quote}`;
};
loadQuote();
