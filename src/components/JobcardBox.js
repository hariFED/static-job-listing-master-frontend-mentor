
import React, { useState } from "react"
import data from "../data"






const JoblistingCard = () => {

    const [selectedFilter, setSelected] = useState([])
    const [filterContent, setFilterdcontent] = useState(data)
    const [display, setDisplay] = useState("hidden")

    const handleOnclick = (text) => {
        if (!selectedFilter.includes(text)) { // Check if the selected filter is not already in the array
            setSelected([...selectedFilter, text]); // Add the selected filter to the array

        }
        setFilterdcontent(data.filter(item => item.languages.includes(text) || item.level.includes(text) || item.role.includes(text) || item.tools.includes(text)))

        setDisplay("block")
    };



    const clearContent = () => {
        setSelected([])
        setFilterdcontent(data)
        setDisplay("hidden")

    }


    const clearSelected = (list) => {
        const updatedList = selectedFilter.filter((item) => item !== list)
        setSelected(updatedList)

        setFilterdcontent(data.filter(item => !updatedList.includes(item.languages) || !updatedList.level.includes(item.list) || !updatedList.role.includes(item.list) || !updatedList.tools.includes(item.list)))
        if (updatedList.length === 0) {
            setDisplay("hidden")
        }

    }


    return (
        <>
            <div className="drop-shadow-2xl h-full bg-no-repeat pb-5" >
                <div className=" bg-[#5ba4a4] min-h-[156px] bg-cover bg-no-repeat " style={{ backgroundImage: "url(../images/bg-header-mobile.svg)" }}>

                </div>
                <div className={`relative mb-[5em] ${display} searchBar`} >

                    <div className=" sm:w-[1100px] sm:mx-auto sm:text-lg mt-10 md:top-[-6em] top-[-7em] sm:left-[21%] absolute w-full">
                        <div className=" h-[80px] overflow-hidden m-6 px-4 py-6 bg-white flex  rounded-md   flex-row justify-end items-center sm:justify-between sm:items-center gap-4 ">

                            <div className="flex gap-4 flex-wrap px-8">
                                {selectedFilter.map((list) => (
                                    <div key={list}>
                                        <li className="py-1 px-3 rounded bg-[#f0f7f8]  text-base cursor-pointer flex gap-4 font-semibold  text-[#6ca6a0]  
                        ">
                                            {list} <span className="flex items-center hover:bg-slate-500 py-1 px-2 text-[white]" onClick={() => clearSelected(list)}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#6ca6a0" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" /></svg></span>
                                        </li>
                                    </div>
                                ))}
                            </div>


                            <span><button className='mx-4 px-4  bg-slate-100 font-medium hover:text-[#5ba4a4] hover:underline ' onClick={() => clearContent()} > Clear</button></span>

                        </div>
                    </div>

                </div>
                <div className="bg-[#5ba4a4] hidden sm:block">

                </div>
                {filterContent.map((item) => {
                    return (
                        <div className=" sm:w-[1100px] sm:mx-auto sm:text-lg mt-10">
                            <div className=" h-full m-6 px-4 py-6 bg-white flex  rounded-md border-s-[6px] border-cyan-600  flex-col sm:flex-row sm:justify-between sm:items-center gap-4 ">


                                <div className="flex gap-4" >
                                    <div className="relative">
                                        <div className="absolute sm:relative top-[-50px] sm:top-0 w-14 sm:w-[100%]">
                                            <img className="" src={`.${item.logo}`} alt="eyecam" />
                                        </div>
                                    </div>


                                    <div className="gap-2 sm:gap-1 flex flex-col mt-[1em] sm:mt-0">


                                        <div className="flex flex-wrap items-center justify-start">
                                            <h1 className="font-bold text-[#6ca6a0]">{item.company}</h1>
                                            {item.new ? <p className="ml-5 px-2 py-1 rounded-full text-sm font-bold text-white bg-[#6ca6a0]">NEW!</p> : console.log("Happy")}
                                            {item.featured ? <p className="ml-2 px-2 py-1 rounded-full text-sm font-bold text-white bg-[#2b3939]">FEATURED</p> : console.log("Super Happy")}
                                        </div>

                                        <p className="font-bold cursor-pointer hover:text-[#6ca6a0]">{item.position}</p>

                                        <div className="flex flex-wrap font-semibold text-[#8b9293]">

                                            <p>{item.postedAt}</p>

                                            <ul className="flex justify-between items-center">
                                                <li className="px-4">{item.contract}</li>
                                                <li >{item.location}</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>













                                {/* image and box content done */}
                                <hr className="sm:hidden" />



                                {/* Filter Options */}



                                <div>
                                    <ul className="flex gap-4 font-bold  text-[#6ca6a0]  
                         flex-wrap">
                                        {item.languages.map((lang) => {
                                            return (<><li className="py-1 px-3 rounded bg-[#f0f7f8] hover:bg-[#6ca6a0] hover:text-white cursor-pointer" onClick={() => handleOnclick(lang)} >{lang} </li>
                                            </>)
                                        })}
                                        <li className="py-1 px-3 rounded bg-[#f0f7f8] hover:bg-[#6ca6a0] hover:text-white cursor-pointer" onClick={() => handleOnclick(item.level)}> {item.level}</li>
                                        <li className="py-1 px-3 rounded bg-[#f0f7f8] hover:bg-[#6ca6a0] hover:text-white cursor-pointer" onClick={() => handleOnclick(item.role)}> {item.role}</li>
                                        {item.tools.map((tool) => {
                                            return <li className="py-1 px-3 rounded bg-[#f0f7f8] hover:bg-[#6ca6a0] hover:text-white cursor-pointer" onClick={() => handleOnclick(tool)}> {tool}</li>
                                        })

                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div >



        </>
    );
}

export default JoblistingCard;