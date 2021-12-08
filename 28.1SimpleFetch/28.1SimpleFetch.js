const baseURL = "https://api.jokes.one/jod";
const getJoke = async () => {
  const text = document.querySelector("h2");
  const joke = await axios.get(baseURL);
  text.textContent = joke.data.contents.jokes[0].joke.text;
};
document.querySelector("button").addEventListener("click", getJoke);
