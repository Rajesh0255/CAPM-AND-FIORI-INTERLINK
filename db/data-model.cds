namespace my.bookshop;

entity Books {
  key ID           : UUID;
      author       : String;
      title        : String;
      stock        : Integer;
      books_sold   : Integer;
      published_on : Date;
      phone        : String
}
