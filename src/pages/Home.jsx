import NavBar from '../components/NavBar';
import EmptyMemo from '../components/EmptyMemo';

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-[#E4EDFF] px-[120px] pt-[72px] pb-[86px]">
      <div className="flex  w-full flex-col gap-[76px]">
        {/* NavBar */}
        <NavBar />

        {/* Memo Content */}
        <EmptyMemo />
      </div>
    </main>
  );
};

export default Home;
