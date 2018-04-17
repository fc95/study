/**
 * Created by 胡林云 on 2017/9/25.
 */
import React, { Component } from 'react';
import HttpClient from '../common/httpclient'

export default class StudentList extends Component {
  constructor(props){
    super(props);
    this.state = {
      studentList : [],
    };
  }
  componentDidMount(){
    HttpClient.get('/student/list' ,(data)=>{
      console.log(data);
      if(data.flag){
        this.setState({studentList : data.data},()=>{
          console.log('赋值成功');
        });
      }
    } , (e)=>{
      console.log('caught error: ' + e);
    })
    /*fetch('/student/list')
      .then(checkStatus)
      .then(parseJson)
      .then(data => {
        console.log(data);
      }).catch(e =>{
      console.log('caught error: ' + e);
    })*/
  }
  render() {
    return (
      <div className="stu_list_page">
        <h1>学生列表</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  姓名
                </th>
                <th>
                  电话
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.studentList.map((stu, index) => {
                  return  <tr key={index}>
                            <td>{stu.ename}</td>
                            <td>{stu.ephone}</td>
                          </tr>
                })
              }

            </tbody>
          </table>

        </div>
      </div>
    );
  }
}