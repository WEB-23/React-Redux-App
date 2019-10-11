import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

import DataCard from "./DataCard.js";

const DataList = ({ getData, data }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return <DataCard data={data} />;
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(DataList);
