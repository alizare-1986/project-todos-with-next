function ProfileData({ data }) {
  return (
    <div className="profile-data">
      <div>
        <span>Email:</span>
        <p>{data.email}</p>
      </div>
      <div>
        <span>Nmae:</span>
        <p>{data.name}</p>
      </div>
      <div>
        <span>Last Nmae:</span>
        <p>{data.lastName}</p>
      </div>
      <div>
        <span>Phone:</span>
        <p>{data.phone}</p>
      </div>
    </div>
  );
}

export default ProfileData;
