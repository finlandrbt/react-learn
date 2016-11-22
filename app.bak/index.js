var React = require('react');
var ReactDom = require('react-dom');
var AnswerMultipleChoiceQuestion = React.createFactory(require('./AnswerMultipleChoiceQuestion'));
var MyForm = React.createFactory(require('./MyForm'));

var config = {
    "choices":["容易", "一般", "困难"], 
    "value":"容易", 
    "label":"Question 1: React好学吗？", 
    "id":"Q1", 
    "onCompleted":function(value) {}
};

ReactDom.render(
    React.createElement(AnswerMultipleChoiceQuestion, config),
    document.getElementById('radio')
);

ReactDom.render(
    React.createElement(MyForm, {}),
    document.getElementById('form')
);
