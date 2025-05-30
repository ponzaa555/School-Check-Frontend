import MainPage from "@/components/MainPage/mainPage";
import NavBar from "@/components/NavBar/navBar";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <div className=" flex flex-col  w-full items-center  ">
        <div className=" mx-auto w-4/5 mt-10">
          <MainPage/>
        </div>
      </div>
    </main>
  );
}
