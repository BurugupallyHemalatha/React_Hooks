import React, { Component } from 'react';
import '../style.css';
import ListDataLi from './ListDataLi';
import AddList from './AddList'

class ListData extends React.Component {
  constructor() {
    super();
    this.state = {
      myDetails: [
        { name: "Ram", age: 20 },
        { name: "Ravi", age: 21 },
        { name: "Rao", age: 22 }
      ],
      errors: {},
      showFormSuccess: false,
      addListToggle: false
    }
    this.onAddList = this.onAddList.bind(this);
  }

  //Delete list
  deleteItem = (listIndex) => {
    const myList = this.state.myDetails;
    myList.splice(listIndex, 1);
    this.setState({
      myDetails: myList
    });
  }

  //AddListBtn
  AddListBtn = () => {
    this.setState({
      addListToggle: true
    })
  }

  validateForm(name) {
    let errors = {};
    let formIsValid = true;

    //Name
    if (name == "") {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }

    //Age
    if (age == "") {
      formIsValid = false;
      errors["age"] = "*Please enter your age.";
    }

    if (typeof age !== "undefined") {
      if (!age.match(/^\d+/)) {
        formIsValid = false;
        errors["age"] = "*Please enter Numbers only.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  onAddList(name, age) {
    const myDetails = this.state.myDetails;
    //asd
    //let myDetails = {};
    let errors = {};
    let formIsValid = true;

    //alert(name)
    //Name
    if (name == "" || name == undefined) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (name != undefined) {
      if (!name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }

    //Age
    if (age == "" || age == undefined) {
      formIsValid = false;
      errors["age"] = "*Please enter your age.";
    }

    if (age != undefined) {
      if (!age.match(/^\d+/)) {
        formIsValid = false;
        errors["age"] = "*Please enter Numbers only.";
      }
    }

    this.setState({
      errors: errors
    });
    //alert(formIsValid)
    if (formIsValid) {
      myDetails.push({
        name,
        age
      })
      this.setState({
        myDetails: myDetails,
        showFormSuccess: true
      });
      this.state.myDetails.name = "";
      setTimeout(() => {
        this.setState({
          showFormSuccess: false,
          addListToggle: false
        });
      }, 5000)
    }
  }

  render() {
    return (
      
        <div className="listdata">
            <div className="list_heading">
              <h1>List Data</h1>
              <div className="add_btn">
                <button onClick={this.AddListBtn} className="btn medium">ADD</button>
              </div>
              <div className="clear"></div>
            </div>
            {
              this.state.addListToggle ?
                <AddList
                  onAdd={this.onAddList}
                  errorsName={this.state.errors.name}
                  errorsAge={this.state.errors.age}
                  showFormSuccess1={this.state.showFormSuccess}
                /> :
                null
            }
            <div className="listdata-list">
              <ul>
                {this.state.myDetails.map((list, index) => {
                  return <ListDataLi click={() => this.deleteItem(index)} name={list.name} age={list.age} key={index} />
                })}
              </ul>
            </div>
        </div>
      
    );
  }
}

export default ListData;
