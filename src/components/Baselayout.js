
import Sidevar from '../components/Sidevar'
const Baselayout = ({children}) => {
    return (
        <div>
             <div className="layout">
      <Sidevar />
      <main className="layout__main-content">{children}</main>;
    </div>
        </div>
    );
};

export default Baselayout;