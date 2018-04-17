/**
 * Created by 胡林云 on 2017/9/25.
 */
import React from 'react';
import { Route ,IndexRoute } from "react-router";
import App from '../App'
import HomePage from '../home/index'
import StudentManage from '../student/index'
import StudentList from '../student/list'
import StudentDetail from '../student/detail'

const routes = <Route path="/" component={App}>
  {/* 当 url 为/时渲染 Dashboard */}
  <IndexRoute component={HomePage} />
  <Route path="/stulist" component={StudentManage}>
    <IndexRoute component={StudentList} />
    <Route path="/detail" component={StudentDetail} />
  </Route>
</Route> ;
export default routes ;

/*ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/download" component={DownLoad} />
      <Route path="/studyhall" component={StudyHall}>
        <IndexRoute component={AdaptiveLearn}/>
        <Route path="/learnSystem" component={LearnSystem} />
      </Route>
      <Route path="/schoolstyle" component={AboutUs} >
        <IndexRoute component={SchoolStyle} />
        <Route path="/newsmedia" component={NewsContainer} >
          <IndexRoute component={NewsMedia}/>
          <Route path="/newsdetail/:id" component={NewsDetail} />
        </Route>
        <Route path="/schoolnetwork" component={SchoolNetwork} />
        <Route path="/linkus" component={LinkUs} />
      </Route>
      <Route path="/league" component={League} />
      <Route path="/login" component={FrontLogin}/>
      <Route path="/back" component={Login}/>
    </Route>
  </Router>),
  document.getElementById('app'));*/

/*
export default [
  {
    path: '/',
    component: App,
    indexRoute:{ component: HomePage },
    childRoutes: [
      { path: 'home', component: HomePage },
      {
        path: 'list',
        component: StudentList,
        childRoutes: [
          { path: 'detail', component: HomePage },
        ]
      }
    ]
  },
  /!*{
    path: '/list',
    component: StudentList,
    indexRoute:{ component: StudentList },
    childRoutes: [
      { path: 'detail', component: StudentDetail },
    ]
  }*!/
]*/
