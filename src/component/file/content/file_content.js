/**
 * Created by apple on 16/6/3.
 */
import React, {PropTypes, Component} from "react";
require("./file_content.scss");
/**
 * @function 文件内容呈现
 */
export class FileContentComponent extends Component {
    render() {
        return <section className="file-content-container">
            <div className="text" id="file-content-text">
                经过OCR识别处理处的文本会显示在这里嗷
            </div>
        </section>
    }
}