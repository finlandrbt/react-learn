import React from 'react';
import {render} from 'react-dom';

import AnswerMultipleChoiceQuestion from './AnswerMultipleChoiceQuestion'

var choices = [
    {choice: "Answer.1", name:"name1", id:1, key: 1, checked: true}, 
    {choice: "Answer.2", name:"name1", id:1, key: 2, checked: false}
]
render(<AnswerMultipleChoiceQuestion choices={choices} label="Question.1" id="Q1" />, document.getElementById('root'));
