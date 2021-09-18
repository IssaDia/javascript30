body = document.querySelector("body");
document.body.style.backgroundImage = "url('./assets/images/background.jpeg')";
const divContainer = document.createElement("div");
body.appendChild(divContainer);
divContainer.classList.add("keys");

const keysArray = [
  { dataKey: 65, kbd: "A", name: "clap" },
  { dataKey: 83, kbd: "S", name: "hihat" },
  { dataKey: 68, kbd: "D", name: "kick" },
  { dataKey: 70, kbd: "F", name: "openhat" },
  { dataKey: 71, kbd: "G", name: "boom" },
  { dataKey: 72, kbd: "H", name: "ride" },
  { dataKey: 74, kbd: "J", name: "snare" },
  { dataKey: 75, kbd: "K", name: "tom" },
  { dataKey: 76, kbd: "L", name: "tink" },
];

for(let i = 0;i<keysArray.length;i++) {
    const divKey = document.createElement("div");
    divContainer.append(divKey);
    divKey.classList.add("key");
    divKey.setAttribute("data-key", keysArray[i].dataKey);
    const kbdKey = document.createElement("kbd");
    divKey.append(kbdKey);
    kbdKey.textContent = keysArray[i].kbd;
    const spanKey = document.createElement("span");
    spanKey.classList.add = "sound";
    spanKey.textContent = keysArray[i].name;
    divKey.append(spanKey);
    const audioKey = document.createElement("audio");
    audioKey.setAttribute("data-key", keysArray[i].dataKey);
    audioKey.src = `./assets/sounds/${keysArray[i].name}.wav`;
    body.append(audioKey);
    divKey.addEventListener("click" ,()=> {
        divKey.classList.add("playing");
        audioKey.play();
    })
    divKey.classList.remove("playing");
}
