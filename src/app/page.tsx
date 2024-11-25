"use client"

import Head from 'next/head'
import dynamic from 'next/dynamic';
import useSWR from 'swr';

const MayorBox = dynamic(() => import('./components/MayorBox'), {
  ssr: false,
  loading: () => <div>Loading Mayor Data...</div>
})


export default function Home(){

  const fetcher = async (url: string | URL | Request) => fetch(url).then((res) => res.json());

  const {data, error} = useSWR('https://api.hypixel.net/v2/resources/skyblock/election', fetcher, {
    refreshInterval: 0,
  });

  console.log('Home component rendered')

  if (error) {
    console.log('Error fetching data:', error);
  }


  return (
    <div className="text-center justify-center">
      <h1 className='mt-10 text-4xl font-bold underline'>Who's That Skyblock Mayor</h1>
      {data && <MayorBox name={data.mayor.name} perks={data.mayor.perks} />}
    </div>
  );
}