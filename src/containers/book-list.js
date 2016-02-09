import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
          </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //whatever gets returned from here shows up as props in booklist
  return {
    books: state.books,
  };
}

//Anything returned from this function will end up as props on container
function mapDispatchToProps(dispatch) {
  //whenever selectbook is called teh result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote Booklist from a Componenet to a Container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
