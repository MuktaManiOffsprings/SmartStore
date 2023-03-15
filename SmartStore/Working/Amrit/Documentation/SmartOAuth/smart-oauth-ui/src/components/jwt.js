import axios from 'axios';
import jwt from 'jsonwebtoken';

function getUserId(token) {
    const decodedToken = jwt.decode(token);
    return decodedToken.sub;
}

async function fetchData(token) {
    const userId = getUserId(token);
    const response = await axios.get(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}