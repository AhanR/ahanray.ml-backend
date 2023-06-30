'use client'
import React, { useState } from 'react'

export default function Projects() {

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [priority, setPriority] = useState(0);

  const [outProjects, setOutProjects] = useState<Array<any>>([]);

  return (
    <div>
      <div className="mb-2 rounded-lg bg-orange-400 p-2 flex justify-between">
        <span>
          Projects
        </span>
        <span>
          New Records ({outProjects.length})
        </span>
      </div>
      {outProjects.map(proj=>(<details
        className='open:mb-2 transition-all'
      >
        <summary
          className=' rounded-lg bg-orange-400 p-2 col-span-5 list-none cursor-pointer mb-2'
        >{proj.title}</summary>
        <div className="grid grid-cols-5 gap-2">
          <div
            className=' rounded-lg bg-orange-400 p-2  col-span-5'  
          >{proj.description}</div>
          <div
            className=' rounded-lg py-1 col-span-5'  
          >{proj.tags?.map((e:string)=>(<span
              className=' rounded-lg bg-orange-300 ml-1 px-2 bg-opacity-80'
            >{e}</span>))}</div>
          <div 
            className=' rounded-lg bg-orange-400 p-2 placeholder:text-zinc-700  col-span-3'
          >{proj.url}</div>
          <div 
            className=' rounded-lg bg-orange-400 p-2 placeholder:text-zinc-700  col-span-2'
          >{proj.priority}</div>
        </div>
      </details>))}

      <form
        className=' grid grid-cols-5 gap-2'
        onSubmit={(e)=>{
          e.preventDefault();
          const newProject = {
            title,
            description: desc,
            tags : tags.split(",").map(s=>s.trim()),
            url,
            priority
          }

          setTitle("");
          setTags("");
          setDesc("");
          setPriority(0);
          setUrl("");
          setOutProjects([...outProjects, newProject]);

        }}
      >
        <input 
          className=' rounded-lg bg-zinc-800 text-orange-500 p-2 placeholder:text-zinc-700 col-span-5' 
          type="text" name='title' id='title' placeholder='title' value={title} onChange={e=>setTitle(e.target.value)} required/>
        <textarea
          className=' rounded-lg bg-zinc-800 text-orange-500 p-2 placeholder:text-zinc-700 resize-none  col-span-5'  
          name="desc" id="desc" placeholder='description' value={desc} onChange={e=>setDesc(e.target.value)} required></textarea>
        <input
          className=' rounded-lg bg-zinc-800 text-orange-500 p-2 placeholder:text-zinc-700  col-span-5'  
          type="text" name='tags' id='tags' placeholder='tags' value={tags} onChange={e=>setTags(e.target.value)} required/>
        <input 
          className=' rounded-lg bg-zinc-800 text-orange-500 p-2 placeholder:text-zinc-700  col-span-3'
          type="url" name='url' placeholder='url' value={url} onChange={e=>setUrl(e.target.value)} required/>
        <input 
          className=' rounded-lg bg-zinc-800 text-orange-500 p-2 placeholder:text-zinc-700  col-span-1'
          type="number" name="priority" id="priority" placeholder='priority' value={priority} onChange={e=>setPriority(parseInt(e.target.value))}  required/>
        <input
          className=' rounded-lg bg-orange-400 p-2'
          type="submit" value="Add"/>
      </form>
      <button
        className=' rounded-lg bg-orange-400 p-2 w-full my-2'
      >Save</button>
    </div>
  )
}
