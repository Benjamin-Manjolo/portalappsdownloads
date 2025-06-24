import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDownload,
  faTrash,
  faEnvelope,
  faStar,
  faReply,
  faReplyAll,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

export default function MubasEmailUI() {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-300 shadow-sm rounded-md overflow-hidden font-sans">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faArrowLeft} className="text-gray-600" />
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faDownload} className="text-gray-600" />
          <FontAwesomeIcon icon={faTrash} className="text-gray-600" />
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
        </div>
      </div>

      {/* Subject */}
      <div className="px-4 pt-3">
        <h2 className="text-base font-semibold">(no subject)</h2>
        <span className="text-sm text-gray-400">Inbox</span>
      </div>

      {/* Sender Info */}
      <div className="flex items-center px-4 py-3">
        <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
          S
        </div>
        <div className="ml-3">
          <div className="text-sm font-semibold">Sphiwe Nyirongo</div>
          <div className="text-xs text-gray-500">Apr 11 · to me</div>
        </div>
      </div>

      {/* Message Body Preview */}
      <div className="px-4">
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="p-3 text-center">
            <div className="text-sm font-bold">CURRICULUM VITAE</div>
            <div className="mt-2 text-xs">
              SPHIWE NYIRONGO <br />
              Post Office Box 1285 <br />
              Lilongwe <br />
              Email: sphiwenyirongo@gmail.com <br />
              Cell: +265996108645
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-100 p-2 border-t">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                PDF
              </div>
              <span className="text-sm font-medium truncate">
                SPHIWE NYI...GO CV.pdf
              </span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <FontAwesomeIcon icon={faDownload} className="cursor-pointer" />
              <FontAwesomeIcon
                icon={faGoogleDrive}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-around border-t mt-4 px-4 py-2 bg-gray-50">
        <button className="text-blue-600 text-sm font-medium">
          <FontAwesomeIcon icon={faReply} className="mr-1" />
          Reply
        </button>
        <button className="text-blue-600 text-sm font-medium">
          <FontAwesomeIcon icon={faReplyAll} className="mr-1" />
          Reply all
        </button>
        <button className="text-blue-600 text-sm font-medium">
          <FontAwesomeIcon icon={faShare} className="mr-1" />
          Forward
        </button>
      </div>
    </div>
  );
}
