const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1900,
        height: 1150,
        webPreferences: { 
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('home.html'); // Load the first page

    // Create a custom menu with Back and Forward buttons before the File menu
    const menuTemplate = [
        {
            label: "← Back", // Using plain arrow for consistency
            click: () => {
                if (mainWindow.webContents.canGoBack()) {
                    mainWindow.webContents.goBack();
                }
            }
        },
        {
            label: "Forward →", // Similar arrow for Forward button
            click: () => {
                if (mainWindow.webContents.canGoForward()) {
                    mainWindow.webContents.goForward();
                }
            }
        },
        {
            label: "File",
            submenu: [
                { role: "quit" } // Quit option
            ]
        },
        { role: "editMenu" },  // Default Edit menu
        { role: "viewMenu" },  // Default View menu
        { role: "windowMenu" }, // Default Window menu
        { role: "help" }  // Default Help menu
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
});
