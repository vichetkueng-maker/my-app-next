import { redirect } from "next/navigation";


export default function Page(){
    const islogin =true;
    if(!islogin){
        redirect("/login")
    }else{
        redirect("/dashboard/overview")
    }
}