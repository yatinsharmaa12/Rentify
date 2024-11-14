import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faHeart, faGift, faLocationDot, faWallet, faUnlockKeyhole, faFolderOpen, faHeadset, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser, faHeart as farHeart, faFolderOpen as farFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className="w-full h-[1000px] text-center bg-white flex flex-col items-center justify-center border border-white">
            <div className="w-[95%] h-[30%] flex flex-row items-center justify-evenly bg-white">
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={farUser} className="text-6xl mt-10 mb-12" />
                    <h2>Your Profile</h2>
                </div>
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={faBox} className="text-6xl mt-10 mb-12" />
                    <h2>Orders</h2>
                </div>
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={farHeart} className="text-6xl mt-10 mb-12" />
                    <Link to='/wishlist' className="text-black no-underline">
                        <h2>Wishlist</h2>
                    </Link>
                </div>
            </div>
            <div className="w-[95%] h-[30%] flex flex-row items-center justify-evenly bg-white mt-4">
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={faGift} className="text-6xl mt-10 mb-12" />
                    <h2>Gift Cards</h2>
                </div>
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={faLocationDot} className="text-6xl mt-10 mb-12" />
                    <h2>Your Address</h2>
                </div>
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={faWallet} className="text-6xl mt-10 mb-12" />
                    <h2>Payment Option</h2>
                </div>
            </div>
            <div className="w-[95%] h-[30%] flex flex-row items-center justify-evenly bg-white mt-4">
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={faUnlockKeyhole} className="text-6xl mt-10 mb-12" />
                    <h2>Login & Security</h2>
                </div>
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={farFolderOpen} className="text-6xl mt-10 mb-12" />
                    <h2>Archived Orders</h2>
                </div>
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={faHeadset} className="text-6xl mt-10 mb-12" />
                    <h2>Help Center</h2>
                </div>
            </div>
            <div className="w-[95%] h-[30%] flex items-center justify-start bg-white mt-4 ml-[50px]">
                <div className="w-[28%] h-[86%] border-3 border-gray-300 bg-white rounded-2xl font-bold text-lg hover:border-gray-500 hover:shadow-lg">
                    <FontAwesomeIcon icon={faHandHoldingDollar} className="text-6xl mt-10 mb-12" />
                    <h2>Premium</h2>
                </div>
            </div>
        </div>
    );
}

export default Account;
