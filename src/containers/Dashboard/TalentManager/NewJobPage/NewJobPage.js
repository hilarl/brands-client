import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

class NewJobPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear());
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear());
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: true,
      disableYearSelection: true,
    };
    this.handleChangeMinDate = this.handleChangeMinDate.bind(this);
    this.handleChangeMaxDate = this.handleChangeMaxDate.bind(this);
  }

  handleChange (event, index, value) {this.setState({value})};

  handleChangeMinDate (event, date) {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate (event, date) {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle (event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  };

    render() {
      return (
        <div className="container">
          <form>
            <div className="row">
              <div style={{textAlign: "right"}} className="col-md-3">
                Job Title
              </div>
              <div className="col-md-6">
              <TextField
                hintText="Hint Text"
                underlineShow={false}
                fullWidth={true}
              />
              <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                Description
              </div>
              <div className="col-md-6">
              <TextField
                hintText="You can always change this"
                underlineShow={false}
                fullWidth={true}
                multiLine={true}
                rows={2}
              />
              <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                Job Type
              </div>
              <div className="col-md-6">
                <SelectField
                  value={this.state.value}
                  onChange={this.handleChange}
                  autoWidth={true}
                  style={{border: "none"}}
                >
                  <MenuItem value={1} primaryText="Auto width" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
                <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                Location
              </div>
              <div className="col-md-6">
                <AutoComplete
                  hintText="Hint Text"
                  filter={AutoComplete.fuzzyFilter}
                  dataSource={fruit}
                  maxSearchResults={5}
                  underlineShow={false}
                />
                <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                Remote option?
              </div>
              <div className="col-md-6">
                <Toggle
                  defaultToggled={false}
                />
                <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                Willing to sponsor visa?
              </div>
              <div className="col-md-6">
                <Toggle
                  defaultToggled={false}
                />
                <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                Post Date
              </div>
              <div className="col-md-6">
              <DatePicker
                  onChange={this.handleChangeMinDate}
                  autoOk={this.state.autoOk}
                  defaultDate={this.state.minDate}
                  disableYearSelection={this.state.disableYearSelection}
                />
                <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                Expire Date
              </div>
              <div className="col-md-6">
                <DatePicker
                  onChange={this.handleChangeMaxDate}
                  autoOk={this.state.autoOk}
                  defaultDate={this.state.maxDate}
                  disableYearSelection={this.state.disableYearSelection}
                />
                <Divider />
              </div>
            </div>
          </form>
        </div>
      );
    }
}

export default NewJobPage;
