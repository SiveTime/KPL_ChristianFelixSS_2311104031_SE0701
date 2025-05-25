const { app, BrowserWindow } = require('electron');
const path = require('path');

/**
 * Membuat window utama aplikasi
 */
function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 350,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

// Ketika aplikasi siap
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Ketika semua window ditutup
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});