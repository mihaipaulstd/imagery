import React from "react";
import { connect } from "react-redux";

import ModalArrow from "./ModalArrow";

const ModalNavigation = ({}) => (
  <div>
    <ModalArrow direction="left" className="arrowLeft" />
    <ModalArrow direction="right" className="arrowRight" />
  </div>
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(ModalNavigation);
