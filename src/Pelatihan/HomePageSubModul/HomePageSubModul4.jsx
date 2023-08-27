import PelatihanSubmodul4 from "../../komponents/HomePage/PelatihanSubmodul4";
import ProgressCardSubModul4 from "../../komponents/ProgressCard/ProgressCardSubmodul4";
import SubModul4 from "../../komponents/SubModul/SubModul4";
import UlasanSubmodul4 from "../../komponents/Ulasan/UlasanSubmodul4";

const HomePagSubModul4 = () => {
  return (
    <div>
      <PelatihanSubmodul4/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul4 />
              <UlasanSubmodul4/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSubModul4;