import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import lendContext from "../context/lendContext";
import { Header, MainCard, LendingPool, DisconnectedTab } from "../components";

const Home: NextPage = () => {
  const {
    connectWallet,
    metamaskDetails,
    getUserAssets,
    getYourSupplies,
    getAssetsToBorrow,
    updateInterests,
    getYourBorrows,
  } = useContext(lendContext);

  useEffect(() => {}, []);

  useEffect(() => {
    getUserAssets();
    getYourSupplies();
    getAssetsToBorrow();
    getYourBorrows();
  }, [metamaskDetails]);

  return (
    <div>
      <Head>
        <title>DeFi Borrowing And Lending DApp</title>
        <link rel="icon" href="/download.png" />
      </Head>

      <main className="w-full p-0 m-0">
        <div>
          <div>{}</div>
          <div className="App bg-gradient-to-b from-[#e5c1c1] to-[#8d8989] h-[12rem] text-white">
            <Header />
            <MainCard />
          </div>

          {!metamaskDetails.currentAccount ? (
            <DisconnectedTab />
          ) : (
            <LendingPool />
          )}
        </div>
      </main>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Home;
