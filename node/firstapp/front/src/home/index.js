/**
 * Created by 胡林云 on 2017/9/25.
 */
import React, { Component } from 'react';
import './index.css'
export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      count: 0,
      isShown: false,
      goodList: [
        {id: 100000001},
        {id: 100000002},
        {id: 100000003},
        {id: 100000004},
        {id: 100000005},
        {id: 100000006},
        {id: 100000007},
        {id: 100000008},
        {id: 100000009},
        {id: 1000000010},
      ]
    };
    this.ws = null;
    this.timmer = null;
  }
  componentDidMount() {
    const self = this;
    if(window.WebSocket){
      const ws = new WebSocket('ws://192.168.99.70:8001/?pid=kendeji20171025&did=0001');
      self.ws = ws;
      ws.onopen = function(e){
        console.log("连接服务器成功");
        //ws.send("欢迎" + parseInt(Math.random() * 100000) + "同学订餐");
      };

      ws.onclose = function(e){
        console.log("服务器关闭");
      };

      ws.onerror = function(){
        console.log("连接出错");
      };

      ws.onmessage = function(e){
        try{
          const goodListBoard = JSON.parse(e.data);
          const goodList = self.state.goodList;
          // console.log(goodListBoard);
          goodList.map( v => {
            for(let j = 0,len = goodListBoard.length; j<len; j++){
              if(v.id === goodListBoard[j].id ){
                v.count = goodListBoard[j].count;
                break;
              }
            }
            return v;
          });
          self.setState({goodList: goodList});
        }catch(e1){
          self.setState({message: e.data , isShown: true});
          clearTimeout(self.timmer);
          self.timmer = setTimeout(() => {
            self.setState({isShown: false});
          }, 500);
          console.log(new Error(e1));
        }
      }
    }
  }
  changeCount(i, flag) {
    const goodList = this.state.goodList,
      good = goodList[i];
    const ws = this.ws;
    if(flag){
      if(good.count > 0){
        good.count += 1;
      }else{
        good.count = 1;
      }
    }else{
      good.count -= 1;
    }
    if(ws){
      ws.send(JSON.stringify(good));
    }
    this.setState({goodList : goodList});
  }
  render() {
    const self = this ,
      state = self.state;
    return (
      <div className="home_page_container">
        <h1 className="title">XIAOYADIANCAN</h1>
        <h3 className="sub_title">
          欢迎点餐
        </h3>
        <ul className="goodList">
          {
            state.goodList.map((v,i) => {
              return <li key={i}>
                <span>{v.id}</span>
                <div className="cart_control">
                  {
                    v.count > 0 ?
                      <button onClick={this.changeCount.bind(this, i, false)}>
                        -
                      </button> : null
                  }
                  {
                    v.count > 0 ?
                      <span className="count">
                      { v.count }
                    </span> : null
                  }
                  <button onClick={this.changeCount.bind(this, i, true)}>
                    +
                  </button>
                </div>
              </li>
            })
          }
        </ul>
        <div className={`${state.isShown ? '' : 'hidden'} message`}>
          { state.message }
        </div>
      </div>
    );
  }
}