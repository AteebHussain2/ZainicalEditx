import React from 'react';
import { FaInstagram, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id='contact' className="bg-background border-t border-text border-opacity-5 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold">Contact</h3>
                        <div className="flex items-center space-x-3">
                            <FaPhone className="text-yellow-400" />
                            <a href="tel:+923354163449" className="hover:text-yellow-400 transition-all">
                                +92 335 4163449
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-yellow-400" />
                            <a href="mailto:zainic00133@gmail.com" className="hover:text-yellow-400 transition-all">
                                zainic00133@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold">Instagram</h3>
                        <div className="flex items-center space-x-3">
                            <FaInstagram className="text-yellow-400" />
                            <a
                                href="https://www.instagram.com/ali_zai9?igsh=bDVtZmJqa3ZwdGht"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-all">
                                @ali_zai9
                            </a>
                        </div>
                    </div>

                    {/* TikTok */}
                    <div className="hidden flex-col space-y-4">
                        <h3 className="text-xl font-semibold">TikTok</h3>
                        <div className="flex items-center space-x-3">
                            <FaTiktok className="text-yellow-400" />
                            <a
                                href="https://www.tiktok.com/@malik.ali.zain?_t=ZS-8tu5zmQMmm1&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-all">
                                @malik.ali.zain
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold">Email</h3>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-yellow-400" />
                            <a
                                target='_blank'
                                href="mailto:zainic00133@gmail.com" className="hover:text-yellow-400 transition-all">
                                zainicool33@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-text border-opacity-5 mt-8 pt-12 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} <a href="https://dynamic-portfolios.vercel.app/ateeb" target='_blank'>Ateeb Hussain</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;