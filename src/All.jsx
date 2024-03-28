import Career from "./Career";
import CyberSecurity from "./CyberSecurity";
import DataScience from "./DataScience";
import Fsd from "./Fsd";
function All() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Fsd />
          </div>
          <div className="col-12">
            <DataScience />
          </div>
          <div className="col-12">
            <CyberSecurity />
          </div>
          <div className="col-12">
            <Career />
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
