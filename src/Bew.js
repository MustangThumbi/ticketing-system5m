import React from "react";

function Bew() {
  return (
    <div>
      <h3>Submit a Ticket</h3>
      <form>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            className="form-control"
            // value={this.state.title}
            // onChange={this.onChangeTitle}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <textarea
            style={{ resize: "none" }}
            type="text"
            maxLength="250"
            rows="3"
            className="form-control"
            // value={this.state.description}
            // onChange={this.onChangeDescription}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Project Name: </label>
          <select
            className="form-control"
            // value={this.state.projectName}
            // onChange={this.onChangeProjectName}
          >
            {/* {this.state.projects.map((project) => {
              return (
                <option key={project} value={project}>
                  {project}
                </option>
              );
            })} */}
          </select>
        </div>
        <div className="form-group">
          <label>Assigned To: </label>
          <select
            className="form-control"
            // value={this.state.assignee}
            // onChange={this.onChangeAssignee}
          >
            {/* {this.state.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })} */}
          </select>
        </div>
        <div className="form-group">
          <label>Priority: </label>
          <select
            className="form-control"
            // value={this.state.priority}
            // onChange={this.onChangePriority}
          >
            {/* {priorities.map((priority) => {
              return (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              );
            })} */}
          </select>
        </div>
        <div className="form-group">
          <label>Status: </label>
          <select
            className="form-control"
            // value={this.state.status}
            // onChange={this.onChangeStatus}
          >
            {/* {statuses.map((status) => {
              return (
                <option key={status} value={status}>
                  {status}
                </option>
              );
            })} */}
          </select>
        </div>
        <div className="form-group">
          <label>Type: </label>
          <select
            className="form-control"
            // value={this.state.type}
            // onChange={this.onChangeType}
          >
            {/* {types.map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })} */}
          </select>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Submit Ticket"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default Bew;
