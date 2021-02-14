import React, { Component } from 'react'
import Task from './Task'

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list: [],
             value: '',
        }
        this.UpdateInput = this.UpdateInput.bind(this)
        this.UpdateList = this.UpdateList.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    UpdateList(event){
        const val = this.state.value;
        this.setState({list:[...this.state.list,val],value:''});
    }

    UpdateInput(event){
        //console.log(event.target.value);
        const arr = this.state.list;
        this.setState({list:arr,value:event.target.value});
    }

    deleteTask(index){
        const arr = this.state.list;
        const val = this.state.val;
        arr.splice(index,1);
        this.setState({list:arr, value:val});
        console.log('deleteItem', index);
    }
    
    render() {
        let tasks = this.state.list.map((item,index) => <Task key = {index} num = {index} desc = {item} deleteItem = {this.deleteTask}/>);
        return (
            <div>
                <div>
                {tasks}
                </div>
                <input type='text' onChange = {this.UpdateInput}/>
                <button onClick = {this.UpdateList}>Add</button>          
            </div>
        )
    }
}

export default Main

