import React from "react";
import { useQuery } from "@apollo/client";
import queryFranchise from "../../gql/mutation_frachiseregistration_form";

const QueryCall = (param) => {
    console.log(queryFranchise(param))
    const { loading, error, data } = useQuery(queryFranchise(param));
    return {loading,error,data}
}

export default QueryCall;