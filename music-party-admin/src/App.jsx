import 'remixicon/fonts/remixicon.css';
import 'flowbite';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Dashboard from './components/contents/Dashboard';
import Inbox from './components/contents/Inbox';
import PendingApproval from './components/contents/PendingApproval';
import User from './components/contents/User';
import Song from './components/contents/Song';
import Playlist from './components/contents/Playlist';
import Artist from './components/contents/Artist';
import Room from './components/contents/Room';
import Setting from './components/contents/Setting';
import Support from './components/contents/Support';
import { UserProvider } from 'contexts/UserContext';
import { SongProvider } from 'contexts/SongContext';
import { ArtistProvider } from 'contexts/ArtistContext';
import { RoomProvider } from 'contexts/RoomContext';
import { PlaylistProvider } from 'contexts/PlaylistContext';
import { PendingApprovalProvider } from 'contexts/PendingApprovalContext';

function App() {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <div className="text-center w-screen h-screen py-60">
                <span className="loader h-20 w-20"></span>
            </div>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="inboxes" element={<Inbox />} />
                <Route
                    path="pending-approval"
                    element={
                        <PendingApprovalProvider>
                            <PendingApproval />
                        </PendingApprovalProvider>
                    }
                />
                <Route
                    path="users"
                    element={
                        <UserProvider>
                            <User />
                        </UserProvider>
                    }
                />
                <Route
                    path="songs"
                    element={
                        <SongProvider>
                            <Song />
                        </SongProvider>
                    }
                />
                <Route
                    path="playlist"
                    element={
                        <PlaylistProvider>
                            <Playlist />
                        </PlaylistProvider>
                    }
                />
                <Route
                    path="artists"
                    element={
                        <ArtistProvider>
                            <Artist />
                        </ArtistProvider>
                    }
                />
                <Route
                    path="rooms"
                    element={
                        <RoomProvider>
                            <Room />
                        </RoomProvider>
                    }
                />
                <Route path="settings" element={<Setting />} />
                <Route path="support" element={<Support />} />
            </Route>
        </Routes>
    );
}

export default App;
