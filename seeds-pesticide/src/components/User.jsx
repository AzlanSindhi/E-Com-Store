import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [authenticated, setAuthenticated] = useState(false)
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        // 🔑 Replace with your real authentication logic
        if (userId === "admin" && password === "1234") {
            setAuthenticated(true)
            setError("")
        } else {
            setError("Invalid ID or Password ❌")
            setAuthenticated(false)
        }
    }

    if (!authenticated) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card shadow p-4" style={{ width: "22rem" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="User ID"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        {error && <p className="text-danger small">{error}</p>}

                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    // If authenticated → show Admin Panel
    return (
        <div className="container mt-5">
            <h1>Welcome, {params.username}</h1>
            <h2 className="mt-4">🔥 Admin Panel</h2>
            <p>Here you can manage users, settings, and data.</p>
        </div>
    )
}

export default User
