
import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

// Array of profile images to cycle through
const profileImages = [
  "/assets/profile1.jpg", // Replace these with your actual image paths
  "/assets/profile2.jpg",
  "/assets/profile3.jpg",
];

const ProfilePicture: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mb-8">
      <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-purple shadow-lg animate-float">
        <AvatarImage 
          src={profileImages[currentImageIndex]} 
          alt="Profile picture"
          className="object-cover transition-opacity duration-500"
        />
        <AvatarFallback className="bg-purple/10 text-purple">
          <UserRound size={60} />
        </AvatarFallback>
      </Avatar>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple to-purple-light/50 opacity-20 blur-md -z-10"></div>
    </div>
  );
};

export default ProfilePicture;
