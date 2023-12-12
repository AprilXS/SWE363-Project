import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  //const [ready,setReady] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data);
        // setReady(true); // Uncomment this line if you need to set ready state
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [user]); // Make sure to include user as a dependency if needed

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

