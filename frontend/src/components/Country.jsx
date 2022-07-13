import React, { Fragment } from "react";
import Form from "./Form";
import List from "./List";
import {
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry,
} from "./Server";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
function Country() {
  const [countries, setCountries] = React.useState([]);
  const [dataEdit, setDataEdit] = React.useState(null);
  // todo: list of countries
  const allCountries = async () => {
    try {
      const response = await getCountries();
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // todo: post new country
  const postCountry = async (country) => {
    try {
      const response = await createCountry(country);
      toast.success(response.data, {
        theme: "colored",
      });
      // console.log(response);
      allCountries();
    } catch (error) {
      console.log(error.data);
    }
  };

  // todo: update country
  const putCountry = async (country) => {
    try {
      const response = await updateCountry(country);
      toast.success(response.data, {
        theme: "colored",
      });
      // console.log(response);
      allCountries();
    } catch (error) {
      console.log(error.data);
    }
  };

  // todo: delete country
  const destroyCountry = (id) => {
    Swal.fire({
      title: "Do you want to delete the selected record?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Remove",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Removed!", "", "success");
        destroyCountryId(id);
      } else if (result.isDenied) {
        Swal.fire("The changes were not executed", "", "info");
      }
    });
  };
  const destroyCountryId = async (id) => {
    try {
      await deleteCountry(id);
      allCountries();
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    allCountries();
  }, []);
  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />

      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Form Countries</h5>
            <Form
              postCountry={postCountry}
              dataEdit={dataEdit}
              setDataEdit={setDataEdit}
              putCountry={putCountry}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">List Countries</h5>
            <List
              countries={countries}
              destroyCountry={destroyCountry}
              setDataEdit={setDataEdit}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Country;
