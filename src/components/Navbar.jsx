"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa"; // Caregiving Icon
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";

const Navbar = () => {
  const { data: session } = useSession();
  const [nav, setNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
  ];

  return (
    <nav className="bg-[#030712]/80 backdrop-blur-md border-b border-blue-900/30 text-slate-200 fixed top-0 z-50 w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <FaHeartbeat className="text-3xl text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-sans font-bold tracking-tight text-white">
              Care<span className="text-blue-500">.io</span>
            </span>
          </Link>

          {/* Desktop Links (Public) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-sm font-semibold text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}

            {session ? (
              <div className="flex items-center gap-4">
                <Tooltip title="Account settings">
                  <IconButton onClick={handleClick} size="small">
                    <Avatar
                      src={session?.user?.image}
                      alt={session?.user?.name || "User"}
                      sx={{
                        width: 38,
                        height: 38,
                        border: "2px solid #2563eb",
                      }}
                    />
                  </IconButton>
                </Tooltip>

                {/* Profile Dropdown Menu */}
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  disableScrollLock={true}
                  PaperProps={{
                    sx: {
                      bgcolor: "#0f172a", // Dark Blue-ish Gray
                      color: "#e2e8f0",
                      mt: 1.5,
                      minWidth: 180,
                      boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                      border: "1px solid #1e3a8a",
                      "& .MuiMenuItem-root": {
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        py: 1.5,
                        "&:hover": {
                          bgcolor: "#1e293b",
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="px-4 py-2 border-b border-blue-900/50">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Signed in as
                    </p>
                    <p className="text-sm font-bold text-blue-400 truncate">
                      {session?.user?.email}
                    </p>
                  </div>

                  <MenuItem onClick={handleClose}>
                    <Link href="/profile" className="w-full">
                      My Profile
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <Link href="/my-bookings" className="w-full">
                      My Bookings
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <Link href="/my-services" className="w-full">
                      My Services
                    </Link>
                  </MenuItem>

                  <Divider sx={{ bgcolor: "#1e3a8a" }} />

                  <MenuItem
                    onClick={() => {
                      handleClose();
                      signOut({ callbackUrl: "/login" });
                    }}
                    className="text-red-400 hover:text-red-300"
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNav(!nav)}
              className="text-2xl text-blue-400"
            >
              {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#030712] transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-6 gap-6 pt-20">
          <button
            onClick={() => setNav(false)}
            className="absolute top-5 right-5 text-3xl text-blue-500"
          >
            <AiOutlineClose />
          </button>

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setNav(false)}
              className="text-xl font-bold text-slate-200 border-b border-blue-900/30 pb-2 hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {session ? (
            <>
              <Link
                href="/profile"
                onClick={() => setNav(false)}
                className="text-xl font-bold text-slate-200 border-b border-blue-900/30 pb-2 hover:text-blue-400"
              >
                My Profile
              </Link>
              <Link
                href="/my-bookings"
                onClick={() => setNav(false)}
                className="text-xl font-bold text-slate-200 border-b border-blue-900/30 pb-2 hover:text-blue-400"
              >
                My Bookings
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="text-xl font-bold text-red-400 text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setNav(false)}
              className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold shadow-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
