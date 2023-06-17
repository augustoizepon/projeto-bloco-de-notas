const btnAdd = document.querySelector("#btn-add");
const container = document.querySelector(".container");

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
  document.body.appendChild(notesGenerated);
  container.appendChild(notesGenerated);

  const dateTimeElement = document.createElement("div");
  dateTimeElement.className = "dateTime";
  dateTimeElement.textContent = note.dateTime;
  notesGenerated.appendChild(dateTimeElement);

  titleAndAddGenerated.textContent = note.title;
  textArea.textContent = note.textContent;

  document.querySelector("#title").value = "";
  document.querySelector("#text-area").value = "";
};

btnAdd.addEventListener("click", addNewNote);
