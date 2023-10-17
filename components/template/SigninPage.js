import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {  status } = useSession();
  useEffect(()=>{
      if(status==="authenticated") router.replace("/")
  },[status])
  const signInHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if(!res.error) router.push("/")
  };
  return (
    <div className="signin-form">
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signInHandler}>SignIn</button>
      <div>
        <p>Create an account?</p>
        <Link href={"signup"}>SignUp</Link>
      </div>
    </div>
  );
}

export default SigninPage;
