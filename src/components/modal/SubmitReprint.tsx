import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { FaCode, FaCommentDots, FaHistory } from "react-icons/fa";

export default function SubmitReprint({ isOpen, onClose, modalRef, message }: any) {
  if (!isOpen) return;

  const contactAdmins: any = {
    admins: [
      {
        name: "Dev_Macmac",
        link: "https://chat.smctgroup.ph/direct/9rSGAuSQvW7LY7uxQQftTyPFraEgBtS8u9",
        profile_picture: "https://chat.smctgroup.ph/avatar/Dev_Macmac",
        position: "Junior Web Developer",
      },
      {
        name: "Dev_Allan-J",
        link: "https://chat.smctgroup.ph/direct/9rSGAuSQvW7LY7uxQgR7v7bvZDtwJLZudt",
        profile_picture: "https://chat.smctgroup.ph/avatar/Dev_Allan-J",
        position: "Web Developer",
      },
      {
        name: "dev_jenecil",
        link: "https://chat.smctgroup.ph/direct/9rSGAuSQvW7LY7uxQgR7v7bvZDtwJLZudt",
        profile_picture: "https://chat.smctgroup.ph/avatar/dev_jenecil",
        position: "Web Developer",
      },
      {
        name: "dev_zart",
        link: "https://chat.smctgroup.ph/direct/9rSGAuSQvW7LY7uxQk87qvZewTK4mnjHah",
        profile_picture: "https://chat.smctgroup.ph/avatar/dev_zart",
        position: "Frontend Developer",
      },
    ],
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="grid items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900/50 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md md:max-w-lg w-full">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5"
          >
            <FaXmark className="text-gray-500" />
          </button>
          <div
            className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-full"
            ref={modalRef}
          >
            <div className="px-6 pt-6 pb-2 border-b border-gray-100">
              <h4 className="text-lg font-semibold text-blue-500 flex items-center">
                <FaHistory className="w-5 h-5 mr-2" />
                {message}
              </h4>
              <p className="text-xl text-gray-500 mt-1">
                For reprint requests, please contact the development team.
              </p>
              <p className="font-bold text-xl">
                Please provide your{" "}
                <span className="text-red-500 uppercase">reference number</span>{" "}
                from the receipt when requesting a reprint.
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {contactAdmins.admins.map((item: any, index: number) => (
                <div
                  key={index}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-medium">
                            <img
                              src={item.profile_picture}
                              alt={item.name}
                              className="h-10 w-10 rounded-full"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h5>
                        <p className="text-xs text-gray-500">{item.position}</p>
                      </div>
                    </div>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                    >
                      <FaCommentDots className="-ml-0.5 mr-1.5 h-3 w-3" />
                      Message
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-3 bg-gray-50 text-center">
              <p className="text-xs text-gray-500">
                Typically responds within 1 business day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
