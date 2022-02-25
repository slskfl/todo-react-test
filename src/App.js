import { Paper, List, Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends React.Component{

  //2.Todo에 아이템 리스트 넘기기
  constructor(props){
    super(props);
    this.state = {items : [ //배열로 나열하기
      {id : "0", title : "React Test", done : true},
      {id : "1", title : "React List Test", done : false},
    ],
  };
  }

  //AddTodo에서는 App의 items에 접근할 수 없다. 그래서 버튼을 클릭했을 때 리스트를 저장할 수 있도록 App 컴포넌트에 작성한다.
  //AddTodo의 프로퍼티로 넘겨 AddTodo에서 사용할 수 있도록 한다.
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; // key를 위한 id추가
    item.done = false;
    thisItems.push(item);
    this.setState({items : thisItems});
    console.log("items - " , this.state.items);
  }

  delete = (item) =>{
    const thisItems = this.state.items;
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({items : newItems}, () => {
      console.log("delete items : " , this.state.items)
    });
  }

  render(){
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin : 16}}>
        <List>

          {this.state.items.map((item, idx) => (
            <Todo item = {item} key = {item.id} delete = {this.delete} />  
            ))}
        </List>
      </Paper>
    );
    return (
      <div className="App"> 
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}
export default App; // App 컴포넌트를 다른 컴포넌트에서 사용할 수 있다.