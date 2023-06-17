const btnAdd = document.querySelector("#btn-add");
const container = document.querySelector(".container");

const sound = new Audio("IARRU.mp3")

const addNewNote = () => {
  let title = document.querySelector("#title").value;
  let textContentElement = document.querySelector("#text-area").value;

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const note = {
    title: title,
    textContent: textContentElement,
    dateTime: formattedDate
  };

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  const notesGenerated = document.createElement("div");
  notesGenerated.className = "notesGenerated";
  const titleAndAddGenerated = document.createElement("div");
  titleAndAddGenerated.className = "titleAndAddGenerated";
  const textArea = document.createElement("div");
  textArea.className = "textArea";
  notesGenerated.appendChild(titleAndAddGenerated);
  notesGenerated.appendChild(textArea);
  container.appendChild(notesGenerated);

  const dateTimeElement = document.createElement("div");
  dateTimeElement.className = "dateTime";
  dateTimeElement.textContent = note.dateTime;
  notesGenerated.appendChild(dateTimeElement);

  titleAndAddGenerated.textContent = note.title;
  textArea.textContent = note.textContent;
  
  sound.play()
  
  document.querySelector("#title").value = "";
  document.querySelector("#text-area").value = "";
};

const loadNotes = () => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note) => {
    const notesGenerated = document.createElement("div");
    notesGenerated.className = "notesGenerated";
    const titleAndAddGenerated = document.createElement("div");
    titleAndAddGenerated.className = "titleAndAddGenerated";
    const textArea = document.createElement("div");
    textArea.className = "textArea";
    notesGenerated.appendChild(titleAndAddGenerated);
    notesGenerated.appendChild(textArea);
    container.appendChild(notesGenerated);

    const dateTimeElement = document.createElement("div");
    dateTimeElement.className = "dateTime";
    dateTimeElement.textContent = note.dateTime;
    notesGenerated.appendChild(dateTimeElement);

    titleAndAddGenerated.textContent = note.title;
    textArea.textContent = note.textContent;
  });
};


btnAdd.addEventListener("click", addNewNote);
loadNotes(); // Carregar as notas ao carregar a página
