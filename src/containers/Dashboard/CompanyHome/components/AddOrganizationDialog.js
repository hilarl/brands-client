import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  customWidth: {
    width: 150,
    value: 1
  },
  button: {
    marginTop: 30,
    height: 50,
    marginLeft: 0,
    width: "100%",
    color: "#9CA4A9"
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  formFieldContainer: {
    padding: "15px 0"
  },
  formSelectFieldContainer: {
    padding: "15px 0",
    paddingTop: "40px"
  }
};

class AddOrganizationDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      file: '',
      imagePreviewUrl: '',
      dataSource: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleChange (event, index, value) {
    this.setState({value})
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleUpdateInput (value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {

    let {imagePreviewUrl} = this.state;
    let {file} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{width: "100%"}} src={imagePreviewUrl} />);
    }

    return (
      <div>
        <Dialog
        titleStyle={{textAlign: "center", fontSize: "20px", letterSpacing: "0.5px", textTransform: "capitalize", fontWeight: "500", color: "#464F55"}}
        {...this.props}
        modal={false}>
          <div className="col-md-8 col-md-offset-2">
            <div style={styles.formFieldContainer}>
              <TextField
                style={{marginTop: "20px", fontWeight: "100", letterSpacing: "0.5px"}}
                underlineShow={false}
                hintText="Organization Name"
                fullWidth={true} />
            </div>
            <Divider />
            <div style={styles.formSelectFieldContainer}>
              <SelectField
                style={{fontWeight: "100", letterSpacing: "0.5px"}}
                hintText="Type"
                value={this.state.value}
                onChange={this.handleChange}
                autoWidth={true} >
                <MenuItem style={{fontWeight: "100", letterSpacing: "0.5px"}} value={1} primaryText="Private" />
                <MenuItem style={{fontWeight: "100", letterSpacing: "0.5px"}} value={2} primaryText="Public" />
                <MenuItem style={{fontWeight: "100", letterSpacing: "0.5px"}} value={3} primaryText="Non profit" />
              </SelectField>
            </div>
            <div style={styles.formFieldContainer}>
              <AutoComplete
                style={{fontWeight: "100", letterSpacing: "0.5px"}}
                underlineShow={false}
                hintText="Location"
                fullWidth={true}
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
              />
            </div>
            <Divider />
            <FlatButton
              backgroundColor="#e5e5e5"
              label="Choose Logo Image"
              labelPosition="before"
              style={styles.button} >
              <input type="file" style={styles.exampleImageInput} onChange={this.handleImageChange} />
            </FlatButton>
            {$imagePreview}
          </div>
        </Dialog>
      </div>
    );
  }
}

export default AddOrganizationDialog;
