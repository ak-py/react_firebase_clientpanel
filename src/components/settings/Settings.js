import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setAllowRegistration,
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit
} from "../../actions/settingsActions";

const Settings = props => {
  const {
    setDisableBalanceOnAdd,
    setDisableBalanceOnEdit,
    setAllowRegistration,
    settings: { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration }
  } = props;

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <Link to="/" className="btn btn-link">
            <i className="fas fa-arrow-circle-left" /> Back To Dashboard
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Edit Settings</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Allow Registration</label>{" "}
              <input
                type="checkbox"
                name="allowRegistration"
                checked={allowRegistration}
                onChange={setAllowRegistration}
              />
            </div>
            <div className="form-group">
              <label>Disable Balance On Add</label>{" "}
              <input
                type="checkbox"
                name="disableBalanceOnAdd"
                checked={disableBalanceOnAdd}
                onChange={setDisableBalanceOnAdd}
              />
            </div>
            <div className="form-group">
              <label>Disable Balance On Edit</label>{" "}
              <input
                type="checkbox"
                name="disableBalanceOnEdit"
                checked={disableBalanceOnEdit}
                onChange={setDisableBalanceOnEdit}
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisabledBalanceOnAdd: PropTypes.func.isRequired,
  setDisabledBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
