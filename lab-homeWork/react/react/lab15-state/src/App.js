import React from 'react';

//a set state functional to be re-used in multiple components later
const increaseScore = (state, props) => {
  return { counter: state.counter++ };
}

class App extends React.Component {
  state = {
    counter: 99,
    name: 'Oak',
    i: 0,
    showChangeNameButton: true,
    peopleArr: [
      { firstName: 'Krissada', lastName: 'Chalermsook' },
      { firstName: 'Jonathan', lastName: 'Joestar' },
      { firstName: 'Dio', lastName: 'Brando' }
    ]
  }

  myInputFirstNameRef = React.createRef();
  myInputLastNameRef = React.createRef();

  handleDecreaseScore = (e) => {
    //anonymous set state functional
    this.setState((state, props) => {
      return { counter: state.counter-- };
    });
  }
  handleIncreaseScore = (e) => {
    //use existing set state functional
    this.setState(increaseScore);
  }
  handleChangeName = (e) => {
    this.setState((state, props) => {
      return { name: "Krissada" };
    });
    this.setState((state, props) => {
      return { showChangeNameButton: false };
    });
  }
  handleRotatePeople = (e) => {
    this.setState((state, props) => {
      return { i: state.i === state.peopleArr.length ? 0 : state.i++ };
    });
  }
  handleAddPeople = (e) => {
    this.setState((state, props) => {
      return {
        peopleArr: [...state.peopleArr, {
          firstName: this.myInputFirstNameRef.current.value,
          lastName: this.myInputLastNameRef.current.value
        }
        ]
      };
    })
    alert('Added!');
  }

  render() {
    return (
      <>
        <div>
          <ol>
            <li>(ทำพร้อมๆ กัน) ทำ counter </li>
            <li>ทำปุ่ม Decrease ซึ่งจะ ลบ 1 ออกจาก counter </li>
            <li>ให้ลองสร้าง ปุ่มขึ้นมาเพื่อรับ function ในการเปลี่ยนแปลง state เล่น เช่น มี state ชื่อ name พอกดปุ่มแล้วจะเปลี่ยนชื่อจาก Oak เป็น Krissada</li>
            <li>จากนั้นให้เขียน event onClick เพื่อ รัน function สำหรับเปลี่ยนค่า state</li>
            <li>ทำการเปลี่ยนแปลงชื่อ ที่กำหนดขึ้นมา</li>
            <li>เมื่อคลิกต้องแสดงผลการเปลี่ยนชื่อได้</li>
            <li>
              เปลี่ยน array ของ String ที่จะวน loop ให้กลายเป็น array ของ object ของคน ที่มี firstName กับ lastName แล้วก็ วน loop แสดงผลออกมา
	              {'{firstName : “Krissada” , lastName : “Chalermsook”}'}
            </li>
            <li>ทำ TextBox FirstNAme กับ LastName และปุ่ม Add People เพื่อให้กรอก First Name และ LAst Name เข้าไปแล้วเพิ่ม people เพื่อแสดงผลได้ถูกต้อง </li>
            <li>(Optional) เล่นอะไรก็ได้ กับ checkbox, radioButton, dropdownList </li>
          </ol>
        </div>
        <hr />
        <div>
          <fieldset>
            <legend>Increase / Decrease the counter:</legend>
            <div>{this.state.counter}</div>
            <button onClick={this.handleIncreaseScore}>Increase</button>
            <button onClick={this.handleDecreaseScore}>Decrease</button>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Change to Krissada:</legend>
            <div>{this.state.name}</div>
            <button onClick={this.handleChangeName} disabled={!this.state.showChangeNameButton}>Change</button>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Rotate people:</legend>
            <div>{this.state.peopleArr[this.state.i].firstName} {this.state.peopleArr[this.state.i].lastName}</div>
            <button onClick={this.handleRotatePeople}>Rotate</button>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Add more people:</legend>
            <label for="addFirstName">First name:</label>
            <input type="text" id="addFirstName" placeholder="Joseph" defaultValue="Jotaro" ref={this.myInputFirstNameRef} />
            <label for="addLastName">Last name:</label>
            <input type="text" id="addLastName" placeholder="Joestar" defaultValue="Joestar" ref={this.myInputLastNameRef} />
            <br />
            <button onClick={this.handleAddPeople}>Add</button>
          </fieldset>
        </div>
      </>
    );
  }
}

export default App;
