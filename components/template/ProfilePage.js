import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileForm from "../module/ProfileForm";
import ProfileData from "../module/ProfileData";
function ProfilePage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();
    if (
      data.status === "success" &&
      data.data.name &&
      data.data.lastName &&
      data.data.phone
    ) {
      setData(data.data);
    }
  };
  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, phone, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="profile-form">
      <h2>
        <CgProfile />
        Profile
      </h2>
      {data ? (
        <ProfileData data={data} />
      ) : (
        <ProfileForm
          name={name}
          lastName={lastName}
          phone={phone}
          password={password}
          setName={setName}
          setLastName={setLastName}
          setPhone={setPhone}
          setPassword={setPassword}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
}

export default ProfilePage;
