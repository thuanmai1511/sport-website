import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import '../css/Radio.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' ;

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  return (
    <div className="RadioProducts">
    <Link to={"/products/type=fg" }>
        <Radio
            checked={selectedValue === 'fg'}
            onChange={handleChange}
            value="fg"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'A' }}
        />
      </Link>
      FG (Firm Ground) 
      <Link to={"/products/type=tf" }>
      <Radio
        checked={selectedValue === 'tf'}
        onChange={handleChange}
        value="tf"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      </Link>
      TF (Turf)
      <Link to={"/products/type=ic" }>
      <GreenRadio
        checked={selectedValue === 'ic'}
        onChange={handleChange}
        value="ic"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
      </Link>
       IC (Indoor)
      <Link to={"/products/type=accessories" }>
      <Radio
        checked={selectedValue === 'accessories'}
        onChange={handleChange}
        value="accessories"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
        size="small"
      />
      </Link>
      Gloves
    </div>
  );
}
