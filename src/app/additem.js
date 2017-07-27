var React = require('react');
require('./css/additem.scss')

var AddItem = React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Some.." required ref="newItem"/>
                <input type="submit" value="Add" />
            </form>
        )
    },

    handleSubmit: function(e){
        e.preventDefault();
        console.log(this.refs.newItem.value);
        var value = this.refs.newItem.value;
        this.props.onAdd(value);

        this.refs.newItem.value = '';

    }
});

module.exports = AddItem;