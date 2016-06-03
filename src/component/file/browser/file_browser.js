/**
 * Created by apple on 16/6/3.
 */
import React, {PropTypes, Component} from "react";
import {FileSystemService} from "../../../service/file_system/file_system";
import {Carousel, Button, message} from "antd";
import {OCRService} from "../../../service/ocr/ocr";
var Slider = require('react-slick');
const fileSystemService = new FileSystemService();
const ocrService = new OCRService();
require("./file_browser.scss");
export class FileBrowserComponent extends Component {

    /**
     * @function 构造函数
     */
    constructor(props) {
        super(props);

        this.state = {
            imageFiles: ["http://o6v08w541.bkt.clouddn.com/665689B4-48D6-4CB8-ACFD-19D1F75236E0.png"],
            current: 0,//当前的图片
            processing: false
        };

        this._handleOpenFileClick = this._handleOpenFileClick.bind(this);

        this._handleOCRClick = this._handleOCRClick.bind(this);
    }

    /**
     * @function 默认渲染函数
     * @returns {XML}
     */

    _handleOpenFileClick() {

        fileSystemService.openImageFiles().then(
            (imageFiles)=> {

                this.setState({imageFiles: imageFiles});

            }
        ).catch();
    }

    /**
     * @function 处理OCR的点击事件
     * @private
     */
    _handleOCRClick() {


        //设置正在处理
        this.setState({processing: true});

        let currentImageSrc = this.state.imageFiles[this.state.current];

        ocrService.imageRecognize(currentImageSrc).then((text)=> {

            console.log(text);

            //为了方便,暂时先使用这个全局查询哈
            let ele = document.querySelector("#file-content-text");

            ele.innerHTML = text;
            this.setState({processing: false});


        }).catch(()=> {
            message.error('请不要使用默认的网络图片或者确保已经安装好了Tesseract!');
            this.setState({processing: false});

        });

    }

    _renderImageFiles() {

        var result = [];

        this.state.imageFiles.forEach((imageFile, index)=> {

            result.push(
                <div className="image-item" style={{
                    backgroundImage:`url(${imageFile})`
                }}>
                </div>
            );
        });

        return result;
    }

    render() {

        return (
            <section className="file_browser_container">
                <div className="file-operation">
                    <Button type="primary"
                            icon="search"
                            onClick={this._handleOpenFileClick}
                            disabled={this.state.processing}
                    >打开文件</Button>
                </div>

                <Carousel afterChange={(current)=>{
                    this.setState({current});
                }}>
                    {this._renderImageFiles()}
                </Carousel>

                <section className="image-operation">
                    <Button type="primary"
                            icon="unlock"
                            onClick={this._handleOCRClick}
                            loading={this.state.processing}
                    >
                        OCR识别
                    </Button>
                </section>
            </section>
        );
    }


}
