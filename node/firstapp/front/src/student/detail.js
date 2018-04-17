/**
 * Created by 胡林云 on 2017/9/25.
 */
import React, { Component } from 'react';

export default class StudentDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
    this.ws = null;
  }
  componentDidMount() {
    const self = this;
    if(window.WebSocket){
      const ws = new WebSocket('ws://192.168.99.70:8001');
      self.ws = ws;
      ws.onopen = function(e){
        console.log("连接服务器成功");
        ws.send("game2");
      };

      ws.onclose = function(e){
        console.log("服务器关闭");
      };

      ws.onerror = function(){
        console.log("连接出错");
      };

      ws.onmessage = function(e){
        console.log(e);
        self.setState({count : e.data});
      }
    }
  }
  render() {
    return (
      <div className="App">
        详情数量:{ this.state.count }
      </div>
    );
  }
}