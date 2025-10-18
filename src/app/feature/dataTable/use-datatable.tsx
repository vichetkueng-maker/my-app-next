import { payment } from "../mock-data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function UseDataTable(){
    return(
        <DataTable 
            columns={columns}
            data={payment}
        ></DataTable>
    )
}