import '../App.css';
import { nanoid } from "nanoid";
import { useState } from "react";

export default function BookForm({ add }) {

    function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    add({
      id: nanoid(),
      title: data.get("title"),
      author: data.get("author"),
      publisher: data.get("publisher"),
      publicationYear: data.get("publicationYear"),
      language: data.get("language"),
      pages: data.get("pages"),
      url: data.get("url"),
    });

    e.target.reset();
  }

    return (
        <div className='form-container'>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='title' className="form-label">Title</label>
                    <input
                        type='text'
                        name='title'
                        className='form-input'
                        placeholder='Book title'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='author' className="form-label">Author</label>
                    <input
                        type='text'
                        name='author'
                        className='form-input'
                        placeholder='Name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publisher' className="form-label">Publisher</label>
                    <input
                        type='text'
                        name='publisher'
                        className='form-input'
                        placeholder='Publisher name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publicationYear' className="form-label">Publication Year</label>
                    <input
                        type='text'
                        className='form-input'
                        name='publicationYear'
                        placeholder='Year'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='language' className="form-label">Language</label>
                    <input
                        type='text'
                        name='language'
                        className='form-input'
                        placeholder='Name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pages' className="form-label">Pages</label>
                    <input
                        type='text'
                        name='pages'
                        className='form-input'
                        placeholder='e.g. 235'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='url' className="form-label">URL Address</label>
                    <input
                        type='url'
                        name='url'
                        className='form-input'
                        placeholder=' '
                    />
                </div>
                <div className='button-container'>
                    <button className='saveButton' type='submit'>Save</button>
                </div>
            </form>
        </div>
    );
}

