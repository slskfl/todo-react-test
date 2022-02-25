import React from "react";
import{ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core"
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class Todo extends React.Component{

    //App.js에서 받은 item 매개변수 넘기기
    constructor(props){
        super(props); //super를 이용하여 props 오브젝트 초기화 
        this.state = {item : props.item}; //state변수를 item 변수와 props.item으로 초기화한다.
        this.delete = props.delete;
    }

    deleteEventHandeler = () => {
        this.delete(this.state.item);
    }

    //meterial ui 적용
    render(){
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox defaultChecked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label" : "naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        defaultValue={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="Default Todo"
                        onClick={this.deleteEventHandeler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}
 
export default Todo; 