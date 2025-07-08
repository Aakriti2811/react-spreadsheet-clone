import TopBar from "./TopBar";
import Tabs from "./Tabs";
import Table from "./Table";
import TopActionBar from "./TopActionBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Top Bar */}
      <TopBar />

      {/* Action Bar */}
      <TopActionBar />

      {/* Table area with scroll */}
      <div className="flex-1 overflow-auto">
        <Table />
      </div>

      {/* Tabs - Sticky at bottom */}
      <div className="sticky bottom-0 bg-white">
        <Tabs />
      </div>
    </div>
  );
};

export default Layout;
