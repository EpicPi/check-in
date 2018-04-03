import { connect } from 'react-redux';
import { Component } from 'react';
import { submitButton } from '../../../assets/text';
import { checkGroupCode } from '../../../actions/groupActions';

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.state = {
      name: '',
      code: ''
    };
  }
  //todo verify group code valiable
  handleGeneral(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-12">
            <label className="col-form-label">Group Name</label>
            <div>
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleGeneral}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label className="col-form-label">Group Join Code</label>
            <div>
              <input
                type="text"
                name="code"
                className="form-control"
                value={this.state.code}
                onChange={this.handleGeneral}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" value="Submit" className="btn btn-success">
          {submitButton}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    checkCode: checkGroupCode
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(GroupForm);
