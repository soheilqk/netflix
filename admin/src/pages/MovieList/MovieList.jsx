import "./movieList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/MovieContext/apiCalls";
import React from "react";

const ProductList = () => {
  const [pageSize, setPageSize] = useState(10);
  const { movies, dispatch } = useContext(MovieContext);

  const handlePageSizeChange = (newSize) => setPageSize(newSize);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "Movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },

    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/movie/" + params.row._id, movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productsTitleContainer">
        <h1 className="productsTitle">Products List</h1>
        <Link to="/movies/new">
          <button className="productsAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default ProductList;
