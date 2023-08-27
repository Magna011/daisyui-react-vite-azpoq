import PelatihanSubmodul5 from "../../komponents/HomePage/PelatihanSubmodul5";
import ProgressCardSubModul5 from "../../komponents/ProgressCard/ProgressCardSubmodul5";
import SubModul5 from "../../komponents/SubModul/SubModul5";
import UlasanSubmodul5 from "../../komponents/Ulasan/UlasanSubmodul5";

const HomePagSubModul5 = () => {
  return (
    <div>
      <PelatihanSubmodul5/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul5 />
              <UlasanSubmodul5/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul5 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSubModul5;