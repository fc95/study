import React, { Component } from 'react';

function checkStatus(res){
  console.log(res);
  console.log(res.headers.get('Content-Type'));
  console.log(res.headers.get('date'));
  console.log(res.headers.get('content-length'));
  console.log(res.headers.get('x-powered-by'))
if(res.status >= 200 && res.status <400){
  return res;
}else{
  let error = new Error( res.statusText );
  error.response = res ;
  throw error;
}
}

function parseJson(res){
  return res.json();
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={};
    this.addStudent = this.addStudent.bind(this);
    this.searchStudent = this.searchStudent.bind(this);
  }


  componentDidMount(){

  }
  addStudent(){
    console.log('-------------');
    fetch('/student/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ename: 'xiaoyun',
        ephone: '13254678934',
      })
    }).then(checkStatus)
      .then(parseJson)
      .then(data => {
        console.log(data);
      }).catch(e =>{
      console.log('caught error: ' + e);
    })
  }
  searchStudent(){
    console.log('-------------');
    fetch('/student/search?ename=xiaoyun', {
      method: 'GET'
    }).then(checkStatus)
      .then(parseJson)
      .then(data => {
        console.log(data);
      }).catch(e =>{
      console.log('caught error: ' + e);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>

    )

  }
}

