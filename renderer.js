var app = require('electron').remote
var dialog = app.dialog
var fs = require('fs')

document.getElementById('btn').addEventListener('click', saveFile)

document.getElementById('open').addEventListener('click', openfile)

function openfile(){
    dialog.showOpenDialog((filenames) =>{
        if(filenames === undefined){
            alert("no files were selected")
            return;
        }

        readFile(filenames[0]);
    })
}

function readFile(filepath){
    fs.readFile(filepath, 'utf-8', (err, data) =>{
        if (err){
            alert("There was an error retrieving your file")
            return
        }
        var textArea = document.getElementById('output')
        textArea.value = data
    })
}

function saveFile(){
    dialog.showSaveDialog((filename)=>{
        if (filename === undefined){
            alert("You didn't enter a file name")
            return;
        }

        var content = document.getElementById('content').Value

        fs.writeFile(filename, content, (err)=>{
            if (err) console.log(err)
            alert("The file has been saved successfully!")
        })
    })

}
