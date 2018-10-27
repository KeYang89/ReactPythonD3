import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/data';
import rd3 from 'rd3';

var PieChart = rd3.PieChart;
var pieData1 = [{label: "some_algorithms_1", value: 20.0}, {label: "some_algorithms_2", value: 55.0}, {label: "some_algorithms_3", value: 25.0 },{label: "some_algorithms_4", value: 59.0}];
var pieData2 = [{label: "some_algorithms_3", value: 30.0}, {label: "some_algorithms_4", value: 55.0}, {label: "some_algorithms_5", value: 25.0 }];

var Chart = React.createClass({
  render: function() {
    return  (
        <div>
          <div className="col-md-6">
          <PieChart
          data={pieData1}
          width={450}
          height={400} 
          radius={110}
          innerRadius={20}
          sectorBorderColor="white"
          title="Project 1" />
          </div>
          <div className="col-md-6">
          <PieChart
          data={pieData2}
          width={450}
          height={400} 
          radius={110}
          innerRadius={20}
          sectorBorderColor="white"
          title="Project 2" />
          </div>
      </div>
  )}
});

function mapStateToProps(state) {
    return {
        data: state.data,
        token: state.auth.token,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProtectedView extends React.Component {
    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        const token = this.props.token;
        this.props.fetchProtectedData(token);
    }

    render() {
        return (
            <div>
                {!this.props.loaded
                    ? <h1>Loading data...</h1>
                    :
                    <div>
                        <h2>Welcome back, {this.props.userName}! </h2>
                        <hr />
                         <Chart />
                    </div>
                }
            </div>
        );
    }
}

ProtectedView.propTypes = {
    fetchProtectedData: React.PropTypes.func,
    loaded: React.PropTypes.bool,
    userName: React.PropTypes.string,
    data: React.PropTypes.any,
    token: React.PropTypes.string,
};
