const login = async ({ email, password }) => {
  console.log("login user in user repository");
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  console.log(
    "register user with :name:" +
      name +
      "email:" +
      email +
      "password:" +
      password +
      "phoneNumber:" +
      phoneNumber +
      "address:" +
      address
  );
};

export default{
    login,
    register,
};