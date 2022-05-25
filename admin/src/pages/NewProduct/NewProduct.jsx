import { ArrowBackRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./newProduct.css";

const NewProduct = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="newProduct">
      <div className="newProductHeader">
        <IconButton onClick={handleBack}>
          <ArrowBackRounded />
        </IconButton>
        <h1 className="newProductTitle">New Product</h1>
      </div>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
