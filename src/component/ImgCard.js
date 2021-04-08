import React from "react";

class ImgCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = { spans: 0 };
  }
  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imgRef.current.clientHeight;
    console.log(height);

    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imgRef}
          alt={this.props.img.desc}
          src={this.props.img.urls.regular}
        />
      </div>
    );
  }
}
export default ImgCard;
