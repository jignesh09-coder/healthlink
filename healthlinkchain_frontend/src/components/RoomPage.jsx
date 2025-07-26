import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 504467755;
        const serverSecret = "06fd53ed06fa5f155566288f4ed7f039";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Henry"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:5173/room/${roomId}` // Use backticks for template literals
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

    return (
        <div className="flex flex-col items-center  justify-center h-screen bg-white">
            <div className=" w-[800px] bg-white p-8 rounded-lg bg-indigo-950 shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Your health is our top priority
                </h2>
                <div ref={myMeeting} className="flex justify-center items-center h-96 " />
            </div>
        </div>
    );
};

export default RoomPage;
