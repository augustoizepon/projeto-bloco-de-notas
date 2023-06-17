
  const btnAdd = document.querySelector("#btn-add");

const container = document.querySelector(".container");

const sound = new Audio("IARRU.mp3");

const mario = document.createElement("img");

mario.id = "mario";

mario.src = "mario.gif";

mario.alt = "Mario";

mario.style.position = "fixed";

mario.style.bottom = "0";

mario.style.left = "0";

mario.style.height = "100px";

mario.style.width = "100px";

container.appendChild(mario);

let marioPosition = 0;

const addNewNote = () => {

  let title = document.querySelector("#title").value;

  let textContentElement = document.querySelector("#text-area").value;

  const currentDate = new Date();

  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const note = {

    title: title,

    textContent: textContentElement,

    dateTime: formattedDate,

  };

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.push(note);

  localStorage.setItem("notes", JSON.stringify(notes));

  const notesGenerated = document.createElement("div");

  notesGenerated.className = "notesGenerated";

  notesGenerated.style.opacity = "0";

  notesGenerated.style.transform = "scale(0)";

  container.appendChild(notesGenerated);

  const titleAndAddGenerated = document.createElement("div");

  titleAndAddGenerated.className = "titleAndAddGenerated";

  notesGenerated.appendChild(titleAndAddGenerated);

  const textArea = document.createElement("div");

  textArea.className = "textArea";

  notesGenerated.appendChild(textArea);

  const dateTimeElement = document.createElement("div");

  dateTimeElement.className = "dateTime";

  dateTimeElement.textContent = note.dateTime;

  notesGenerated.appendChild(dateTimeElement);

  titleAndAddGenerated.textContent = note.title;

  textArea.textContent = note.textContent;

  sound.play();

  marioPosition -= 50;

  mario.style.bottom = `${marioPosition}px`;

  mario.style.animation = "jump 0.3s ease";

  setTimeout(() => {

    mario.style.animation = "";

  }, 300);

  notesGenerated.style.opacity = "1";

  notesGenerated.style.transform = "scale(1)";

  notesGenerated.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  document.querySelector("#title").value = "";

  document.querySelector("#text-area").value = "";

};

const loadNotes = () => {

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note) => {

    const notesGenerated = document.createElement("div");

    notesGenerated.className = "notesGenerated";

    container.appendChild(notesGenerated);

    const titleAndAddGenerated = document.createElement("div");

    titleAndAddGenerated.className = "titleAndAddGenerated";

    notesGenerated.appendChild(titleAndAddGenerated);

    const textArea = document.createElement("div");

    textArea.className = "textArea";

    notesGenerated.appendChild(textArea);

    const dateTimeElement = document.createElement("div");

    dateTimeElement.className = "dateTime";

    dateTimeElement.textContent = note.dateTime;

    notesGenerated.appendChild(dateTimeElement);

    titleAndAddGenerated.textContent = note.title;

    textArea.textContent = note.textContent;

  });

};

const clearCacheButton = document.createElement("button");

clearCacheButton.textContent = "Limpar Cache";

clearCacheButton.style.backgroundColor = "yellow";

clearCacheButton.style.fontFamily = "Arial";

container.appendChild(clearCacheButton);

const clearCache = () => {

  localStorage.removeItem("notes");

  location.reload();

};

clearCacheButton.addEventListener("click", clearCache);

btnAdd.addEventListener("click", addNewNote);

loadNotes();
