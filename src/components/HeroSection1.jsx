import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
function HeroSection1(props) {
  //State for chatImageBtn
  const [chatImages, setChatImages] = useState(true);

  //State for showing Chats or not
  const [showChats, setShowChats] = useState(false);

  //Contains all bots
  const [bots, setBots] = useState([
    {
      id: 1,
      botName: "Caressa Jessalin",
      botDescription: "Lorem ipsum dolor sit amet..",
      chatHistory: [
        { sender: 1, message: "Hello there!" },
        { sender: 0, message: "Hi! How are you?" },
      ],
    },
    {
      id: 2,
      botName: "Letty Bride",
      botDescription: "Lorem ipsum dolor sit amet..",
      chatHistory: [
        { sender: 1, message: "Hello there! second" },
        { sender: 0, message: "Hi! How are you? second" },
      ],
    },
  ]);

  //Stores the ID for Current Bot.
  const [currBot, setCurrBot] = useState(0);

  //Stores the Details for Current Bot.
  const [currBotDetails, setCurrBotDetails] = useState({
    id: 1,
    botName: "Caressa Jessalin",
    botDescription: "Lorem ipsum dolor sit amet..",
    chatHistory: [
      { sender: 1, message: "Hello there!" },
      { sender: 0, message: "Hi! How are you?" },
    ],
  });

  //Handling chatImagesBtn
  const handleChatImages = () => {
    chatImages ? setChatImages(false) : setChatImages(true);
  };

  //Finding ID for selected bot.
  const findID = (bot, botId) => {
    if (bot.id === botId) return true;
    return false;
  };

  //Updating Bots
  const updateBots = () => {
    setBots(
      bots.map((bot) => {
        if (bot.id === currBotDetails.id)
          return {
            id: currBotDetails.id,
            botName: currBotDetails.botName,
            botDescription: currBotDetails.botDescription,
            chatHistory: currBotDetails.chatHistory,
          };
        else return bot;
      })
    );
  };

  //handle bot selection event.
  const handleBot = (botId) => {
    updateBots();
    const bot = bots.find((bot) => findID(bot, botId));
    setCurrBotDetails(bot);
    setCurrBot(botId);
    setShowChats(1);
  };

  //Handle message submition event.
  const handleForm = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    if (message === "") return alert("Message can't be empty.");
    event.target.reset();
    setCurrBotDetails({
      id: currBotDetails.id,
      botName: currBotDetails.botName,
      botDescription: currBotDetails.botDescription,
      chatHistory: [
        ...currBotDetails.chatHistory,
        { sender: 0, message: message },
      ],
    });
  };
  return (
    <>
    // Sidebar
      <Sidebar sideBar={props.sideBar} setSideBar={props.setSideBar} handleChatImages={handleChatImages} chatImages={chatImages} bots={bots} currBot={currBot} handleBot={handleBot} />
      <section>
        <div className="superContainer">
          <div className="container">
            <div className="subContainer" id="leftSubContainer">
              <h3 className="subContainerItem">ALL YOUR CHATS</h3>
              <button
                className="chatImagesBtn subContainerItem"
                onClick={() => handleChatImages()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M8.48381 0.050705C6.90679 0.250885 5.154 1.01743 3.89433 2.04762C3.53303 2.34544 2.82996 3.04851 2.52237 3.41469C1.90719 4.15682 1.27247 5.32372 0.94535 6.32462C0.632875 7.28157 0.540109 7.83817 0.515697 8.95624C0.48152 10.3819 0.618228 11.2119 1.11135 12.5741C1.50195 13.658 1.62889 14.3074 1.62889 15.3034C1.62889 16.3629 1.46289 17.2466 1.08694 18.145L0.896526 18.599L1.09182 18.6478C2.2099 18.9506 3.5965 18.6723 4.48022 17.9643C5.21258 17.3784 5.31512 17.3638 6.10607 17.7007C7.23391 18.184 8.39592 18.4135 9.70441 18.4135C10.9445 18.4135 11.9699 18.2377 13.0391 17.8374C17.2819 16.2506 19.6938 11.7978 18.7613 7.28157C18.4928 5.99749 17.8043 4.53277 16.9695 3.48793C15.5096 1.65214 13.3272 0.397358 11.0422 0.0702362C10.4856 -0.00788307 9.05017 -0.0176487 8.48381 0.050705ZM5.31023 8.04811C5.81312 8.27758 6.08654 8.69747 6.09142 9.24918C6.09142 9.53725 6.06701 9.63001 5.94495 9.8546C5.71059 10.2843 5.2907 10.5333 4.79758 10.5381C4.29957 10.543 3.73321 10.1476 3.57209 9.68372C3.34262 9.00995 3.69903 8.26782 4.37281 8.01882C4.61693 7.93093 5.08564 7.94558 5.31023 8.04811ZM10.2854 8.0774C10.7248 8.28735 11.0178 8.75118 11.0178 9.22477C11.0178 9.59095 10.925 9.83508 10.6858 10.0938C10.0608 10.7774 9.02087 10.6553 8.58146 9.8546C8.45939 9.6349 8.43498 9.53725 8.43498 9.24918C8.43498 8.70235 8.7084 8.28247 9.21129 8.04323C9.47006 7.92605 10.0071 7.9407 10.2854 8.0774ZM15.1727 8.07252C15.4657 8.20923 15.7928 8.55588 15.8709 8.82441C16.1199 9.64466 15.5877 10.4551 14.7577 10.5284C13.5469 10.6407 12.8682 9.14665 13.7422 8.31176C14.1181 7.95046 14.704 7.85281 15.1727 8.07252Z"
                    fill="#050505"
                  />
                  <path
                    d="M20.4203 7.18881C20.4203 7.19857 20.4544 7.41828 20.4935 7.67705C20.8206 9.88879 20.4007 12.3105 19.3364 14.3025C17.4322 17.8618 13.7216 20.0784 9.68381 20.0589C9.34693 20.0589 8.89286 20.0393 8.67803 20.0149C8.46321 19.9954 8.27768 19.9856 8.26791 19.9954C8.23862 20.0247 8.70733 20.7473 9.01004 21.133C10.3966 22.8809 12.3203 24.0527 14.5614 24.5116C15.0594 24.6142 15.2547 24.6288 16.2946 24.6288C17.232 24.6288 17.564 24.6093 17.9546 24.536C18.5747 24.4238 19.3998 24.1747 19.932 23.9453C20.5081 23.6914 20.6058 23.6719 20.8157 23.7256C20.9183 23.7549 21.1819 23.9209 21.4065 24.1015C22.1828 24.7167 22.964 24.995 23.9307 24.995C24.4336 24.995 25.0097 24.912 25.0927 24.8339C25.1074 24.8143 25.0683 24.6874 25.0097 24.5458C24.5801 23.5547 24.4043 22.6758 24.4043 21.5773C24.4043 20.6057 24.4727 20.22 24.8388 19.0384C25.3906 17.2612 25.5175 16.4508 25.4833 14.986C25.454 13.8728 25.3808 13.4285 25.0732 12.4716C24.4483 10.5284 23.1349 8.82442 21.3919 7.69658C20.889 7.36946 20.4203 7.12534 20.4203 7.18881Z"
                    fill="#050505"
                  />
                </svg>
                <p>Chat Images: {chatImages ? "ON" : "OFF"}</p>
              </button>
              <p className="subContainerItem h-tertiary">
                When a bot sends you images, you will be charged secondary image
              </p>
              <div className="bots subContainerItem">
                {bots.map((bot) => {
                  return (
                    <div
                      className={bot.id === currBot ? "bot botActive" : "bot"}
                      onClick={() => handleBot(bot.id)}
                    >
                      <img className="botIcon" src="/Images/user1.svg" alt="" />
                      <div className="botInfo">
                        <p className="botName">{bot.botName}</p>
                        <p className="botDescription">{bot.botDescription}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="createBotBtn h-tertiary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M13.2664 0.0572796C10.4119 0.408964 7.89147 1.45816 5.58793 3.26348C4.97249 3.74412 3.53644 5.22119 3.04994 5.86595C1.50838 7.92331 0.529526 10.2151 0.130949 12.6828C-0.0155861 13.5913 -0.0448933 15.8304 0.0723352 16.8151C0.465051 20.0271 1.87179 23.0048 4.10499 25.3435C6.42026 27.7642 9.22788 29.2589 12.5572 29.8392C13.5771 30.015 15.7399 30.056 16.8184 29.9154C23.2777 29.1065 28.4475 24.3177 29.737 17.9581C30.0125 16.6099 30.0828 14.535 29.9128 13.1224C29.0688 6.34072 23.6528 0.92477 16.8712 0.0807247C16.0799 -0.0130577 13.9815 -0.0306416 13.2664 0.0572796ZM15.6168 7.4075C15.7751 7.50129 15.9333 7.66541 16.033 7.83539L16.1971 8.11087L16.2147 10.9361L16.2323 13.7613L19.0575 13.7789L21.8827 13.7965L22.1582 13.9606C22.9612 14.4295 22.9612 15.5666 22.1582 16.0355L21.8827 16.1996L19.0575 16.2172L16.2323 16.2348L16.2147 19.06L16.1971 21.8852L16.033 22.1607C15.5641 22.9637 14.427 22.9637 13.958 22.1607L13.7939 21.8852L13.7763 19.06L13.7588 16.2348L10.9336 16.2172L8.10835 16.1996L7.83286 16.0355C7.02985 15.5666 7.02985 14.4295 7.83286 13.9606L8.10835 13.7965L10.9336 13.7789L13.7588 13.7613L13.7763 10.9361L13.7939 8.11087L13.9522 7.83539C14.3097 7.23752 15.0131 7.05582 15.6168 7.4075Z"
                    fill="#F3AE9F"
                  />
                </svg>
                <p>Create new bot</p>
              </button>
            </div>
            <div className="subContainer" id="rightSubContainer">
              <div className="rightSubContainerCover h-tertiary" style={{
                opacity: showChats ? "0%" : "100%",
                pointerEvents: showChats ? "none" : "auto",
              }}>Select Bot To View Conversations.</div>
              <div className="subContainerTopBar">
                <div className="bot">
                  <img src="/Images/user1.svg" alt="" className="botIcon" />
                  <div className="botInfo">
                    <p className="botName">{currBotDetails.botName}</p>
                  </div>
                </div>
                <div className="topBarBtnContainer">
                  <button className="createBotBtn" onClick={() => setShowChats(0)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_157_1848)">
                        <path
                          d="M10.4775 0.0703049C8.31185 0.351555 6.32904 1.18124 4.59466 2.52187C4.04622 2.94843 3.11341 3.86718 2.65872 4.42968C1.36497 6.0328 0.507161 7.92656 0.141536 9.98906C0.0102865 10.7203 -0.041276 12.4781 0.043099 13.2797C0.244661 15.15 0.896224 16.9828 1.90872 18.5391C2.3681 19.2422 2.77122 19.7437 3.39935 20.3859C5.36341 22.4016 7.8431 23.6203 10.665 23.9484C11.2931 24.0234 12.8212 24.0094 13.5009 23.9297C17.0072 23.4937 20.1384 21.5297 22.0931 18.5391C23.0775 17.0344 23.7056 15.3047 23.9306 13.5C24.0244 12.7406 24.0244 11.2641 23.9306 10.5C23.4993 7.02187 21.54 3.88124 18.5868 1.94062C17.0447 0.928118 15.329 0.299992 13.5009 0.0703049C12.7884 -0.0140705 11.1525 -0.0140705 10.4775 0.0703049ZM9.89154 8.02499C10.1447 8.15624 10.2665 8.31562 10.2993 8.56874C10.3603 9.00937 10.3415 9.03281 9.22122 10.1578L8.18529 11.2031L13.0837 11.2125C17.6259 11.2266 17.9869 11.2312 18.1275 11.3062C18.3619 11.4375 18.4837 11.6484 18.5072 11.9625C18.5259 12.1969 18.5119 12.2625 18.4087 12.4172C18.3431 12.5156 18.2118 12.6328 18.1087 12.6844C17.94 12.7687 17.729 12.7734 13.065 12.7969L8.20404 12.8203L9.16966 13.7812C9.69935 14.3109 10.1728 14.8219 10.2243 14.9156C10.3415 15.1453 10.3415 15.4922 10.2197 15.6937C10.0368 15.9891 9.65247 16.1344 9.31497 16.0312C9.15091 15.9844 8.84622 15.7031 7.3931 14.2594C6.44154 13.3125 5.62591 12.4594 5.57435 12.3656C5.47591 12.1734 5.45716 11.8875 5.53685 11.6859C5.60716 11.4891 8.98216 8.11874 9.21185 8.01093C9.46029 7.89374 9.63841 7.89843 9.89154 8.02499Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_157_1848">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Back
                  </button>
                  <button className="createBotBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.63281 2.04376C9.23906 2.18907 9 2.55001 9 3.00001C9 3.46876 9.27188 3.84845 9.69844 3.9797C9.94688 4.0547 14.0531 4.0547 14.3016 3.9797C14.7281 3.84845 15 3.46876 15 3.00001C15 2.54064 14.7609 2.18439 14.3484 2.03907C14.0531 1.93595 9.91875 1.94064 9.63281 2.04376Z"
                        fill="white"
                      />
                      <path
                        d="M2.70938 5.01563C2.46563 5.09063 2.25 5.25938 2.11875 5.475C2.01562 5.65313 1.99219 5.75157 1.99219 6C1.99219 6.39844 2.15156 6.68907 2.475 6.87657L2.69531 7.00782L3.82969 7.02188L4.96875 7.03594L4.97813 13.3031L4.99219 19.5703L5.11875 19.9266C5.40469 20.7328 5.90156 21.3188 6.61406 21.6797C7.29844 22.0266 6.95625 22.0078 12 22.0078C16.2516 22.0078 16.5422 22.0031 16.8047 21.9234C17.8313 21.6094 18.5625 20.8828 18.9188 19.8281C19.0031 19.5844 19.0078 19.2656 19.0219 13.3031L19.0312 7.03594L20.1703 7.02188C21.4031 7.00782 21.4406 6.99844 21.7219 6.72188C21.9375 6.50625 22.0031 6.33282 22.0078 6C22.0078 5.60157 21.8484 5.31094 21.525 5.12344L21.3047 4.99219L12.0703 4.98282C6.98906 4.97813 2.77969 4.99219 2.70938 5.01563ZM10.35 10.1063C10.5797 10.2 10.7719 10.3875 10.8797 10.6172C10.9594 10.7906 10.9688 10.9734 10.9688 13.5C10.9688 16.5188 10.9781 16.4109 10.6266 16.7203C10.1438 17.1422 9.44063 17.0063 9.14531 16.4297L9.02344 16.2L9.00938 13.6781C9 12.0563 9.01406 11.0578 9.04688 10.8844C9.16406 10.2281 9.77344 9.8625 10.35 10.1063ZM14.5406 10.2C14.6578 10.2797 14.7844 10.4297 14.8547 10.5703L14.9766 10.8V13.5V16.2L14.8547 16.4297C14.5594 17.0063 13.8563 17.1422 13.3734 16.7203C13.0219 16.4109 13.0312 16.5141 13.0312 13.5094C13.0312 10.5797 13.0266 10.6359 13.3031 10.3406C13.6266 9.99844 14.1656 9.9375 14.5406 10.2Z"
                        fill="white"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
              <div className="messages">
                {currBotDetails.chatHistory.map((chat) => {
                  return chat.sender ? (
                    <div class="message message-receiver">
                      <img
                        style={{
                          display: chatImages ? 'block' : 'none',
                        }}
                        src="./Images/user2.svg"
                        alt=""
                        className="botIcon"
                      />
                      <p>{chat.message}</p>
                    </div>
                  ) : (
                    <div class="message message-sender">
                      <img
                        style={{
                          display: chatImages ? 'block' : 'none',
                        }}
                        src="./Images/user1.svg"
                        alt=""
                        className="botIcon"
                      />
                      <p>{chat.message}</p>
                    </div>
                  );
                })}
              </div>
              <div className="messageBar">
                <form autocomplete="off" onSubmit={handleForm}>
                  <input type="text" name="message" placeholder="Message" />
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M17.4839 3.20696L7.70141 6.45696C1.12557 8.65613 1.12557 12.242 7.70141 14.4303L10.6047 15.3945L11.5689 18.2978C13.7572 24.8736 17.3539 24.8736 19.5422 18.2978L22.8031 8.52613C24.2547 4.13862 21.8714 1.74446 17.4839 3.20696ZM17.8306 9.03529L13.7139 13.1736C13.5514 13.3361 13.3456 13.412 13.1397 13.412C12.9339 13.412 12.7281 13.3361 12.5656 13.1736C12.2514 12.8595 12.2514 12.3395 12.5656 12.0253L16.6822 7.88696C16.9964 7.57279 17.5164 7.57279 17.8306 7.88696C18.1447 8.20113 18.1447 8.72113 17.8306 9.03529Z"
                        fill="#050505"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection1;
