// function myfunc() {
//   let x = document.getElementById("from").value;
//   console.log(x);
//   let y = document.getElementById("to").value;
//   console.log(y);
//   const url = `https://neutrinoapi.net/convert?user-id=silveranon&api-key=CAVuHQ4w8fMULwvA4YqhGgGZQSI6CfrGZOieWMzpVTuL6pCR&from-value=1&from-type=${x}&to-type=${y}`;
//   fetch(url).then((data) => {
//     console.log(data);
//   });
// }
async function myfunc() {
  let amountentered = document.getElementById("floatingInput").value;
  if (!amountentered) {
    alert("Enter the amount value please");
    
  }
  console.log(amountentered);
  const spinner = document.getElementById("spinner");
  let from = document.getElementById("from").value;
  console.log(from);
  let to = document.getElementById("to").value;
  console.log(to);
  let result = document.getElementById("result");
  spinner.removeAttribute("hidden");
  await fetch(
    `https://v6.exchangerate-api.com/v6/180c17d976708a16bc857bb7/pair/${from}/${to}/${amountentered}`
  )
    .then((response) => response.json())
    .then((json) => {
      spinner.setAttribute("hidden", "");
      result.innerHTML = `${amountentered} ${from} = ${json.conversion_result} ${to}`;
    });
}
