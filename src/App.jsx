import React, { useState, useEffect } from "react";
import MubasEmailUI from "./mail";
import MubasStudentSystemUI from "./portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faTableCells,
  faBell,
  faUser,
  faSignOut,
  faClone,
  faKey,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function StudentPortalAccommodation() {
  const [showUserModal, setShowUserModal] = useState(false);
  const [lastLogin, setLastLogin] = useState("");
  const navigate = useNavigate();

  const allocationData = [
    {
      year: "2025",
      hostelName: "Kenyatta",
      roomNumber: "9",
      date: "31st May 2025",
    },
    {
      year: "2024",
      hostelName: "Kanjedza",
      roomNumber: "7",
      date: "31st May 2024",
    },
    { year: "2024", hostelName: "--", roomNumber: "--", date: "--" },
    { year: "2023", hostelName: "--", roomNumber: "--", date: "--" },
    {
      year: "2023",
      hostelName: "Mbelwa",
      roomNumber: "7",
      date: "20th April 2022",
    },
  ];

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  useEffect(() => {
    const updateLastLogin = () => {
      const now = new Date();
      const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatted = now.toLocaleString("en-US", options).replace(",", "");
      setLastLogin(formatted);
    };

    updateLastLogin();
    const intervalId = setInterval(updateLastLogin, 60000); // update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/portal" element={<MubasStudentSystemUI />} />
        <Route path="/mail" element={<MubasEmailUI />} />
        <Route
          path="/"
          element={
            <div className="w-screen mx-auto bg-gray-200 h-screen px-2 sm:px-0">
              {/* Header */}
              <div className="bg-[#022aa4] mb-0.5 text-white p-4">
                <div className="flex justify-evenly space-x-2.5">
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center">
                      <div className="w-10 h-10 bg-[#022aa4] rounded-sm flex items-center justify-center">
                        <img
                          className="w-[40px] h-[32px] sm:w-[50px] sm:h-[40px]"
                          src="./images/image.png"
                          alt="Logo"
                        />
                      </div>
                    </div>
                    <span className="text-xl sm:text-2xl font-light flex items-center justify-center">
                      Student Portal
                    </span>
                  </div>
                </div>
              </div>

              {/* Hamburger menu icon */}
              <div className="bg-[#022aa4] p-4 pb-2">
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-1">
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faBell}
                      className="w-5 h-5 text-white"
                    />
                    <FontAwesomeIcon
                      icon={faTableCells}
                      className="w-5 h-5 text-white"
                    />
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-5 h-5 text-[#f4f4f4] bg-gray-200 rounded-2xl p-1 cursor-pointer"
                      onClick={toggleUserModal}
                    />
                  </div>
                </div>
              </div>

              {/* User Modal */}
              {showUserModal && (
                <div className="fixed top-20 right-4 sm:right-4 bg-[#022aa4] text-white rounded shadow-lg w-64 z-50 max-w-full sm:max-w-xs">
                  <div className="p-6 border-b border-gray-300">
                    <div className="font-normal text-center text-[12px] ">
                      BED/COM/02/21 - Simeon Gama
                    </div>
                    <div className="text-[9px] text-center mt-1">
                      Last Login: {lastLogin}
                    </div>
                  </div>
                  <div className="bg-[#96823f] h-12 flex justify-start items-center ">
                    <div>
                      <span className="border-2 text-[12px] text-gray-700 border-gray-400 p-2 m-2">
                        <FontAwesomeIcon icon={faKey} />
                        Change password
                      </span>
                      <span className="border-2 text-[12px] text-gray-700 border-gray-400 p-2 m-2">
                        <FontAwesomeIcon icon={faSignOut} /> Log out
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* My Accommodation Banner */}
              <div className="bg-[#96823f] m-3 rounded-[4px] text-white px-4 py-3">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                  <span className="font-medium text-sm sm:text-base">
                    MY ACCOMMODATION
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 sm:p-6 bg-gray-50">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  The Room Booking and Allocation System lets you sort out all
                  your campus accommodation issues. The navigation menu below
                  provides all the navigation you need for the system.
                </p>
              </div>

              {/* Navigation Menu */}
              <div className="bg-white">
                <div className="flex items-center p-3 sm:p-4 border-b border-gray-200">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 bg-[#83bff3] rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="w-5 sm:w-6 h-5 sm:h-6 text-blue-800"
                    />
                  </div>
                  <span className="text-[#022aa4] font-medium text-sm sm:text-base">
                    Apply for Rooms
                  </span>
                </div>

                <div className="flex items-center p-3 sm:p-4 border-b border-gray-200">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 bg-[#83bff3] rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FontAwesomeIcon
                      icon={faClone}
                      className="w-5 sm:w-6 h-5 sm:h-6 text-blue-800"
                    />
                  </div>
                  <span className="text-[#022aa4] font-medium text-sm sm:text-base">
                    Swap Rooms
                  </span>
                </div>

                <div className="flex items-center p-3 sm:p-4 border-b border-gray-200">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 bg-[#83bff3] rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="w-4 sm:w-5 h-4 sm:h-5 text-blue-800"
                    />
                  </div>
                  <span className="text-[#022aa4] font-medium text-sm sm:text-base">
                    Accomm. Rules
                  </span>
                </div>

                <div className="flex items-center p-3 sm:p-4 border-b border-gray-200">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 bg-[#83bff3] rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      className="w-5 sm:w-6 h-5 sm:h-6 text-blue-800"
                    />
                  </div>
                  <span className="text-[#022aa4] font-medium text-sm sm:text-base">
                    My Bills
                  </span>
                </div>
              </div>

              {/* Allocation History */}
              <div className="mt-8 mx-2 sm:mx-4">
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">
                  Allocation History
                </h3>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b">
                    <div className="grid grid-cols-4 gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                      <span>Allocation Year</span>
                      <span>Hostel Name</span>
                      <span>Room Number</span>
                      <span>Date</span>
                    </div>
                  </div>
                  {allocationData.map((item, index) => (
                    <div
                      key={index}
                      className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-300 last:border-b-0"
                    >
                      <div className="grid grid-cols-4 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-800">
                        <span>{item.year}</span>
                        <span className="">{item.hostelName}</span>
                        <span className="ml-8">{item.roomNumber}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons for routing */}
              <div className="flex justify-center space-x-4 my-6">
                <button
                  onClick={() => navigate("/portal")}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Go to Portal
                </button>
                <button
                  onClick={() => navigate("/mail")}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                  Go to Mail
                </button>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}
