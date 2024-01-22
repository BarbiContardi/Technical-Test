"use client"
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, [router]);

  return <div>Loading...</div>;
}

export default HomePage;
