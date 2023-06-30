"use client"
import { firebaseApp } from '@/app/firebase';
import React, { useCallback, useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

interface skillData {
    key : string,
    tags : string[],
    title : string
}

export default function skills() {

    const [dataIn, setDataIn] = useState<skillData[] | any>([]);
    const [dataOut, setDataOut] = useState<skillData[] | any>([]);
    const [outDataCount, setOutDataCount] = useState(0);

    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");

    // console.log("event loop");  
    // if(dataIn.length === 0) {
    //     console.log("updating data");
    //     const db = getFirestore(firebaseApp);
    //     const tempData : any = [];
    //     const data = await getDocs(collection(db, "MainWebsiteSkillsData"))
    //     data.forEach(elm => {
    //         tempData.push({...elm.data(), key : elm.id});
    //     });
    //     setDataIn(tempData);
    // } else {
    //     console.log("data already updated");
    // }
 
  return (
    <div>
        <div className="mb-2 rounded-lg bg-orange-400 p-2 flex justify-between">
        <span>
          Skills
        </span>
        <span>
          New Records ({outDataCount})
        </span>
      </div>
        <div 
            className=' w-full grid grid-cols-6 py-1 mb-1 gap-1'
        >
            <span
                className=' col-span-2 rounded-lg bg-orange-400 p-2'
            >Title</span>
            <span
                className=' col-span-4 rounded-lg bg-orange-400 p-2'
            >Tags</span>
        </div>
        {dataOut.map((row : skillData)=> (<div 
            key={row.key}
            className=' w-full grid grid-cols-6 py-1 mb-1 gap-1'
        >
            <span
                className=' col-span-2'
            >
                {row.title}
            </span>
            <span
                className=' col-span-4'
            >
                {row.tags.map(t => (<span
                    className=' rounded-lg bg-orange-300 ml-1 px-2 bg-opacity-80'
                >{t}</span>))}
            </span>
        </div>))}
        <form 
            className=' w-full grid grid-cols-6 py-1 mb-1 gap-1'
            onSubmit={(e)=>{
                e.preventDefault();
                const currentOutIndex = outDataCount;
                setOutDataCount(outDataCount+1);
                const newOutData = {
                    tags : tags.split(",").map(s=>s.trim()),
                    title : title.trim(),
                    key : currentOutIndex
                }
                setTitle("");
                setTags("");
                setDataOut([...dataOut, newOutData]);
            }}
        >
            <input 
                className=' bg-zinc-800 rounded-lg p-2 text-orange-500 placeholder:text-zinc-700 col-span-2'
                type="text" name='title' id="title" placeholder='title' value={title} onChange={e=>setTitle(e.target.value)} 
            />
            <input
                className=' bg-zinc-800 rounded-lg p-2 text-orange-500 placeholder:text-zinc-700 col-span-3' 
                type="text" name='tags' id="tags" placeholder='tags' value={tags} onChange={e=>setTags(e.target.value)} />
            <button
                className=' rounded-lg bg-orange-400'
            >Add</button>
        </form>
        <button
            className=' bg-orange-400 rounded-lg w-full p-2'
        >Save</button>
    </div>
  )
}