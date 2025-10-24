import React from "react";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, boooks, containerClassName }: Props) => {
  return (
    <section>
      <h2 className="font-bebas-neue text-4xl text-light-100">Popular Books</h2>
    </section>
  );
};
export default BookList;
