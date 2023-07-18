import Modal from "@/components/Modal/Modal";
import Link from "next/link";

type Props = {
  searchParams: Record<string, string | null | undefined>;
};

const Home = ({ searchParams }: Props) => {
  const showModal = searchParams?.modal;
  return (
    <main className="bg-gray-200 my-5 mx-5 px-5 ">
      <nav className="my-5 px-5 py-5">
        <ul className="flex flex-row justify-between">
          <div className="flex flex-row justify-between">
            <li className="mx-5 px-5 py-5">Logo</li>
            <li className="mx-5 px-5 py-5">Home</li>
            <li className="mx-5 px-5 py-5">About</li>
            <li className="mx-5 px-5 py-5">Contact</li>
          </div>
          <div className="flex flex-row justify-between">
            <li className="mx-5 px-5 py-5">Login</li>
            <li className="mx-5 px-5 py-5">Register</li>
          </div>
        </ul>
      </nav>
      <h1
        className="my-5 px-5 py-5
       font-xl"
      >
        Page from RootLayout
      </h1>
      <p className="my-5 px-5 py-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos magnam,
        ducimus nostrum veniam facere iste adipisci recusandae cupiditate
        expedita enim, eveniet, ratione esse? Perspiciatis, voluptatum
        voluptate. Aut saepe ab nam. Cupiditate, pariatur! Asperiores at
        aspernatur, ipsum quas est assumenda, aliquam dignissimos magni, quis
        deserunt omnis fuga! Deserunt nulla atque labore, in illum tenetur dolor
        commodi aspernatur, at, ipsa iusto numquam. Eum qui, aut quod eos
        facilis ab temporibus est reiciendis blanditiis repellendus, quisquam
        aliquid fugit adipisci natus placeat eaque quae, deleniti eius id ad
        ipsa ut iste recusandae? Itaque, nam.
      </p>
      <div>
        <Link
          href="/?modal=true"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          LOGIN
        </Link>
        {showModal && <Modal />}
      </div>
    </main>
  );
};

export default Home;
