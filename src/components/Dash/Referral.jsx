import React, { useState } from "react";
import { FaCopy, FaShareAlt } from "react-icons/fa";

const Referral = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://bitphyte.com/referral?code=FREEMAN026";

  // Dummy stats - replace with real data if available
  const referrals = 12;
  const bonusPerReferral = 15; // in USD
  const totalBonus = referrals * bonusPerReferral;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join this amazing project!",
          text: "Check out this project and earn rewards by referring friends!",
          url: referralLink,
        });
      } catch (error) {
        console.error("Share failed:", error.message);
      }
    } else {
      alert("Sharing is not supported in this browser. Please copy the link manually.");
    }
  };

  return (
    <div className="bg-navy rounded-xl text-softGray px-6 py-8">
      {copied && (
        <p className="text-center text-greenGray mb-4 font-semibold">Referral link copied!</p>
      )}

      <h2 className="text-3xl font-heading font-bold text-center mb-5">Refer and Earn</h2>
      <p className="text-md md:text-lg font-medium text-center mb-8 px-4">
        Invite your friends to join our platform and earn rewards for every successful referral. 
        Simply share your unique referral link below, and when someone signs up using your link, 
        you'll both benefit. Start growing your network and your earnings today!
      </p>

      {/* Referral Link Box */}
      <div className="bg-gradient-to-r from-navy via-greenGray to-navy border border-softGray rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 max-w-full break-all select-text mb-8">
        <span className="text-sm md:text-base font-semibold">{referralLink}</span>
        <div className="flex gap-4">
          <button
            onClick={handleCopy}
            aria-label="Copy referral link"
            className="p-2 rounded-md hover:bg-greenGray hover:bg-opacity-50 transition flex items-center justify-center"
          >
            <FaCopy size={20} />
          </button>
          <button
            onClick={handleShare}
            aria-label="Share referral link"
            className="p-2 rounded-md hover:bg-greenGray hover:bg-opacity-50 transition flex items-center justify-center"
          >
            <FaShareAlt size={20} />
          </button>
        </div>
      </div>

      {/* Referral Stats Section */}
      <div className="bg-navyAlt border border-softGray rounded-xl p-6 text-center">
        <h3 className="text-2xl font-heading font-bold text-greenGray mb-4">Your Referral Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg font-medium">
          <div>
            <p className="text-greenGray text-sm mb-1">Referrals Made</p>
            <p className="text-white text-xl font-bold">{referrals}</p>
          </div>
          <div>
            <p className="text-greenGray text-sm mb-1">Bonus per Referral</p>
            <p className="text-white text-xl font-bold">${bonusPerReferral}</p>
          </div>
          <div>
            <p className="text-greenGray text-sm mb-1">Total Bonus Earned</p>
            <p className="text-white text-xl font-bold">${totalBonus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;



