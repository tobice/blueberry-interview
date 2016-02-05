import React, { Component, PropTypes } from 'react'
import Slider from 'material-ui/lib/slider';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import range from '../misc/range'

const Configurator = (props) => {
  const {title, min, max, step, value, selectValue} = props;
  return (
    <div>
      <div>
        <SelectField value={value} onChange={(event, index, value) => selectValue(value)} floatingLabelText={title}>
          {range(min, max, step).map(i =>
            <MenuItem value={i} primaryText={i} key={i} />
          )}
        </SelectField>
      </div>
      <Slider {...props} onChange={(event, value) => selectValue(value)} />
    </div>
  )
};

Configurator.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  selectValue: PropTypes.func.isRequired
};

export default Configurator;
