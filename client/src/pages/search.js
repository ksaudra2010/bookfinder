import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})
  

  // Searches all books and sets them to books
  function searchBooks(event) {
      event.preventDefault()
    API.searchBooks(formObject.title)
      .then(res => {
        setBooks(res.data.items)
        console.log(res.data.items)}
      )
      .catch(err => console.log(err));
  };
function inputChange(event){
    var input = event.target;
    setFormObject({
        [input.name]: input.value
    })
    console.log(input.value)
}  
function saveBooks(book){
    var bookInfo = {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        synopsis: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
    }
    API.saveBook(bookInfo)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err));
}

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={inputChange}
                name="title"
                placeholder="Title (required)"
              />
             
              <FormBtn
                disabled={!(formObject.title)}
                onClick={searchBooks}
              >
                Search for Books
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12">
              <div>
                {books.map(book => (
                    <div>
                        <img src = {book.volumeInfo.imageLinks.thumbnail} /> 
                        <p>
                            {book.volumeInfo.title}
                        </p>
                        <button onClick = {()=>{saveBooks(book)}}>Save Book</button> 
                    </div>  
                ))}
              </div>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;