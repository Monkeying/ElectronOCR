'use strict';

const electron = require('electron');
// Module to control application life.
const app = electron.app;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

const {ipcMain} = require('electron');

ipcMain.on('close-main-window', function () {
    app.quit();
});

ipcMain.on('image-changed', function(sender, fileName) {
	//console.log('on image-changed  with ' + JSON.stringify(arguments));
	mainWindow.setTitle(fileName);
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        //frame: false,
        resizable: true,
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

