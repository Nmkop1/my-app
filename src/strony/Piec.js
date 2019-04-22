import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import axios from "../axios-orders"
import "../index.scss";
import img1 from "./foto1.jpg";
import paginationFactory from 'react-bootstrap-table2-paginator';
class Piec extends Component {
  state = {
    books: [
      { id: '1', name: 'Book 1' },

    ]
  };



  addBook = () => {
    const lastOneId = this.state.books.length + 1;
    this.setState({
      books: [...this.state.books, {
        id: `${lastOneId}`, name: ""
      }]
    });
  }

  render() {
    const options = {
      // pageStartIndex: 0,
      sizePerPage: 5,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true
    };
    const columns = [
      {
        dataField: 'id',
        text: 'Product ID',
        Cell: row => (
          <div>
            <span title={row.value}>{row.value}</span>
          </div>
        )
      },
      {
        dataField: 'name',
        text: 'Product Name'
      },
      {
        dataField: 'name',
        text: 'Nowy'
      }
    ];

    return (
      <React.Fragment>
        <BootstrapTable
          keyField="id"
          data={this.state.books}
          columns={columns}
          pagination={paginationFactory(options)}
          cellEdit={cellEditFactory({
            mode: 'click',
            blurToSave: true
          })}
        />

        <button className="btn btn-default" onClick={() => this.addBook()}>
          Add a book to the end
        </button>

      </React.Fragment>
    );
  }
}
export default Piec;