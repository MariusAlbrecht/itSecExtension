async function saveOptions(e) {
  e.preventDefault();
  await browser.storage.local.set({
    IgnoreFirst4: document.querySelector("#IgnoreFirst4").checked,
    ignoreInco: document.querySelector("#ignoreInco").checked
  });
  console.log("saved options")
}

async function restoreOptions() {
  let res = await browser.storage.local.get();
  document.querySelector("#IgnoreFirst4").checked = res.IgnoreFirst4;
  document.querySelector("#ignoreInco").checked = res.ignoreInco;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);