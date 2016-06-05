/**
 * Created by apple on 16/6/3.
 */
import React, {PropTypes, Component} from "react";
import {Carousel, Button, message} from "antd";
const {clipboard} = window.require('electron');
require("./file_content.scss");
/**
 * @function 文件内容呈现
 */
export class FileContentComponent extends Component {
    render() {
        return <section className="file-content-container">
            <pre className="text" id="file-content-text">
                经过OCR识别处理处的文本会显示在这里嗷
            </pre>
            <div className="operation">
                <Button type="primary"
                        icon="unlock"
                        onClick={()=>{
                        clipboard.writeText(document.querySelector("#file-content-text").innerHTML);
                        }}
                >
                    复制
                </Button>
            </div>
        </section>
    }
}