let button = document.createElement("button");
button.innerHTML = "攻波定時測試";
button.style.position = 'absolute';
button.style.bottom = "10px";
button.style.left = "10px";
button.style.width = 300;
button.style.height = 300;
button.style.padding = '10px';
button.style.background = '#f0f0f0';
button.style.display = 'block';
button.style.zIndex = 99;

let time_input = document.createElement("input");
time_input.setAttribute("type", "text");
time_input.style.position = 'absolute';
time_input.style.bottom = "50px";
time_input.style.left = "10px";
time_input.style.width = 300;
time_input.style.zIndex = 99;
d = new Date();
time_input.value = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+(d.getMinutes()<10?'0':'') + d.getMinutes()+':'+d.getSeconds();

let path_time_input = document.createElement("input");
path_time_input.setAttribute("type", "text");
path_time_input.style.position = 'absolute';
path_time_input.style.bottom = "100px";
path_time_input.style.left = "10px";
path_time_input.style.width = 300;
path_time_input.style.zIndex = 99;
d2 = new Date();
path_time_input.value = '0';

// 2. Append somewhere
let body = document.getElementsByClassName("contentPage")[0];
body.appendChild(button);
body.appendChild(time_input);
body.appendChild(path_time_input);
let t_holder = null;


function last_counter() {
  dtime = new Date();
  //dtime.setMinutes(dtime.getMinutes+parseInt(path_time_input.value))
  setTimeout(() => {
    $('.rallyPointConfirm')[0].click()
  }, new Date(dtime - new Date());
}

// 3. Add event handler
button.addEventListener ("click", function() {
  dtime = new Date();
  //dtime.setMinutes(dtime.getMinutes+parseInt(path_time_input.value))
  if (dtime  - new Date() > 1500) {
    setTimeout(last_counter, dtime - new Date() - 1000);
  } else {
    last_counter();
  }
  button.innerHTML = '已設定完成';
  button.disabled = true;
  time_input.disabled = true;
  path_time_input.disabled = true;
});
