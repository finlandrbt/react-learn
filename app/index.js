var React = require('react');
var ReactDom = require('react-dom');
var AnswerMultipleChoiceQuestion = React.createFactory(require('./AnswerMultipleChoiceQuestion'));

var config = {
    "choices":["容易", "一般", "困难"], 
    "value":"A1", 
    "label":"Question 1: React好学吗？", 
    "id":"Q1", 
    "onCompleted": function(value) { console.log(value); }
};

ReactDom.render(
    React.createElement(AnswerMultipleChoiceQuestion, config),
    document.getElementById('radio')
);
