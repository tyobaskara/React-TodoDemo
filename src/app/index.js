var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.scss');
import {Router, Route, browserHistory, Link} from 'react-router';

//Module requires
var TodoItem = require('./todoitem');
var AddItem = require('./additem');
var About = require('./about');

var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
});

//Create component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )
        }.bind(this));
        return (
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p>The busies people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, // render

    //onDelete
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            console.log(item, val);
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });

    },

    //onAdd
    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
        document.getElementById
    },

    //lifecycle function
    componentWillMount: function(){
        console.log('componentWillMount');
    },
    componentDidMount: function(){
        console.log('componentDidMount');
    },
    componentWillUpdate: function(){
        console.log('componentWillUpdate');
    }
});


//put component into html page
ReactDOM.render(<App />, document.getElementById('app-wrapper'));