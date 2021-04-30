import { Component } from "react";
import CommentForm from "./commentFrom.jsx";
import { Card, Container } from "react-bootstrap";
class MovieComments extends Component {
  state = {
    selected: false,
    comments: [],
    movieId: "",
  };

  comment = async (Id) => {
    let endpoint =
      "https://striveschool-api.herokuapp.com/api/comments/ " + `${Id}`;
    try {
      let movieComments = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTk3MDQxNDYsImV4cCI6MTYyMDkxMzc0Nn0.kn5IJ6NrB0ParFoZTMbCv9U3bonQxfjR4MZZsjR9KzY",
        },
      });
      let temp = await movieComments.json();
      this.setState({ comments: temp });
      this.setState({ movieId: Id });
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  componentDidMount() {
    this.comment();
  }

  render() {
    return (
      <>
        {this.state.selected === true ? (
          <CommentForm
            setValue={this.state.selected}
            comment={this.state.comments}
            movieSelected={this.state.movieId}
          />
        ) : (
          <></>
        )}
        <Card
          className="h-100 my-4 "
          style={{ width: "18rem" }}
          onClick={(e) => this.comment(e.target.id)}
        >
          <Card.Img
            className="cardImages"
            variant="top"
            src="https://www.webdesignerdepot.com/cdn-origin/uploads/2011/02/hangover.jpg"
          />
          <Card.Body>
            <Card.Title className="titleWrap">This is the title</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default MovieComments;
