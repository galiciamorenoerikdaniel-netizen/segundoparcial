import { FaUser } from "react-icons/fa";

export default function Card({ title, value }) {
  return (
    <div className="card">
      <FaUser className="card-icon" />
      <span className="card-value">{value}</span>
      <span className="card-title">{title}</span>
    </div>
  );
}