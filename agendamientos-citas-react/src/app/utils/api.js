import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Cambia esto por la URL de tu API

export const fetchAvailableAppointments = async (city, procedure, date) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/appointments`, {
            params: { city, procedure, date }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching available appointments:', error);
        throw error;
    }
};

export const scheduleAppointment = async (appointmentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/schedule`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error scheduling appointment:', error);
        throw error;
    }
};