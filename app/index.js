import React from 'react';
import {render} from 'react-dom';

import AnswerMultipleChoiceQuestion from './AnswerMultipleChoiceQuestion'
import DoodleArea from './DoodleArea'

var choices = [
    {choice: "Answer.1", name:"name", value:1, key: 1, checked: true}, 
    {choice: "Answer.2", name:"name", value:2, key: 2, checked: false}
]
render(<AnswerMultipleChoiceQuestion choices={choices} label="Question.1" id="Q1" />, document.getElementById('radio'));

render(<DoodleArea />, document.getElementById('doodlearea'));
