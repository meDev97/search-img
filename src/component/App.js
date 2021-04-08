import React from "react";
import unsplash from "../api/unsplash";
import ImgList from "./ImgList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <ImgList images={this.state.images} />
      </div>
    );
  }
}
export default App;
