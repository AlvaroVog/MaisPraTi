const addBtn = document.getElementById ("add");

const notes = JSON.parse (localStorage.getItem ("notes"));

addBtn.addEventListener ("click", () => addNewNote ());

function addNewNote (text = "") {
    const note = document.createElement ("div");
    note.classList.add ("note");
    
    note.innerHTML = `
    <div class="tools">
        <button class= "edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>     

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>

    </div>`;

    const editBtn = note.querySelector (".edit");
    const deleteBtn = note.querySelector (".delete")
    const main = note.querySelector (".main")
    const textarea = note.querySelector ("textarea")

    textarea.value = text; 

    main.innerHTML = marked (text);

    deleteBtn.addEventListener("click", () => {
        note.remove ();
        updateLs ();
    })

    editBtn.addEventListener ("click", () => {
        main.classList.toggle ("hidden");
        textArea.classList.toggle ("hidden")
    })

    textArea.addEventListener ("input", (e) => {
        const {value} = e.target;
        main.innerHTML = marked (value)

        updateLs ()
    })

    document.body.appendChild (note);
}

if (notes) {
    notes.forEach((note) => addNewNote (note))
}

function updateLs () {
    const notesText = document.querySelectorAll ("textarea");
    const notes = [];
    notesText.forEach ((note) => notes.push (note.value));
    localStorage.setItem("notes", JSON.stringify(notes));
}