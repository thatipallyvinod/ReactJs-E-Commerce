import { useState } from "react";
import axios from 'axios';
function ProductList() { 
    
    const [deptsArray, setDeptsArray ] = useState([]); 
    
    // For reading data from user through textboxes
    const [id, setId] = useState("");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [productImage, setProductImage] = useState("");

    function getDeptsClick()
    {     
        let url = "http://localhost:3100/products"; 
        axios.get(url).then( (resData) => 
        {
            setDeptsArray(resData.data);
        });       
    }

    function addDeptClick()
    {
        let deptObj = {};
        deptObj.id = id;
        deptObj.productName = productName;
        deptObj.category = category;
        deptObj.description = description;
        deptObj.unitPrice = unitPrice;
        deptObj.productImage = productImage;

        let url= "http://localhost:3100/products";
        axios.post(url,  deptObj ).then( (resData) => 
        { 
			 // logic 
             alert("New Detp details are inserted in server");
             getDeptsClick();
        });

        clearFields();
    }


    function deleteDeptClick(id)
    { 
        let flag =  window.confirm("Do you want to delete?");

        if(flag === false)
        {
            return;
        }

        let url= "http://localhost:3100/products/" + id;
        axios.delete(url).then( (resData) => 
        {	              
              alert("Detp details are deleted from server");
              getDeptsClick();
        });
    }

    function selectDeptClick(id)
    { 
        let url= "http://localhost:3100/products/" + id;
        axios.get(url).then( (resData) => 
        {   
            let deptObj =  resData.data;
           
            setId(deptObj.id);
            setProductName(deptObj.productName);
            setCategory(deptObj.category);              
            setDescription(deptObj.description);              
            setUnitPrice(deptObj.unitPrice);              
            setProductImage(deptObj.productImage);              
              
        });
        
         
    }


    function updateDeptClick()
    {
        let deptObj = {};
        deptObj.id = id;
        deptObj.productName = productName;
        deptObj.category = category;
        deptObj.description = description;
        deptObj.unitPrice = unitPrice;
        deptObj.productImage = productImage;


        let url= "http://localhost:3100/products/" + deptObj.id;
        axios.put(url,  deptObj ).then( (resData) => 
        { 
			 alert("Dept details are updated in server");
             getDeptsClick();
        });
    }



    function clearFields()
    {
        setId("");
        setProductName("");
        setCategory("");
        setDescription("");
        setUnitPrice("");
        setProductImage("");
    }


 
    let resultArray = deptsArray.map((item, index) =>  
        <tr key={index}>
            <td>   {item.id}  </td>
            <td>   {item.productName}  </td>
            <td>   {item.category}  </td> 
            <td>   {item.description}  </td> 
            <td>   {item.unitPrice}  </td> 
            <td>   {<img src={item.productImage} height= "100px" width= "100px" />}  </td> 
            <td>
                    <a  href="#" onClick={() => selectDeptClick(item.id) }>Select</a>|
                    <a  href="#" onClick={() => deleteDeptClick(item.id) }>Delete</a>
            </td>
        </tr>
     );

    return (
        <>
            <h1 style={{textAlign: "center", color: "#FFFFFF"}}>welcome to winemart</h1>
     
            <hr />

            <input  type="text" value={id}  onChange={ (e) => setId(e.target.value) } placeholder="Enter ID"/>
            <input  type="text" value={productName} onChange={ (e) => setProductName(e.target.value) } placeholder="Enter NAme" />
            <input  type="text" value={category}  onChange={ (e) => setCategory(e.target.value) } placeholder="Enter Category" />
            <input  type="text" value={description}  onChange={ (e) => setDescription(e.target.value) } placeholder="Description"/>
            <input  type="text" value={unitPrice}  onChange={ (e) => setUnitPrice(e.target.value) } placeholder="Price"/>
            <input  type="text" value={productImage}  onChange={ (e) => setProductImage(e.target.value) } placeholder="Image"/>
            <input type="button" value="Add Product" onClick={addDeptClick} />
            <hr/>
 
            <input type="button" value="Get Product" onClick={getDeptsClick} />
            
            <input type="button" value="Update Product" onClick={updateDeptClick} />
            <hr/>

            <table border="2" width="600" cellspacing="0" cellpadding="5">
                <tr>
                    <th>id</th>
                    <th>productName</th>
                    <th>category</th>
                    <th>description</th>
                    <th>unitPrice</th>
                    <th>productImage</th>
                    <th>Actions</th>
                </tr>
                {resultArray}
            </table>
        </>
    );
}

export default ProductList;
