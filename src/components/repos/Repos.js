import React from "react";
import RepoItem from "./RepoItem";

export const Repos = props => {
  return props.repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
