'use client';

import BackToTop from "@/components/back-to-top";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Stanza from "@/components/stanza";

export default function Home() {
  const poemStanzas = [
    {
      text: `Male,\nAged 25-34,\nIn the red Volvo\nDriving down Yonge Street.\nI love you\nFor letting me merge.`,
      bgColor: 'bg-gradient-to-r from-red-100 to-red-300',
    },
    {
      text: `Lady in green\nI passed on the sidewalk\nAround 9:06 am.\nI love you\nFor saying\nGood morning.`,
      bgColor: 'bg-gradient-to-r from-green-200 to-green-500',
    },
    {
      text: `Old man\nWho flashed his brights\nTwice.\nI love you\nFor warning me\nAbout the hidden police car.`,
      bgColor: 'bg-gradient-to-r from-gray-100 to-gray-300',
    },
    {
      text: `Librarian\nWith the picture frame\nTurned so I couldn't see.\nI love you\nFor issuing my card\nEven though I had no\nProof of address.`,
      bgColor: 'bg-gradient-to-r from-blue-100 to-blue-300',
    },
    {
      text: `Boy who holds the elevator door,\nWoman who calls in traffic tips,\nAnd the flight attendant who gives both\nPeanuts and pretzels,\nYou are the skeletal structure\nThat supports our crumbling society.\nYou fan the flames of my faith\nAnd make me a better person.`,
      bgColor: 'bg-gradient-to-r from-purple-100 to-purple-300',
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-neutral-100 text-gray-800 relative">
      <div className="absolute top-4 right-4">
        <Image 
          src="/cardinal-branch.png"
          alt="Cardinal illustration"
          width={50}
          height={50}
          className="w-auto h-auto hidden sm:block"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold my-4 text-red-700">An Ode to Those I Love</h1>
      <Link href={"https://benvj.com"} target="_blank">
        <h2 className="text-xl md:text-2xl font-semibold hover:text-orange-500 transition-colors">Ben von Jagow</h2>
      </Link>
      {poemStanzas.map((stanza, index) => (
        <Stanza key={index} text={stanza.text} bgColor={stanza.bgColor} />
      ))}
      <BackToTop />
      <Footer />
    </main>
  );
}