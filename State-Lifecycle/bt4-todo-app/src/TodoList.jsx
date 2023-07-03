import { Component } from "react";

class TodoList extends Component {
    state = {
        work: "",
        workList: [],
    };
    handleInput = (e) => {
        this.setState({ work: e.target.value });
    };
    addWork = (e) => {
        this.setState((pre) => ({ workList: [...pre.workList, pre.work] }));
    };
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    name="work"
                    onChange={this.handleInput}
                />
                <input
                    type="button"
                    value="Add"
                    name="btn-add"
                    onClick={this.addWork}
                />
                <ol>
                    {this.state.workList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default TodoList;
