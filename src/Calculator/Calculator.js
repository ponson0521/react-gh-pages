import React from 'react';
// 攝氏溫標與華氏溫標轉換，練習提升State https://zh-hant.reactjs.org/docs/lifting-state-up.html


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

// 當傳入的攝氏溫度過百顯示水沸騰
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// 轉換華氏到攝氏
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
// 轉換攝氏到華氏
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// 當temperature輸入不是數字時，回傳空字串，否則將轉換後的溫度以字串回傳
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// Input溫度，實時擷取溫度值
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  // 處理攝氏溫度改變時，設定華氏溫度
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
  // 處理華氏溫度改變時，設定攝氏溫度
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}


// ========================================
export default Calculator;