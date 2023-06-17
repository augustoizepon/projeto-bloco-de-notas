const btnAdd = document.querySelector("#btn-add");
const container = document.querySelector(".container");

const addNewNote = () => {
  let title = document.querySelector("#title").value;
  let textContentElement = document.querySelector("#text-area").value;
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

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const dateTimeElement = document.createElement("div");
  dateTimeElement.className = "dateTime";
  dateTimeElement.textContent = formattedDate;
  notesGenerated.appendChild(dateTimeElement);

  titleAndAddGenerated.textContent = title;
  textArea.textContent = textContentElement;

  document.querySelector("#title").value = "";
  document.querySelector("#text-area").value = "";
};

btnAdd.addEventListener("click", addNewNote);