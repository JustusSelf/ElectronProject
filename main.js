const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu
const path = require('path')


app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width:500,
        height:500
    });

    mainWindow.loadURL(path.join(__dirname, "index.html"));

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu)



    mainWindow.on('closed', _=>{
        console.log('closed');
        mainWindow = null
    })
})

const template = [
    {
        label: electron.app.getName(),
        submenu: [
            {label: 'Quit',
            click: _=>{ 
                app.quit()
            },
             accelerator: 'Ctrl+Q'}
        ]
    },
    {
        label: "Edit",
        submenu: [
            {
                label: 'Add Item'
            },
            { type: 'separator'},
            {label: 'Clear Items',
            click: _=>{
                app.clearRecentDocuments()
            }
        }
        ]
    },
    {
        label: "Dev Tools",
        click: function(item, focusedWindow){
            focusedWindow.toggleDevTools()
        },
        accelerator: 'ctrl+i'
    }
]

