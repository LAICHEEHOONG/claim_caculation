import ClaimTable from "../components/ClaimTable";
import TotalCalimTable from "../components/TotalClaimTable";

export default function HomePage() {
  return (
    <div className="home-container">
      <h2 style={{color: '#4a2950'}}>CLAIM CALCULATION</h2>
      <ClaimTable />
      <TotalCalimTable />
    </div>
  );
}
