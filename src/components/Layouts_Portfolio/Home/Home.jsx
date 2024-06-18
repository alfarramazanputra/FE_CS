import React from 'react'

const Home = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(to left, rgba(95, 145, 255, 0.7), rgba(0, 0, 139, 0.9)), url('/image/building.png')"}}>
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center">
        <img src="/image/whiteLogo.png" alt="" className="mb-4" />
        <h1 className="text-white text-3xl font-semibold">Casatech Portfolio</h1>
        <p className="text-white text-lg">Home/Portfolio</p>
      </div>
    </div>
  </div>
  )
}

export default Home
