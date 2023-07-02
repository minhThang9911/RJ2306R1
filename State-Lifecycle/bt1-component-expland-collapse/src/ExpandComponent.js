import { Component } from "react";

class ExpandComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: false };
    }

    handleClick = () => {
        this.setState((prev) => ({
            isShow: !prev.isShow,
        }));
    };

    render() {
        let btnName = "Xem Giới Thiệu";
        if (this.state.isShow) {
            btnName = "Đóng Giới Thiệu";
        }
        return (
            <>
                <h1>Conditionnal Rendering</h1>
                <input
                    type="button"
                    onClick={this.handleClick}
                    value={btnName}
                />
                {this.state.isShow && (
                    <div>
                        <h4>Giới thiệu</h4>
                        <p>
                            Tên của component phải bắt đầu bằng một chữ cái viết
                            hoa. Component phải bao gồm câu lệnh extends
                            React.Component, câu lệnh này tạo ra sự kế thừa cho
                            React.Component và cấp cho component của bạn quyền
                            truy cập vào các chức năng của React.Component.
                            Class Component yêu cầu phải có phương thức
                            render(), phương thức này sẽ trả về HTML. Đây là ví
                            dụ tương tự như trên, nhưng được tạo bằng cách sử
                            dụng Class Component
                        </p>
                    </div>
                )}
            </>
        );
    }
}
export default ExpandComponent;
