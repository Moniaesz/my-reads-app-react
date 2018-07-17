import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading"/>
                        <BookShelf title="Want to Read"/>
                        <BookShelf title="Read"/>
                    </div>
                </div>

            </div>
        )
    }
}

console.log('booklist');


export default BookList