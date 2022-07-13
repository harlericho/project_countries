import React, { Fragment } from "react";
import Item from "./Item";

function List({ countries, destroyCountry, setDataEdit }) {
  return (
    <Fragment>
      <div className="table table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th itemScope="col">#</th>
              <th itemScope="col">Name</th>
              <th itemScope="col">Code</th>
              <th itemScope="col">Continent</th>
              <th itemScope="col" colSpan={2}>
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {!countries ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              countries.map((country, index) => (
                <Item
                  key={index}
                  index={index}
                  country={country}
                  setDataEdit={setDataEdit}
                  destroyCountry={destroyCountry}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default List;
