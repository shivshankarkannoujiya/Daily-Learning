const registerUser = async (req, res) => {
    res.send(`User registered successfully`)
};

const loginUser = async (req, res) => {
    res.send(`User login successfully`)
}

export { registerUser, loginUser }