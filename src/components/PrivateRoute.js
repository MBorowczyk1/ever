import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, authorized }) {
    return authorized ? children : <Navigate to="/login" />;
}