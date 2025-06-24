import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEnvelope,
  faBell,
  faBars,
  faMoneyBill1,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function MubasStudentSystemUI() {
  return (
    <div className=" w-screen bg-gray-100 ">
      {/* Top Header */}
      <div className="bg-[#046599] text-[5px] m-3">
        <div className="flex  p-4 items-center p-4">
          <img
            src="https://students.unima.ac.mw/dist/img/logoo.png"
            width="40"
            className="bg-white rounded-sm"
          />
          <div>
            <h1 className="font-medium ml-3 text-black">STUDENT INFORMATION</h1>
            <h2 className="text-lg ml-3 text-black">SYSTEM</h2>
          </div>
        </div>
      </div>

      {/* User Account Section */}
      <div className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <div>
            <h3 className="font-semibold text-gray-900">PETER</h3>
            <p className="text-sm  text-gray-500">Student account</p>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-5 h-5  text-gray-400 ml-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-6 h-6 shadow rounded-3xl text-gray-400"
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faBell}
              className="w-6 h-6 shadow rounded-3xl text-gray-400"
            />
            <span className="absolute -top-2 -right-2 bg-red-500  text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Header */}
      <div className="bg-[#046599] text-white h-12">
        <div className="flex text-[5px] font-medium items-center">
          <img
            src="https://students.unima.ac.mw/dist/img/logoo.png"
            width="32"
            className="bg-white rounded-sm"
          />
          <h1 className="ml-3 text-black">STUDENT INFORMATION</h1>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-[#7AB1D4] p-4 h-12">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faBars}
            className="w-8 h-6 rounded-sm border text-gray-500 border-blue-900"
          />
        </div>
      </div>

      {/* Dark Blue Navigation */}
      <div className="bg-[#094068] p-4 h-12 border-b-4 border-blue-500">
        <div className="flex justify-end">
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-gray-200" />
        </div>
      </div>

      {/* Content Cards */}
      <div className="p-4 space-y-4">
        {/* Account Balance Card */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
          <div className="flex items-center p-4">
            <div className="bg-blue-500 rounded-full p-3 mr-4">
              <FontAwesomeIcon
                icon={faMoneyBill1}
                className="w-6 h-6 text-white"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-600 text-sm mb-1">Account Balance</h3>
              <p className="text-2xl   text-gray-900"> (0.00)</p>
            </div>
          </div>
        </div>

        {/* Registration Status Card */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-red-500">
          <div className="flex items-center p-4">
            <div className="bg-red-500 rounded-full p-3 mr-4">
              <FontAwesomeIcon icon={faUsers} className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-600 text-sm mb-1">
                Registration status
              </h3>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900 mr-2">
                  BMMP3
                </span>
                <span className="text-blue-500 text-sm">Not Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
