import React, { PureComponent } from "react";

class Matches extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: "",
      matchData: [],
      firstHit: false
    };
  }
  yearClick = year => {
    console.log(year);
    this.setState({
      selectedYear: year
    });
    fetch(
      `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`
    )
      .then(res => res.json())
      .then(result => {
        console.log(result.data);
        this.setState({ matchData: result.data });
      })
      .then(console.log(this.state.matchData));
  };
  render() {
    var years = [2014, 2015, 2016, 2017];
    return (
      <React.Fragment>
        <div style={{ float: "left" }}>
          Years
          <ul>
            {years.map((year, idx) => {
              //Faced issue accessing year as I was not using arrow function inside map()
              //Faced issue while passing year in yearClick(year) as I was missing arrow/bind
              return (
                <div
                  onClick={this.yearClick.bind(this, year)}
                  style={{
                    border: "1px solid black",
                    height: "40px",
                    width: "200px"
                  }}
                  key={idx}
                >
                  {year}
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          Total Matches-{this.state.matchData.length}
          {this.state.matchData && this.state.matchData.length > 0 ? (
            <div>
              {this.state.matchData.map((match, idx) => {
                return <fieldset key={idx}>{match.name}</fieldset>;
              })}
            </div>
          ) : (
            <div>No Matches</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Matches;
