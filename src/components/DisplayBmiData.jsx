import React, { Component } from 'react';
import { getBmiData } from "../modules/bmiData";


class DisplayBmiData extends Component {
  state = {
    bmiData: null
  }

  componentDidMount() {
    this.getBmiData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex != prevProps.updateIndex) {
      this.getBmiData()
    }
  }

  async getBmiData() {
    let result = await getBmiData();
    this.setState({bmiData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.state.bmiData != null) {
      dataIndex = (
        <div id="index">
          {this.state.bmiData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }

    return (
      <div>
        {dataIndex}
      </div>
    )
  }      
}

export default DisplayBmiData;