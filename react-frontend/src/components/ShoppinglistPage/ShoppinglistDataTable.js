
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Chip } from 'primereact/chip';
import { Image } from 'primereact/image';


const ShoppinglistDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const checkboxTemplate0 = (rowData, { rowIndex }) => <Checkbox checked={rowData.isDone}  ></Checkbox>
    const chipTemplate1 = (rowData, { rowIndex }) => <Chip label={rowData.product}  />
    const imageTemplate2 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.quantity}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.remark}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="isDone" header="Done" body={checkboxTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="product" header="Product Name" body={chipTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="image" header="Image" body={imageTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="quantity" header="quantity" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="remark" header="remark" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ShoppinglistDataTable;