import React from 'react';
import Input from 'components/input'
import InputWrapper from 'components/inputWrapper'

export default class Form extends React.Component {
  render() {
    return <form className="formtastic">
        <fieldset className="inputs">
          <ol>
            <InputWrapper name="Name">
              <Input name="Upload"/>
            </InputWrapper>

            <InputWrapper name="Role">
              <select name="role_id">
                <option value=""></option>
                <option value="1">User</option>
                <option value="2">Admin</option>
                <option value="3">Super Admin</option>
              </select>
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