import React from 'react';
import Input from 'components/input'
import InputWrapper from 'components/inputWrapper'
import Select from 'components/select'
import Options from 'components/options'

export default class TasksForm extends React.Component {
  render() {
    return <form className="formtastic">
        <fieldset className="inputs">
          <ol>
            <InputWrapper name="Name">
              <Input name="Upload"/>
            </InputWrapper>

            <InputWrapper name="Role">
              <Select name="role_id">
                <Options enums={this.props.enums.task_type}></Options>
              </Select>
            </InputWrapper>
          </ol>
        </fieldset>

        <fieldset className="actions">
          <ol>
            <InputWrapper>
              <Input type="submit" name="Search"/>
            </InputWrapper>
          </ol>
        </fieldset>
    </form>
  }
}