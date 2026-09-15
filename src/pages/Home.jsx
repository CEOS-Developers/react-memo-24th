import Navbar from '../components/NavBar';

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-[#E4EDFF] px-[120px] pt-[72px] pb-[86px]">
      <div className="flex  w-full flex-col gap-[76px]">
        <Navbar />

        {/* Memo Content */}
        <div className="flex-1 border border-dashed border-[#9CC1FF]">
          Memo Content
        </div>
      </div>
    </main>
  );
};

export default Home;
