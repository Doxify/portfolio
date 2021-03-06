import { formatDateString } from "../lib/date";

export default function WorkCard({ work }) {
  return (
    <div className="card project-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="h5 card-title">{work.title}</span>
          <span className="h6 card-subtitle">
            {formatDateString(work.start)} -{" "}
            {work.end ? formatDateString(work.end) : "Present"}
          </span>
        </div>
        <p className="card-subtitle text-muted">{work.name}</p>
        {/* <ul>
          {
            work.bullets.map((bullet) => <li className="card-text" key={bullet}>{bullet}</li>)
          }
        </ul> */}
      </div>
    </div>
  );
}
