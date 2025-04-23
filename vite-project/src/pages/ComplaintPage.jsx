"use client"

import { useState } from "react"
import BottomNavigation from "../components/BottomNavigation"

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    description: "",
    location: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Complaint submitted successfully!")
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      title: "",
      description: "",
      location: "",
    })
  }

  return (
    <div className="main-screen bg-black flex flex-col relative">
      <h2 className="text-3xl font-bold p-12 text-center text-white">Report a Complaint</h2>

      <form
        onSubmit={handleSubmit}
        className="feed-container flex flex-col p-5 relative rounded-t-3xl bg-white h-full overflow-y-auto"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
          <div className="mt-1 flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 hover:bg-gray-50">
            <input type="file" accept="image/*" className="hidden" id="file-upload" />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center text-gray-500 cursor-pointer"
            >
              <svg width="45" height="45" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d=" M 600 175C 610 175 619 181 623 191C 623 191 650 275 650 275C 655 285 660 299 675 300C 675 300 825 300 825 300C 850 300 875 325 875 350C 875 350 875 750 875 750C 875 775 850 800 825 800C 825 800 175 800 175 800C 150 800 125 775 125 750C 125 750 125 350 125 350C 125 325 150 300 175 300C 175 300 325 300 325 300C 337 300 346 286 350 275C 350 275 377 191 377 191C 381 181 390 175 400 175C 400 175 600 175 600 175M 312 525C 312 628 397 713 500 713C 603 713 688 628 688 525C 688 422 603 337 500 337C 397 337 312 422 312 525C 312 525 312 525 312 525M 613 525C 613 588 563 638 500 638C 437 638 387 588 387 525C 387 462 437 412 500 412C 563 412 613 462 613 525C 613 525 613 525 613 525" />
              </svg>
              <span className="text-sm mt-2">Click to upload or drag and drop</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Issue Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          ></textarea>
        </div>

        <div className="mb-8">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. MG Road, Bangalore"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition mb-16"
        >
          Submit Complaint
        </button>
      </form>

      <BottomNavigation />
    </div>
  )
}
