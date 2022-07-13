import React, { Fragment } from "react";

function Item({ country, index, setDataEdit, destroyCountry }) {
  return (
    <Fragment>
      <tr>
        <td>{index + 1}</td>
        <td>{country.name}</td>
        <td>{country.code}</td>
        <td>{country.continent}</td>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setDataEdit(country)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => destroyCountry(country.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
}

export default Item;
