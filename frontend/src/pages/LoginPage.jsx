import { Footer } from "../components/Footer";
import { BackHome } from "../components/buttons/BackHome";
import { useUserStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { loading, error, password, email, userLogin, setPassword, setEmail } =
    useUserStore();

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await userLogin();
    if (!error) {
      navigate("/logged");
    } else {
      navigate("/signup");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="relative flex flex-col justify-center items-center ">
        <div className="absolut bg-login-image bg-cover bg-center right-0 top-0 object-cover sm:h-[180px] md:h-[315px] lg:h-[564px] w-full flex items-center justify-center">
          <BackHome
            className={
              "text-cardBg flex flex-row gap-x-3 absolute left-[30px] top-[30px]"
            }
          />
          <h1 className="text-cardBg sm:text-h1sm md:text-h1md lg:text-h1lg">
            Login
          </h1>
        </div>

        <div className="flex justify-center sm:pt-[80px] ">
          <form
            onSubmit={handleLoginSubmit}
            className="flex flex-col sm:gap-y-[80px] items-center"
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Password：
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
              />
            </div>
            <button
              type="submit"
              className="text-bg2 bg-bg1 rounded sm:text-h2sm lg:text-h2md py-[5px] px-[10px]"
            >
              Login
            </button>
          </form>
        </div>
        <div className="sm:p-3 sm:pb-[80px]">
          <p className="text-fontColor sm:text-textsm md:textmd lg:text-textmd">
            Or you can sign up{" "}
            <a href="/signup" className="text-bg2">
              here
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};