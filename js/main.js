
let elInput = document.querySelector (".form__input");
let elBtn = document.querySelector (".push__btn");
let elButton = document.querySelector (".wrapper__btn");
let elList = document.querySelector (".output__list");
let arrowNan = [] ;

elBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();
  let inputValue = elInput.value.trim() ;
  
  if (inputValue.length > 15 || inputValue.length == "" || !isNaN(inputValue) || inputValue.length < 3){
    elInput.style.borderColor = "red";
    return
  }
  elInput.style.borderColor = "black";
  arrowNan.push(inputValue);
  
  for (let shop of arrowNan) {
  create = document.createElement("li");
  create.textContent =`Maxsulot nomi - ${shop}`;
  create.style = "color: red; font-size: 30px;"
  }
  elList.append(create);
  
  console.log("arrowNan")
})

elButton.addEventListener ("click", function(evt)  {
  evt.preventDefault()
  elList.innerHTML = "";
})











