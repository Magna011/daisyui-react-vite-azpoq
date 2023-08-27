import PelatihanSubmodul6 from "../../komponents/HomePage/PelatihanSubmodul6";
import ProgressCardSubModul6 from "../../komponents/ProgressCard/ProgressCardSubmodul6";
import SubModul6 from "../../komponents/SubModul/SubModul6";
import UlasanSubmodul6 from "../../komponents/Ulasan/UlasanSubmodul6";

const HomePagSubModul6 = () => {
  return (
    <div>
      <PelatihanSubmodul6/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul6 />
              <UlasanSubmodul6/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSubModul6;