import React, { Component } from "react";
import "../../App.css";

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.toLowerCase().substr(0, 200) });
  }

  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    var filtered = items.filter(
      item => item.country.toLowerCase().indexOf(this.state.search) !== -1
    );

    if (!isLoaded) {
      return <h3 className="App mt-5">Data Loading...</h3>;
    } else {
      return (
        <div>
          <div className="form-group mt-4 ">
            <input
              type="text"
              class="form-control col-md-6 center"
              placeholder="Type Country Name..."
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>

          <div className="row mx-2 mb-5">
            {filtered.map(item => (
              <div className="col-md-3 my-4" key={item.id}>
                <div
                  className="card bg-dark"
                  data-toggle="modal"
                  data-target={
                    "#" +
                    item.country
                      .split(" ")
                      .join("-")
                      .split(".")
                      .join("-")
                  }
                >
                  <p className="card-title text-center text-white bg-dark text-truncate">
                    {item.country}
                  </p>

                  <img
                    src={item.countryInfo.flag}
                    className="card-img-top country-img"
                    alt="loading"
                  ></img>
                </div>
                {/* start */}
                <div
                  class="modal fade"
                  id={item.country
                    .split(" ")
                    .join("-")
                    .split(".")
                    .join("-")}
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <p class="modal-title" id="exampleModalLabel">
                          Last Update Of {item.country}
                        </p>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body ">
                        <ul class="list-group">
                          <li class="text-info list-group-item d-flex justify-content-between align-items-center">
                            Total Cases
                            <span class="badge badge-dark badge-pill">
                              {item.cases}
                            </span>
                          </li>
                          <li class="text-warning list-group-item d-flex justify-content-between align-items-center">
                            Today Cases
                            <span class="badge badge-dark badge-pill">
                              {item.todayCases}
                            </span>
                          </li>
                          <li class="text-danger list-group-item d-flex justify-content-between align-items-center">
                            Total Deaths
                            <span class="badge badge-dark badge-pill">
                              {item.deaths}
                            </span>
                          </li>
                          <li class="text-danger list-group-item d-flex justify-content-between align-items-center">
                            Today Deaths
                            <span class="badge badge-dark badge-pill">
                              {item.todayDeaths}
                            </span>
                          </li>

                          <li class="text-success list-group-item d-flex justify-content-between align-items-center">
                            Recovered
                            <span class="badge badge-dark badge-pill">
                              {item.recovered}
                            </span>
                          </li>
                          <li class="text-danger list-group-item d-flex justify-content-between align-items-center">
                            Covid-19 Positive
                            <span class="badge badge-dark badge-pill">
                              {item.active}
                            </span>
                          </li>
                          <li class="text-primary list-group-item d-flex justify-content-between align-items-center">
                            Critical Condition
                            <span class="badge badge-dark badge-pill">
                              {item.critical}
                            </span>
                          </li>
                          <li class="text-secondary list-group-item d-flex justify-content-between align-items-center">
                            Cases Per Million
                            <span class="badge badge-dark badge-pill">
                              {item.casesPerOneMillion}
                            </span>
                          </li>
                          <li class="text-secondary list-group-item d-flex justify-content-between align-items-center">
                            Death Per Million
                            <span class="badge badge-dark badge-pill">
                              {item.deathsPerOneMillion}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* end */}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default CountryList;
