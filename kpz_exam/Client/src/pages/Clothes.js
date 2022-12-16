import React, { useState, useEffect, Component } from "react";
import axios from 'axios';
import { Button, ButtonGroup, Container, Table, Form, FormGroup, InputGroup, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Clothes(params){
    const [ClothingItems,setClothingItems] = useState([]);
    const [editClothingItem,setEditClothingItem] = useState({    
    "id": 0,
    "name": "",
    "price": 0,
    "brand": "",
    "releaseYear": 0,
    "size": 0,
    "model":""
});
    const [showEdit, setShowEdit] = useState(false);
    const onEditClick = () => setShowEdit(true);

    const  remove = async (id) =>{
        console.log(id);
        await fetch(`https://localhost:7205/api/ClothingItem/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClothingItems = ClothingItems.filter(i => i.id !== id);
            setClothingItems(updatedClothingItems);
        });
    }
    const handleSave = (event) => {
        event.preventDefault();
        const ClothingItemToSave = editClothingItem;
        ClothingItemToSave.id=0;
        setEditClothingItem(ClothingItemToSave);
        console.log(editClothingItem);
        console.log(JSON.stringify(editClothingItem).replace("null","[]"));
         fetch('https://localhost:7205/api/ClothingItem', {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editClothingItem).replace("null","[]")
        });
        setEditClothingItem({
            "id": 0,
                "name": "",
            "price": 0,
            "brand": "",
            "releaseYear": 0,
    "size": 0,
    "model":""
        });
        fetchData().catch(console.error);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(editClothingItem);
        console.log(JSON.stringify(editClothingItem).replace("null","[]"));
         fetch('https://localhost:7205/api/ClothingItem/' + editClothingItem.id, {
            method:  'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editClothingItem).replace("null","[]"),
        });
        setEditClothingItem({
            "id": 0,
    "name": "",
    "price": 0,
    "brand": "",
    "releaseYear": 0,
    "size": 0,
    "model":""

        });
        fetchData().catch(console.error);
    }
    const handleNameInputChange = (event) => {
        event.persist();
        setEditClothingItem((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    const handlebrandChange = (event) => {
        event.persist();
        setEditClothingItem((values) => ({
            ...values,
            brand: event.target.value,
        }));
    };
    const handlePriceInputChange = (event) => {
        event.persist();
        setEditClothingItem((values) => ({
            ...values,
            price: event.target.value,
        }));
    };
   
    const handlereleaseYearInputChange = (event) => {
        event.persist();
        setEditClothingItem((values) => ({
            ...values,
            releaseYear: event.target.value,
        }));
    };
    const handlesizeInputChange = (event) => {
        event.persist();
        setEditClothingItem((values) => ({
            ...values,
            size: event.target.value,
        }));
    };
    const handlemodelInputChange = (event) => {
        event.persist();
        setEditClothingItem((values) => ({
            ...values,
            model: event.target.value,
        }));
    };
    const fetchData = async()=>
    {
        const response = await fetch('https://localhost:7205/api/ClothingItem');
        const body = await response.json();
        console.log("body");
        console.log(body);
        console.log("ClothingItems");
        console.log(ClothingItems);
        setClothingItems([...body]);
        console.log("data fetched");
    }
     useEffect(()=>{

        fetchData().catch(console.error);
    },[])
    
  

      
      return (
          <div className="App">
            <header className="App-header">
                <div >
                    {editClothingItem.id===0?<h3>New ClothingItem</h3>:<h3>Editing ClothingItem #{editClothingItem.id}</h3>}
                    <Container>
                        <form onSubmit={handleSubmit} >
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label" for="name">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="name" id="name" value={editClothingItem.name || ''}
                                    autoComplete="name" onChange={handleNameInputChange}/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label" for="number">brand</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" name="brand" id="brand" value={editClothingItem.brand || ''}
                                     autoComplete="brand" onChange={handlebrandChange}/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label" for="price">Price</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" name="price" id="price" value={editClothingItem.price || '' } 
                                    onChange={handlePriceInputChange}/>
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label" for="releaseYear">releaseYear</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" name="releaseYear" id="releaseYear" value={editClothingItem.releaseYear || ''}
                                        autoComplete="releaseYear" onChange={handlereleaseYearInputChange}/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label" for="size">Size</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" name="size" id="size" value={editClothingItem.size || ''}
                                        autoComplete="size" onChange={handlesizeInputChange}/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label" for="model">model</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="model" id="model" value={editClothingItem.model || ''}
                                        autoComplete="model" onChange={handlemodelInputChange}/>
                                </div>
                            </div>
                            <div class="form-group row">
                            {editClothingItem.id!=0?<div><Button variant="warning" type="submit">Edit</Button>{' '}
                            </div>:
                            <div> <Button color="primary" onClick={handleSave} type="submit">Save</Button>{' '}</div>}
                           
                            </div>
                        </form>
                    </Container>
                </div>
              <h3>ClothingItems</h3>
              <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>brand</th>
                    <th>Price</th>
                    <th>releaseYear</th>
                    <th>Size</th>
                    <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {ClothingItems.map(ClothingItem =>
                        <tr key={ClothingItem.id}>
                            <td>{ClothingItem.id} </td>
                            <td>{ClothingItem.name} </td>
                            <td>{ClothingItem.brand} </td>
                            <td>{ClothingItem.price} </td>
                            <td>{ClothingItem.releaseYear} </td>
                            <td>{ClothingItem.size} </td>
                            <td>{ClothingItem.model} </td>
                            <td>
                           
                                <Button size="sm" variant="contained"  onClick={() => {
                                    setEditClothingItem(ClothingItem);
                                    
                                    }}>Edit</Button>
                            </td>
                            <td>
                                <ButtonGroup>
                                    <Button size="sm" variant="danger" onClick={() => remove(ClothingItem.id)}>Delete</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    )}
                </tbody>
              </Table>
            </header>
          </div>
      );
    
  }


export default Clothes;