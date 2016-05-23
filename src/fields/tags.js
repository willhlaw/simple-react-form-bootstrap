import React from 'react';
// import TextField from 'material-ui/TextField';
import {FieldType, registerType} from 'simple-react-form';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import TagsInput from 'react-tagsinput';

const propTypes = {};

const defaultProps = {};

class TagsFieldComponent extends FieldType {

  constructor(props) {
    super(props);
    this.type = props.type || 'text';
    this.state = { value: props.value || [] };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  onChange(tags) {
    this.setState({ value: tags });
    this.props.onChange(tags);
  }

  render() {
    return (
      <FormGroup
        validationState={this.props.errorMessage ? 'error' : undefined}
      >
        <ControlLabel>{this.props.label}</ControlLabel>
        <TagsInput
          ref='input'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          {...this.passProps}
        />
        {this.props.errorMessage &&
          <HelpBlock>Help text with validation state.</HelpBlock>
        }
      </FormGroup>
    );
  }
}

TagsFieldComponent.propTypes = propTypes;
TagsFieldComponent.defaultProps = defaultProps;

registerType({
  type: 'string-array',
  component: TagsFieldComponent,
});
registerType({
  type: 'tags',
  component: TagsFieldComponent,
});