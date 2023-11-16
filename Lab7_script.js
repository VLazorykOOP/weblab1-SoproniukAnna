const cases = [
    [ "pageshow","blur", "focus","load",  "resize"],
    ["click",  "mousemove", "mouseover", "dblclick"],
  ];
  const outputs = [
    "You are looking at me!",
    "You are unfocused!",
    "You are focused!",
    "The page is fully loaded!",
    "You are changing me!",
  ];
  
  function task1(todo) {
    window.addEventListener(`${todo}`, () => {
      console.log(`${outputs[cases[0].indexOf(`${todo}`)]}`);
    });
  }
  
  function task2(index, todo) {
    const teg = document.querySelector(`.h${index}`);
    let i = 0;
    teg.addEventListener(`${todo}`, () => {
      i++;
      if (i % 2 != 0) {
        teg.style.color = "green";
      } else teg.style.color = "black";
      if (i > 2) i = 1;
    });
  }
  
  function task3() {
    const run = document.querySelector(".run");
    const output = document.querySelector(".output");
    run.addEventListener("click", () => {
      output.value = document.forms.length;
    });
  }
  
  function task4(todo) {
    const img = document.querySelector(".img");
    let i = 0;
    img.addEventListener(`${todo}`, () => {
      i++;
      if (i % 2 != 0) {
        img.style.width = "300px";
      } else img.style.width = "100px";
      if (i > 2) i = 1;
    });
  }
  
  function task5() {
   const submit=document.querySelector('.submit')
   submit.addEventListener(('click'), ()=>{
    const input=document.querySelector('.input')
    console.log(input)
    let words=input.value.trim().split(/\s+/)
    input.value=''
    input.value+=words.length
    console.log(words, words.length)
   })
  }
  
  task1(cases[0][0])
  task2(1, cases[1][0])
  task3()
  task4(cases[1][0])
  task5();