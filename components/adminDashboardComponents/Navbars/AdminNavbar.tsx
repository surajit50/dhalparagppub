"use client";

import SignOutButton from "@components/SignOutButton";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
const AdminNavbar = () => {
  return (
    <nav className=" flex justify-between items-center px-3 p-1">
      <input
        placeholder="Search"
        className="p-2 rounded-lg bg-gray-100 block w-full border-0 hover:boder-0"
      />
      <div className="p-2">
        <Menu>
          <MenuHandler>
            <Avatar
              variant="circular"
              alt="tania andrew"
              className="cursor-pointer"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
          </MenuHandler>
          <MenuList>
            <MenuItem className="flex items-center gap-2">
              <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                My Profile
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                Edit Profile
              </Typography>
            </MenuItem>

            <MenuItem className="flex items-center gap-2">
              <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                Notification
              </Typography>
            </MenuItem>
            <hr className="my-2 border-blue-gray-50" />
            <MenuItem className="flex items-center gap-2 ">
              <PowerIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                Sign Out
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default AdminNavbar;
