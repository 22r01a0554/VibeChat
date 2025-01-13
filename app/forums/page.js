import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
const topics = [
  {
    text: "Python",
    img: "/python.png",
    desc: "Lets discuss everything related to Python",
    slug: "python-new2"
    },
  {
    text: "JavaScript",
    img: "/javascript.png",
    desc: "Dive deep into the world of JavaScript",
    slug: "javascript-new2"
  },
  {
    text: "React",
    img: "/react.png",
    desc: "Build amazing user interfaces with React",
    slug: "react-new2"
  },
  {
    text: "Node.js",
    img: "/nodejs.png",
    desc: "Learn and Explore server-side development with Node.js",
    slug: "nodejs-new2"
  },
  {
    text: "Data Science",
    img: "/datascience.png",
    desc: "Discover the power of data science with Python and other tools" ,
    slug: "datascience-new2"
  },
  {
    text: "Machine Learning",
    img: "/machinelearning.png",
    desc: "Learn about machine learning algorithms and build intelligent systems",
    slug: "machinelearning-new2"    
  }
];
const page = () => {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-4xl text-center font-bold mb-12">Discussion Forums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.img}
            className="rounded-lg shadow-md bg-slate-200 overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="p-8 flex flex-col items-center justify-center">
              <Image
                src={topic.img}
                alt={topic.text}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{topic.text}</h2>
              <p className="text-gray-700 text-base">{topic.desc}</p>
              <Link href={`/forum/${topic.slug}`}>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
                rounded mt-4">
                  Discuss Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className='container mx-auto my-20'>
    //   <h1 className='text-4xl text-center font-bold'>Discussion Forums</h1>
    //   <div className='flex flex-wrap justify-center text-center'>{
    //     topics.map((topic)=>{
    //       return <div key={topic.img}  className='shadow-lg bg-slate-200 w-1/4 m-4 flex justify-center flex-col items-center py-10'>
    //         <Image src={topic.img} alt="img" width={34} height={34}/>
    //         <h2 className='text-2xl'>{topic.text}</h2>
    //         <p>{topic.desc}</p>
    //         <button>Discuss now</button>
    //     </div>
    //   })}
    //   </div>
    // </div>
  )
}

export default page