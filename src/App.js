import React from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "react-modal";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import "./styles.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const API_KEY = "16982476-4d5cba04b9deee3976600b5b5";
const IMAGES_API = `https://pixabay.com/api/?key=${API_KEY}&per_page=12&`;

class App extends React.Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    isOpenModal: false,
  };

  handleSearch = async (e, input) => {
    if (e) e.preventDefault();
    await this.handlePageNumber(input);
    const query = IMAGES_API + "page=" + this.state.page + "&q=" + input;
    // console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
      .then((j) => j.json())
      .then((d) => {
        console.log(d.hits);
        let prevImages = this.state.page === 1 ? [] : this.state.images;
        this.setState({
          isLoading: false,
          images: [...prevImages, ...d.hits],
          query: input,
        });
      });
  };

  handlePageNumber = async (input) => {
    if (this.state.query === input) {
      await this.setState({
        page: this.state.page + 1,
      });
    }
    if (this.state.query !== input) {
      await this.setState({ page: 1 });
    }
  };

  handleImageClick = (url) => {
    this.setState({
      fullImg: url,
    });
    this.setState({
      isOpenModal: true,
    });
  };

  handleModalClose = () => {
    console.log("ghesrhg");
    this.setState({
      isOpenModal: false,
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.handleSearch} />
        <ImageGallery
          onItemClick={this.handleImageClick}
          images={this.state.images}
        />
        <Button
          isActive={this.state.images.length > 1}
          loadMore={this.handleSearch}
          input={this.state.query}
        />
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={this.state.isLoading}
        />
        <Modal
          isOpen={this.state.isOpenModal}
          onRequestClose={this.handleModalClose}
          style={customStyles}
          contentLabel="Example Modal"
          classname="Modal"
        >
          <img className="" src={this.state.fullImg} alt="Full-size" />
        </Modal>
      </div>
    );
  }
}

export default App;
