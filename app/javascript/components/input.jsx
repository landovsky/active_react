import React from 'react';

export default class Input extends React.Component {
  render() { 
    return <input type={this.props.type} name={this.props.name || this.props.type}></input>
  }
}


{/*<form class="formtastic task" id="new_task" novalidate="novalidate" action="/admin/tasks" accept-charset="UTF-8" method="post">
<input name="utf8" type="hidden" value="&#x2713;" />
<input type="hidden" name="authenticity_token" value="5NV454PodJfeH+78jTXnLu0LeCkQt4blOuz+cZq/HHvPe1Rn7ObooyES94CnPOHBAP1OJOEZQkf4yn2Irx5gUw==" />
<fieldset class="inputs">
  <ol>
    <li class="number input optional numeric stringish" id="task_task_type_input">
  <label for="task_task_type" class="label">Task type</label>
  <input id="task_task_type" step="any" type="number" name="task[task_type]" />
</li>

<li class="string input optional stringish" id="task_title_input">
  <label for="task_title" class="label">Title</label><input id="task_title" type="text" name="task[title]" />
</li>

<li class="string input optional stringish" id="task_comment_input">
  <label for="task_comment" class="label">Comment</label>
  <input id="task_comment" type="text" name="task[comment]" />
</li>

<li class="datetime_select input optional" id="task_due_at_input">

<fieldset class="fragments">
  <legend class="label">
    <label for="task_due_at_1i">Due at</label>
  </legend>

  <ol class="fragments-group">
    <li class="fragment">
      <label for="task_due_at_1i">Year</label>
      <select id="task_due_at_1i" name="task[due_at(1i)]">*/}