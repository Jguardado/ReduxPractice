export function selectBook(book) {
  //Selectbook is an action creator that needs to return an action
  //and object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
