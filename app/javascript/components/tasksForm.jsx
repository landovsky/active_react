import React from 'react';
import Input from 'components/input'
import InputWrapper from 'components/inputWrapper'
import Select from 'components/select'
import Options from 'components/options'

export default class TasksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: ''};
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    console.log('onChange')
    this.setState({title: event.target.value});
  }

  render() {
    const onSubmitHandler = event => {
      this.props.submitForm(`q[title_contains]=${this.state.title}`)
      event.preventDefault();
    }

    return <form onSubmit={ onSubmitHandler }>
        <fieldset className="inputs">
          <ol>
            <InputWrapper name="Title">
              <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
            </InputWrapper>

            <InputWrapper name="Role">
              <Select name="role_id">
                <Options enums={this.props.enums.task_type}></Options>
              </Select>
            </InputWrapper>
          </ol>
          <ol>
            <InputWrapper>
              <input type="submit" name="Search"/>
            </InputWrapper>
          </ol>
        </fieldset>
    </form>
  }
}