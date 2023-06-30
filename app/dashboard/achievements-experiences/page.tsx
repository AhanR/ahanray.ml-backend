'use client'
import React, { useState } from 'react'

export default function Experiences() {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const [outExp, setOutCert] = useState<Array<any>>([]);

  return (
    <div>

      <div className="mb-2 rounded-lg bg-orange-400 p-2 flex justify-between">
        <span>
          Experiences
        </span>
        <span>
          New Records ({outExp.length})
        </span>
      </div>

      {outExp.map(c=>(
        <div className="grid grid-cols-5 mb-2 rounded-lg overflow-clip bg-orange-400">
          <div className="bg-orange-300 p-2 col-span-5 ">{c.title}</div>
          <div className=" p-2 col-span-5 ">{c.url}</div>
        </div>
      ))}

      <form
        className='grid grid-cols-5 gap-2'
        onSubmit={e=>{
          e.preventDefault();
          const newexp = {
            title,
            url
          }

          setUrl("");
          setTitle("");
          setOutCert([...outExp, newexp])
        }}
      >
        <input 
          className='rounded-lg bg-zinc-800 col-span-5 text-orange-500 placeholder:text-zinc-700 p-2'
          type="text" name="title" id="title" value={title} onChange={e=>setTitle(e.target.value)} placeholder='title'/>
        <input 
          className='rounded-lg bg-zinc-800 col-span-4 text-orange-500 placeholder:text-zinc-700 p-2'
          type="url" name="url" id="url" placeholder='url' value={url} onChange={e=>setUrl(e.target.value)}/>
        <input 
          className='rounded-lg bg-orange-400'
        type="submit" value="Add" />
      </form>
      <button
        className=' rounded-lg bg-orange-400 p-2 mt-2 w-full'
      >Save</button>
    </div>
  )
}
