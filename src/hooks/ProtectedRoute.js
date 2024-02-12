import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
const ProtectedRoute=({children})=>{
   let {auth} = useAuthContext;
   if(!auth){
      return <Navigate to="/" />
   }
   return children;
}
export default ProtectedRoute;