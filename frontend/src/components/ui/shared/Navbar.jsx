import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // const logoutHandler = async()=>{
  //   try {
  //     const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
  //     if(res.data.success){
  //       dispatch(setUser(null));
  //       navigate("/");
  //       toast.success(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message);
      
  //   }
  // }

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      console.log("Response from logout API:", res);
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error during logout:", error);
      toast.error(error.response?.data?.message || "Logout failed.");
    }
  };
  

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-3xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="outline" >Login</Button></Link>
              <Link to="/singup"><Button variant="outline" className=" bg-[#a55fe2fe] hover:bg-[#9530c8]">Singup</Button></Link>
              
            </div>
          ) : (
            <Popover className="border-none ">
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    className="rounded-full h-9 w-9"
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 h-auto">
                <div></div>
                <div className="flex  gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className="rounded-full h-9 w-9"
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"> <Link to="/profile">View profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
