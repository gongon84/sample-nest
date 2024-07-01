'use client'

import { useEffect, useState } from 'react';
import { GetHelloResponse } from '@/types/api';

export default function HomePage() {
  const [data, setData] = useState<GetHelloResponse>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}
