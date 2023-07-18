import Modal from "@/components/Modal/Modal";
import Link from "next/link";

type Props = {
  searchParams: Record<string, string | null | undefined>;
};

const Login = ({ searchParams }: Props) => {
  const showModal = searchParams?.showModal;

  return (
    <>
      <Link href="/?modal=true">Login</Link>

      {showModal && <Modal />}
    </>
  );
};

export default Login;
