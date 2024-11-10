function UserDetails() {
  const data = useContext(DataContext);
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
      </div>
    );
  }
  
  export default UserDetails;