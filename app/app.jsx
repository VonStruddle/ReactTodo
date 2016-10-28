var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var firebase = require("firebase");

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state:', store.getState());
});

store.dispatch(actions.addTodo('Do the dishes'));
store.dispatch(actions.setSearchText('dish'));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation
$(document).foundation();

require('style!css!sass!appStyles');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);