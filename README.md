# ElectronOCR
Cute OCR Toolkits For OSX, Based On Electron,React&amp;Tesseract

![](https://raw.githubusercontent.com/wxyyxc1992/ElectronOCR/master/assets/images/screenshot/screenshot-hdfs.png)


## Download

- [MAXOS Darwin x64](https://github.com/wxyyxc1992/ElectronOCR/raw/master/dist/ElectronOCR.zip)

# Usage

建议先本机安装下Tesseract,安装时间较长,请耐心等待:
Recommend installing tesseact manually:

```
brew install imagemagick
brew install tesseract --all-languages
```

然后直接打开应用即可

## Development

### Setup

- use `npm install` or `npm link` to install dependences
- use `npm install -g electron-prebuilt` to enable the global electron

### Develop & Hot-Reloading

- use `npm start` to start webpak hot-middle server
- use `npm run electron-test` to use electron and set env to development

### Package

- use `npm run build`to generate list file for web modules
- use`npm run package-osx` to build and package into dmg

# RoadMap

- Add Support For Shotcut:添加桌面截图功能
- Add Tesseract Installer:优化Tesseract下载
- Optimize the display of text, add markdown/coding support:优化文本显示