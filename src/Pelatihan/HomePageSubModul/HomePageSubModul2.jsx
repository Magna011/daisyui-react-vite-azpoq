import PelatihanSubmodul2 from "../../komponents/HomePage/PelatihanSubmodul2";
import ProgressCardSubModul2 from "../../komponents/ProgressCard/ProgressCardSubmodul2";
import SubModul2 from "../../komponents/SubModul/SubModul2";
import UlasanSubmodul2 from "../../komponents/Ulasan/UlasanSubmodul2";

const HomePagSubModul2 = () => {
  return (
    <div>
      <PelatihanSubmodul2/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul2 />
              <UlasanSubmodul2/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSubModul2;