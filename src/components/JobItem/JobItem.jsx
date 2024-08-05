/* eslint-disable react/prop-types */
import "./JobItem.css";
const JobItem = ({ eachjob }) => {
  const QualificationsArray = [...eachjob.languages, ...eachjob.tools];
  return (
    <div
      className="jobitem"
      style={
        eachjob.new == true
          ? { borderLeft: "solid 4px hsl(180, 29%, 50%)" }
          : null
      }
    >
      <img src={eachjob.logo} alt="" />
      <div className="JobInfo">
        <div className="first">
          <label className="companyname">{eachjob.company}</label>
          {eachjob.new == true ? <label className="new">NEW!</label> : null}
          {eachjob.featured == true ? (
            <label className="featured">FEATURED</label>
          ) : null}
        </div>
        <p className="position">{eachjob.position}</p>
        <ul className="last">
          <li>{eachjob.postedAt}</li>
          <li>{eachjob.contract}</li>
          <li>{eachjob.location}</li>
        </ul>
      </div>
      <div className="Qualifications">
        <button>{eachjob.role}</button>
        <button>{eachjob.level}</button>
        {QualificationsArray.map((name, index) => {
          return <button key={index}>{name}</button>;
        })}
      </div>
    </div>
  );
};

export default JobItem;
