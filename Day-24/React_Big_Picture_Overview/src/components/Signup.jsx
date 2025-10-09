import { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSuubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Make an ApiCall to backend with data
    // get response from backend
    // Take action based on response
  }

  return (
    <div className="form-group">
      <h1>Welcome to Signup Page</h1>
      <form onSubmit={handleSuubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signup...' : 'Signup'}
        </button>
      </form>
    </div>
  );
}

export default Signup;
