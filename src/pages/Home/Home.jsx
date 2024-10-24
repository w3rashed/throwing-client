import logo from "../../assets/images/home/logo.png";
import banner1 from "../../assets/images/home/banner1.png";
import ButtonPrimary from "../../components/ButtonPrimary";
const Home = () => {
  return (
    <div className=" bg-[#49BBDF] min-h-svh">
      <div className=" flex justify-center pt-[70px]">
        <img className="" src={logo} alt="logo" />
      </div>
      {/* title */}
      <div className="text-white text-center mt-[30px] font-bold text-[26px]">
        <h2>スローインで</h2>
        <h2>人の願いや夢を応援しよう</h2>
      </div>
      {/* banner */}
      <div className=" mt-3 absolute">
        <img src={banner1} alt="" />
      </div>

      {/* button */}
      <div className="relative">
        <ButtonPrimary
          btnText="新規登録"
          style="bg-gradient-to-r from-[#65D0F2] to-[#2399F4] w-[253px] rounded-full text-center py-6 font-bold text-white "
        />
        <ButtonPrimary
          btnText="新規登録"
          style="bg-white to-[#2399F4] w-[253px] rounded-full text-center py-6 font-bold text-[#49BBDF] "
        />
      </div>
    </div>
  );
};

export default Home;
