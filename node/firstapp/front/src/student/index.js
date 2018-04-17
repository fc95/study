/**
 * Created by 胡林云 on 2017/9/25.
 */
import React, { Component } from 'react';

export default class StudentManage extends Component {
  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    );
  }
}
