import Image from 'next/image';
import React from 'react';

const SideBar = ({ user }) => {
    return (
        <div className="hidden md:block w-[20%] h-fit border border-black">
            <div className="flex relative flex-col items-center">
                <div className="w-full h-16 overflow-hidden">
                    {user && (
                        <Image
                            src="/banner.jpg"
                            alt="Banner"
                            width={200}
                            height={200}
                            className="w-full h-full rounded-t"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
