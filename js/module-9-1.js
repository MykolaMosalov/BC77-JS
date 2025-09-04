const switchEl = document.querySelector("#theme-switch");

switchEl.addEventListener("change", onChangeSwitch);

function onChangeSwitch(event) {
  console.log(event.currentTarget.checked);
}
