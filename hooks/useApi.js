import { useState, useEffect } from 'react';
import axios from 'axios';

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL; // Retrieve the backend URL from the environment variable

export function useApi(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendURL}api/v1/dailypulse/list/${category}/`
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, [category]);
  return { data, loading, error };
}

export function useApi2(category, language) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendURL}api/v1/dailypulse/list/${category}/${language}`
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, [category, language]);
  return { data, loading, error };
}

export function useApi3(location) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendURL}api/v1/dailypulse/${location}`
        );
        setData(response.data.main.temp);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, [location]);
  return { data, loading, error };
}